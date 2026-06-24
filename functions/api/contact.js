const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Accept, Content-Type"
};

const REQUIRED_FIELDS = ["organization", "name", "email", "emailConfirm", "message"];

export async function onRequestOptions() {
  return new Response(null, { headers: CORS_HEADERS });
}

export async function onRequestPost({ request, env }) {
  try {
    const payload = await readPayload(request);

    if (payload._gotcha) {
      return json({ ok: true }, 200);
    }

    const data = normalizePayload(payload);
    const missing = REQUIRED_FIELDS.filter((field) => !data[field]);

    if (missing.length > 0) {
      return json({ message: "必須項目を入力してください。" }, 400);
    }

    if (!isValidEmail(data.email)) {
      return json({ message: "メールアドレスの形式を確認してください。" }, 400);
    }

    if (data.email !== data.emailConfirm) {
      return json({ message: "メールアドレスが一致していません。" }, 400);
    }

    const resendApiKey = cleanApiKey(env.RESEND_API_KEY);

    if (!resendApiKey) {
      return json({ message: "送信設定が未完了です。管理者にお問い合わせください。" }, 500);
    }

    const toEmail = cleanEnv(env.CONTACT_TO_EMAIL) || "hello@shishinote.jp";
    const fromEmail = cleanEnv(env.CONTACT_FROM_EMAIL) || "Shishinote <noreply@shishinote.jp>";
    const subject = `【シシノテ】無料見積もりのお問い合わせ: ${data.organization}`;
    const text = buildText(data);

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: data.email,
        subject,
        text,
        html: buildHtml(data)
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend API error", response.status, errorText);
      return json({ message: getResendErrorMessage(response.status, errorText) }, 502);
    }

    return json({ ok: true }, 200);
  } catch (error) {
    console.error(error);
    return json({ message: "送信に失敗しました。時間をおいて再度お試しください。" }, 500);
  }
}

async function readPayload(request) {
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return request.json();
  }

  if (contentType.includes("text/plain")) {
    return parseTextPayload(await request.text());
  }

  if (contentType.includes("application/x-www-form-urlencoded")) {
    return Object.fromEntries(new URLSearchParams(await request.text()).entries());
  }

  if (contentType.includes("multipart/form-data")) {
    const formData = await request.formData();
    return Object.fromEntries(formData.entries());
  }

  return {};
}

function parseTextPayload(text) {
  const trimmed = String(text || "").trim();

  if (!trimmed) {
    return {};
  }

  try {
    return JSON.parse(trimmed);
  } catch {
    return {};
  }
}

function normalizePayload(payload) {
  return {
    organization: clean(payload.organization, 120),
    name: clean(payload.name, 80),
    email: clean(payload.email, 120).toLowerCase(),
    emailConfirm: clean(payload.emailConfirm, 120).toLowerCase(),
    phone: clean(payload.phone, 40),
    websiteUrl: clean(payload.websiteUrl, 240),
    message: clean(payload.message, 3000)
  };
}

function clean(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

function cleanEnv(value) {
  return String(value || "").trim().replace(/^['"]|['"]$/g, "").replace(/[\r\n]/g, "");
}

function cleanApiKey(value) {
  return cleanEnv(value)
    .replace(/^RESEND_API_KEY=/i, "")
    .replace(/^Bearer\s+/i, "")
    .trim();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getResendErrorMessage(status, errorText) {
  const normalized = String(errorText || "").toLowerCase();

  if (status === 401 || status === 403 || normalized.includes("api key")) {
    return "送信設定の認証に失敗しています。管理者にお問い合わせください。";
  }

  if (
    normalized.includes("domain") ||
    normalized.includes("verify") ||
    normalized.includes("verified") ||
    normalized.includes("from")
  ) {
    return "送信元メールアドレスの認証設定を確認してください。";
  }

  if (status === 429 || normalized.includes("rate")) {
    return "送信が混み合っています。時間をおいて再度お試しください。";
  }

  return "送信に失敗しました。時間をおいて再度お試しください。";
}

function buildText(data) {
  return [
    "シシノテのサイトからお問い合わせがありました。",
    "",
    `法人名・店舗名: ${data.organization}`,
    `お名前: ${data.name}`,
    `メールアドレス: ${data.email}`,
    `電話番号: ${data.phone || "未入力"}`,
    `既存WEBサイト・SNSのURL等: ${data.websiteUrl || "未入力"}`,
    "",
    "お問い合わせ・ご相談内容:",
    data.message
  ].join("\n");
}

function buildHtml(data) {
  const rows = [
    ["法人名・店舗名", data.organization],
    ["お名前", data.name],
    ["メールアドレス", data.email],
    ["電話番号", data.phone || "未入力"],
    ["既存WEBサイト・SNSのURL等", data.websiteUrl || "未入力"],
    ["お問い合わせ・ご相談内容", data.message]
  ];

  return `
    <div style="font-family: sans-serif; line-height: 1.7; color: #111827;">
      <h1 style="font-size: 20px;">シシノテのサイトからお問い合わせがありました</h1>
      <table style="border-collapse: collapse; width: 100%;">
        ${rows.map(([label, value]) => `
          <tr>
            <th style="width: 180px; padding: 10px; border: 1px solid #d1d5db; background: #f3f4f6; text-align: left; vertical-align: top;">${escapeHtml(label)}</th>
            <td style="padding: 10px; border: 1px solid #d1d5db; white-space: pre-wrap;">${escapeHtml(value)}</td>
          </tr>
        `).join("")}
      </table>
    </div>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...CORS_HEADERS,
      "Content-Type": "application/json; charset=utf-8"
    }
  });
}
