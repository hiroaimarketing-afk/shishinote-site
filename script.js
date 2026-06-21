const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("is-open", !isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    }
  });
}

const contactForm = document.querySelector("[data-contact-form]");

if (contactForm instanceof HTMLFormElement) {
  const status = contactForm.querySelector("[data-form-status]");
  const submitButton = contactForm.querySelector('button[type="submit"]');

  const getContactEndpoint = () => {
    return new URL(contactForm.getAttribute("action") || "/api/contact", window.location.href).href;
  };

  const setStatus = (message, state) => {
    if (!(status instanceof HTMLElement)) return;
    status.textContent = message;
    if (state) {
      status.dataset.state = state;
    } else {
      delete status.dataset.state;
    }
  };

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const payload = Object.fromEntries(formData.entries());

    if (payload._gotcha) return;

    if (payload.email !== payload.emailConfirm) {
      setStatus("メールアドレスが一致していません。確認用メールアドレスを見直してください。", "error");
      return;
    }

    if (submitButton instanceof HTMLButtonElement) {
      submitButton.disabled = true;
    }

    setStatus("送信中です。少しだけお待ちください。", "");

    try {
      const response = await fetch(getContactEndpoint(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "送信に失敗しました。時間をおいて再度お試しください。");
      }

      contactForm.reset();
      window.location.assign("thanks.html");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "送信に失敗しました。時間をおいて再度お試しください。", "error");
    } finally {
      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = false;
      }
    }
  });
}
