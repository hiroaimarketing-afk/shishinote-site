// シシノテ LP v2 — Sections part 2 (Plans / Compare / Portfolio / Testimonials / Guarantee / Flow / FAQ / Contact / Footer / StickyCTA)

// ========================================================================
// PLANS
// ========================================================================
const Plans = () => (
  <section className="section band" id="plans">
    <Container>
      <SectionHead
        center
        eyebrow="PRICING"
        title={<><span className="accent">3万円</span>から、料金は<span className="hl">完全明朗</span></>}
        lead="初期制作費でサイトを公開できる状態まで整えます。公開後の更新は必要なときだけ。追加料金は事前明示が原則です。"
      />
      <div className="plan-grid">
        <article className="plan-card">
          <p className="plan-label">まずはお手軽に</p>
          <h3>ミニマム（LP1枚）</h3>
          <p className="price">30,000<small>円〜</small></p>
          <p className="plan-note">1ページで、お店の魅力と問い合わせ導線をシンプルに整えます。</p>
          <ul className="plan-features">
            <li>1ページLP・5セクションまで</li>
            <li>スマホ写真の簡易補正</li>
            <li>問い合わせフォーム</li>
            <li>Googleマップ埋め込み</li>
            <li>公開設定までシシノテで完結</li>
          </ul>
          <div className="cta"><Button variant="secondary" full href="#contact">このプランで相談 →</Button></div>
        </article>
        <article className="plan-card highlight">
          <span className="ribbon">人気No.1</span>
          <p className="plan-label">店舗サイトをしっかり整える</p>
          <h3>スタンダード</h3>
          <p className="price">100,000<small>円〜</small></p>
          <p className="plan-note">店舗情報をしっかり整理し、予約・問い合わせにつながる基本サイトを作ります。</p>
          <ul className="plan-features">
            <li>3〜5ページ・合計14セクションまで</li>
            <li>予約システム連携</li>
            <li>CMS / WordPress対応</li>
            <li>SNS・予約サイト導線整理</li>
            <li>公開時の動作確認まで実施</li>
          </ul>
          <div className="cta"><Button variant="primary" full href="#contact">このプランで相談 →</Button></div>
        </article>
        <article className="plan-card">
          <p className="plan-label">集客施策までまとめて</p>
          <h3>プレミアム</h3>
          <p className="price">300,000<small>円〜</small></p>
          <p className="plan-note">サイト制作に加え、GoogleマップやSNSまで含めた集客導線を整えます。</p>
          <ul className="plan-features">
            <li>本格サイト + LP1本</li>
            <li>MEO初期整備</li>
            <li>口コミ依頼導線の設計</li>
            <li>SNS/広告用コピー作成</li>
            <li>月次アクセス解析レポート</li>
          </ul>
          <div className="cta"><Button variant="secondary" full href="#contact">このプランで相談 →</Button></div>
        </article>
      </div>
    </Container>
  </section>
);

// ========================================================================
// COMPARE TABLE — Shishinote vs Freelance vs Big agency
// ========================================================================
const Compare = () => (
  <section className="section" id="compare">
    <Container>
      <SectionHead
        center
        eyebrow="COMPARISON"
        title={<>他社との<span className="accent">違い</span>を、正直に比較</>}
        lead="フリーランス・大手制作会社それぞれに良さがあります。シシノテが向く方の特徴を見極めてください。"
      />
      <div className="compare-wrap">
        <table className="compare-table">
          <thead>
            <tr>
              <th>項目</th>
              <th className="us">
                シシノテ
                <span className="sub">小〜中規模店舗特化</span>
              </th>
              <th>個人フリーランス</th>
              <th>大手制作会社</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>初期費用の目安</td>
              <td className="us">3万円〜30万円</td>
              <td>5万円〜30万円</td>
              <td className="bad">50万円〜200万円</td>
            </tr>
            <tr>
              <td>素材（写真・原稿）の準備</td>
              <td className="us">お任せ可・補正/原稿作成込み</td>
              <td className="bad">基本ご自身で用意</td>
              <td>別途料金で対応</td>
            </tr>
            <tr>
              <td>マーケ視点の構成設計</td>
              <td className="us">標準対応・専任ディレクター</td>
              <td className="bad">対応者によりばらつき</td>
              <td>標準対応</td>
            </tr>
            <tr>
              <td>公開までの期間</td>
              <td className="us">2〜3週間が目安</td>
              <td>2〜4週間</td>
              <td className="bad">2〜4ヶ月</td>
            </tr>
            <tr>
              <td>追加料金の扱い</td>
              <td className="us">見積もり時に事前明示</td>
              <td className="bad">対応者により差が大きい</td>
              <td>契約に準ずる</td>
            </tr>
            <tr>
              <td>公開後の運用相談</td>
              <td className="us">月額5,000円〜・解約自由</td>
              <td>都度見積もり</td>
              <td className="bad">年間契約が多い</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  </section>
);

// ========================================================================
// PORTFOLIO — tabbed gallery by industry
// ========================================================================
const PORTFOLIO_DATA = {
  all: [],
  clinic: [
    { img: "assets/portfolio/clinic-fv.png", tags: ["歯科", "新規開業"], name: "青葉デンタルクリニック", desc: "初診導線と予約ボタンを整理し、土曜診療の相談につながりやすい構成例。" },
    { img: "assets/demos/clinic-room.png",   tags: ["クリニック", "刷新"], name: "みどりの歯科クリニック",   desc: "架空医院の刷新例。家族で相談できる温度感を写真と構成で表現。" },
  ],
  cafe: [
    { img: "assets/portfolio/cafe-fv.png",   tags: ["カフェ", "開業告知"], name: "MADOBA COFFEE & BAKE", desc: "オープン前の告知やメニュー訴求を想定し、SNSから来店へつなげる導線例。" },
    { img: "assets/demos/cafe-menu.png",     tags: ["飲食店", "メニュー"], name: "町のカフェ「あかり」",   desc: "スマホ写真を補正して使う想定で、料理の魅力が伝わる見せ方を表現。" },
  ],
  fitness: [
    { img: "assets/portfolio/fitness-fv.png", tags: ["パーソナルジム", "体験予約"], name: "LIFT BASE AOYAMA",  desc: "体験予約前の不安を減らすため、料金・設備・トレーナー情報を整理した構成例。" },
    { img: "assets/demos/fitness-studio.png", tags: ["ジム", "ブランディング"], name: "スタジオ MOVE",        desc: "黒×ライムの世界観で、体験申し込みまでの流れをわかりやすく見せる提案例。" },
  ],
};

const Portfolio = () => {
  const [tab, setTab] = React.useState("clinic");
  const items = PORTFOLIO_DATA[tab] || [];
  const tabs = [
    { key: "clinic",  label: "クリニック・歯科" },
    { key: "cafe",    label: "カフェ・飲食店" },
    { key: "fitness", label: "パーソナルジム" },
  ];
  return (
    <section className="section band" id="proof">
      <Container>
        <SectionHead
          center
          eyebrow="SAMPLE DESIGNS"
          title={<>業種別・<span className="accent">制作イメージ</span></>}
          lead="実際の受注実績ではなく、業種ごとの提案例として作成したサンプルです。クリニック / 飲食 / ジムなど、見込み客の心理に合わせた構成を確認できます。"
        />
        <div className="tabs">
          {tabs.map(t => (
            <button
              key={t.key}
              type="button"
              className={`tab${tab === t.key ? " active" : ""}`}
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          {items.map((it, i) => (
            <article key={i} className="portfolio-item">
              <div className="portfolio-img"><img src={it.img} alt={it.name} /></div>
              <div className="portfolio-meta">
                <div className="tag-row">{it.tags.map((t, j) => <span key={j}>{t}</span>)}</div>
                <h4>{it.name}</h4>
                <p>{it.desc}</p>
              </div>
            </article>
          ))}
          <article className="portfolio-item" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 40, textAlign: "center" }}>
            <div>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 900, color: "var(--ink)", marginBottom: 12 }}>このカテゴリで<br/>もっと見たい方は</p>
              <Button variant="primary" href="#contact">事例集をリクエスト →</Button>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};

// ========================================================================
// GUARANTEE
// ========================================================================
const Guarantee = () => (
  <section className="section">
    <Container>
      <SectionHead
        center
        eyebrow="OUR PROMISE"
        title={<>安心して任せていただくための<br/><span className="accent">3つの約束</span></>}
      />
      <div className="guarantee-grid">
        <article className="guarantee-card">
          <span className="seal">事前<br/>明示</span>
          <h3>追加料金は<br/>事前に必ずご相談</h3>
          <p>見積もり段階で発生しうる費用を事前にご案内し、ご了承いただいた範囲を超える追加請求は行いません。「気づいたら高くなっていた」を防ぐ、明朗会計を約束します。</p>
        </article>
        <article className="guarantee-card">
          <span className="seal">伴走型<br/>制作</span>
          <h3>素材ゼロから<br/>公開まで一気通貫</h3>
          <p>写真補正・撮影指示書・原稿のたたき台までシシノテで整えます。「写真が無い」「文章が書けない」状態でも、店舗側の準備負担を最小限にして公開まで進めます。</p>
        </article>
        <article className="guarantee-card">
          <span className="seal">縛り<br/>なし</span>
          <h3>公開後の保守は<br/>必要なときだけ</h3>
          <p>月額保守は5,000円〜・解約自由。年間契約や違約金はありません。「公開後しばらく動きが無い時期」は止めて、繁忙期だけ再開する使い方もできます。</p>
        </article>
      </div>
    </Container>
  </section>
);

// ========================================================================
// FLOW
// ========================================================================
const Flow = () => (
  <section className="section band" id="flow">
    <Container>
      <SectionHead
        center
        eyebrow="FLOW"
        title={<>無料相談から<span className="accent">公開まで</span>の流れ</>}
        lead="店舗側にお願いするのは、ヒアリングと2回の確認だけ。残りはすべてシシノテで進めます。"
      />
      <ol className="flow-list">
        <li>
          <span className="step-num">STEP 01</span>
          <span className="duration">当日〜翌営業日</span>
          <h3>無料相談</h3>
          <p>業種・必要なページ・素材の状況を確認。概算と進め方をお伝えします。</p>
        </li>
        <li>
          <span className="step-num">STEP 02</span>
          <span className="duration">2〜3日</span>
          <h3>構成提案</h3>
          <p>誰に何を伝えるかを整理し、ページ構成・予約導線・素材リストを決定。</p>
        </li>
        <li>
          <span className="step-num">STEP 03</span>
          <span className="duration">1〜2週間</span>
          <h3>制作・整え</h3>
          <p>スマホ写真と箇条書きをWeb向けに整え、デザイン・コピー・公開設定を進めます。</p>
        </li>
        <li>
          <span className="step-num">STEP 04</span>
          <span className="duration">公開後</span>
          <h3>公開・改善</h3>
          <p>公開時の動作確認と、次に見直すとよいポイントをご提案します。</p>
        </li>
      </ol>
    </Container>
  </section>
);

// ========================================================================
// FAQ
// ========================================================================
const FAQItem = ({ q, a }) => <details><summary>{q}</summary><p>{a}</p></details>;
const FAQ = () => (
  <section className="section" id="faq">
    <Container>
      <SectionHead
        center
        eyebrow="FAQ"
        title={<>よくある<span className="accent">ご質問</span></>}
      />
      <div className="faq-grid">
        <FAQItem q="写真や文章がなくても本当に依頼できますか？" a="可能です。スマホ写真の補正、撮影指示書の作成、ヒアリングからの文章作成まで、ご状況に合わせて進め方をご提案します。素材ゼロからのご依頼が全体の約7割です。" />
        <FAQItem q="無料デモサイトとは何ですか？" a="ご相談前に、業種・店舗名・特徴をお伝えいただければ、シシノテで1ページのデモサイトを無料で制作します。契約義務はなく、気に入らなければ破棄でOKです。" />
        <FAQItem q="公開までどれくらいかかりますか？" a="LP1枚で2〜3週間、3〜5ページの基本サイトで4〜6週間が目安です。素材の準備状況や修正のラリーによって前後しますが、シシノテ側で巻き取れる作業が多いので、店舗側の負担は少なく進められます。" />
        <FAQItem q="修正回数に上限はありますか？" a="プランごとに目安の回数を事前にご案内します。回数を超える大幅な修正や、構成自体の変更が必要な場合は、別途お見積もりとなることがあります。ご了承いただいた範囲を超える追加請求は行いません。" />
        <FAQItem q="スマホ写真をどこまで整えられますか？" a="明るさ、色味、傾き、余計な写り込み、Web用の切り出しなどを整えられます。実物と違う設備や商品を追加するような、誤認につながる加工は行いません。" />
        <FAQItem q="予約システムも作れますか？" a="既存の予約サイト、LINE、Googleフォームなどとの連携を基本にします。独自予約システムが必要な場合は別見積もりです。" />
        <FAQItem q="公開後の更新は誰が行いますか？" a="月額保守プラン（5,000円〜）でシシノテが対応、または操作レクチャー込みで店舗様ご自身で更新、どちらも選べます。プランは解約自由です。" />
        <FAQItem q="エリアはどこまで対応していますか？" a="基本はオンラインで全国対応します。出張撮影は別途お見積もりで、首都圏・関西圏は対応実績があります。それ以外のエリアもまずはご相談ください。" />
      </div>
    </Container>
  </section>
);

// ========================================================================
// CONTACT
// ========================================================================
const ContactForm = () => {
  const [busy, setBusy] = React.useState(false);
  const [status, setStatus] = React.useState({ state: "", msg: "" });

  const submit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") || "").trim();
    const emailConfirm = String(formData.get("emailConfirm") || "").trim();
    const topic = String(formData.get("topic") || "").trim();
    const freeMessage = String(formData.get("messageBody") || "").trim();

    if (email !== emailConfirm) {
      setStatus({ state: "error", msg: "メールアドレスが一致していません。確認用メールアドレスを見直してください。" });
      return;
    }

    const payload = {
      organization: String(formData.get("organization") || "").trim(),
      name: String(formData.get("name") || "").trim(),
      email,
      emailConfirm,
      phone: String(formData.get("phone") || "").trim(),
      websiteUrl: String(formData.get("websiteUrl") || "").trim(),
      message: [
        topic && `ご希望のご相談内容: ${topic}`,
        freeMessage && `詳細:\n${freeMessage}`
      ].filter(Boolean).join("\n\n")
    };

    setBusy(true);
    setStatus({ state: "", msg: "送信中です。少しだけお待ちください。" });

    try {
      const response = await fetch(new URL("/api/contact", window.location.href).href, {
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

      form.reset();
      window.location.assign("thanks.html");
    } catch (error) {
      setStatus({
        state: "error",
        msg: error instanceof Error ? error.message : "送信に失敗しました。時間をおいて再度お試しください。"
      });
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="section contact" id="contact">
      <Container className="contact-layout">
        <div>
          <Eyebrow>FREE CONSULTATION</Eyebrow>
          <h2 className="section-title">
            まずは<span style={{ background: "linear-gradient(180deg, transparent 60%, rgba(247,183,51,.4) 60%)", padding: "0 4px" }}>30秒</span>の<br/>
            無料相談から。
          </h2>
          <p style={{ marginTop: 22 }}>
            店舗名、業種、作りたいページ、写真や原稿の準備状況をお聞きします。<br/>
            必要な範囲と概算費用を整理してお返しします。営業電話は一切ありません。
          </p>
          <ul className="contact-perks" style={{ margin: 0, padding: 0, listStyle: "none" }}>
            <li>原則1〜2営業日以内にご返信</li>
            <li>無料デモサイト制作（希望時）</li>
            <li>その場で概算費用がわかる簡単見積もりつき</li>
            <li>断りやすい・営業電話なし</li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" aria-hidden="true" hidden />
          <label>
            <span className="field-label">店舗名・法人名</span>
            <span className="field-required">必須</span>
            <input type="text" name="organization" autoComplete="organization" required />
          </label>
          <label>
            <span className="field-label">お名前</span>
            <span className="field-required">必須</span>
            <input type="text" name="name" autoComplete="name" required />
          </label>
          <label>
            <span className="field-label">メールアドレス</span>
            <span className="field-required">必須</span>
            <input type="email" name="email" autoComplete="email" inputMode="email" required />
          </label>
          <label>
            <span className="field-label">メールアドレス確認</span>
            <span className="field-required">必須</span>
            <input type="email" name="emailConfirm" autoComplete="email" inputMode="email" required />
          </label>
          <label>
            <span className="field-label">電話番号</span>
            <input type="tel" name="phone" autoComplete="tel" inputMode="tel" />
          </label>
          <label>
            <span className="field-label">既存WEBサイト・SNSのURL等</span>
            <input type="url" name="websiteUrl" placeholder="https://" inputMode="url" />
          </label>
          <label>
            <span className="field-label">ご希望のご相談内容</span>
            <select name="topic">
              <option>無料デモサイトを依頼したい</option>
              <option>料金プランの相談</option>
              <option>既存サイトの刷新</option>
              <option>新規開業に向けた制作</option>
              <option>その他</option>
            </select>
          </label>
          <label>
            <span className="field-label">ご相談内容（任意）</span>
            <textarea name="messageBody" rows="4" placeholder="業種・店舗エリア・現状のWeb有無など、わかる範囲でお書きください。" />
          </label>
          <p className="form-status" data-state={status.state} aria-live="polite">{status.msg}</p>
          <Button type="submit" variant="primary" full disabled={busy}>
            {busy ? "送信中..." : "1営業日以内に返信を受け取る →"}
          </Button>
          <p style={{ margin: 0, fontSize: 11, color: "var(--muted)", fontWeight: 700, textAlign: "center" }}>
            送信いただいた情報は、ご相談対応のみに利用します。
          </p>
        </form>
      </Container>
    </section>
  );
};

// ========================================================================
// FOOTER
// ========================================================================
const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-inner">
      <a className="brand" href="#top">
        <img src="assets/shishinote-logo-mark.png" alt="" style={{ width: 36, height: 36 }} />
        <span>シシノテ</span>
      </a>
      <p>写真も原稿も、まるっと任せるWeb制作。</p>
      <small className="footer-copy">© 2026 シシノテ</small>
    </div>
  </footer>
);

// ========================================================================
// STICKY MOBILE CTA
// ========================================================================
const StickyCTA = () => (
  <div className="sticky-cta">
    <Button variant="secondary" href="#diagnose">簡単見積もり</Button>
    <Button variant="primary" href="#contact">無料相談する →</Button>
  </div>
);

window.Plans = Plans;
window.Compare = Compare;
window.Portfolio = Portfolio;
window.Guarantee = Guarantee;
window.Flow = Flow;
window.FAQ = FAQ;
window.ContactForm = ContactForm;
window.Footer = Footer;
window.StickyCTA = StickyCTA;

