// シシノテ LP v2 — Components
// Babel transpiles this; exports go on window for cross-script sharing.

// ========================================================================
// SHARED PRIMITIVES
// ========================================================================
const Container = ({ children, className = "" }) => (
  <div className={`container ${className}`}>{children}</div>
);

// Line-drawn brand-safe icons (no emoji / Unicode pictographs).
// Stroke = currentColor so they inherit accent.
const Icon = {
  check: (p) => (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polyline points="4 11 8 15 16 6" />
    </svg>
  ),
  cross: (p) => (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" {...p}>
      <line x1="5" y1="5" x2="15" y2="15" />
      <line x1="15" y1="5" x2="5" y2="15" />
    </svg>
  ),
  arrowRight: (p) => (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="4" y1="10" x2="16" y2="10" />
      <polyline points="11 5 16 10 11 15" />
    </svg>
  ),
  drag: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polyline points="9 6 4 12 9 18" />
      <polyline points="15 6 20 12 15 18" />
    </svg>
  ),
  sparkle: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3 L13.5 9 L19.5 10.5 L13.5 12 L12 18 L10.5 12 L4.5 10.5 L10.5 9 Z" />
    </svg>
  ),
  gift: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="8" width="18" height="13" rx="1" />
      <line x1="12" y1="8" x2="12" y2="21" />
      <line x1="3" y1="13" x2="21" y2="13" />
      <path d="M12 8c-1.5-3-6-3-6 0 0 1 1 2 3 2h3" />
      <path d="M12 8c1.5-3 6-3 6 0 0 1-1 2-3 2h-3" />
    </svg>
  ),
  coin: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M14 8.5h-3.5a1.5 1.5 0 0 0 0 3h3a1.5 1.5 0 0 1 0 3H10" />
      <line x1="12" y1="7" x2="12" y2="8.5" />
      <line x1="12" y1="14.5" x2="12" y2="17" />
    </svg>
  ),
};

const Eyebrow = ({ children }) => <p className="eyebrow">{children}</p>;

const SectionHead = ({ eyebrow, title, lead, center, dark }) => (
  <div className={`section-head${center ? " center" : ""}${dark ? " dark" : ""}`}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    {title && <h2 className="section-title">{title}</h2>}
    {lead && <p>{lead}</p>}
  </div>
);

const Button = ({ children, variant = "primary", href = "#", onClick, type, disabled, large, full, className = "" }) => {
  const cls = `button ${variant} ${large ? "large" : ""} ${full ? "full" : ""} ${className}`;
  if (type === "submit" || onClick) {
    return (
      <button className={cls} type={type || "button"} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  }
  return <a className={cls} href={href}>{children}</a>;
};

// ========================================================================
// URGENCY BAR (top notification)
// ========================================================================
const UrgencyBar = ({ enabled }) => {
  if (!enabled) return null;
  return (
    <div className="urgency-bar">
      <span><span className="dot"></span>今月の受付 <strong>&nbsp;残り3枠</strong></span>
      <span aria-hidden="true">·</span>
      <span>無料相談から成約で <strong>&nbsp;初期費用 最大2万円OFF</strong></span>
    </div>
  );
};

// ========================================================================
// HEADER
// ========================================================================
const Header = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="シシノテ トップへ">
        <img className="brand-logo-full" src="assets/shishinote-logo-full.png" alt="シシノテ" />
      </a>
      <button className="nav-toggle" type="button" aria-expanded={open} onClick={() => setOpen(v => !v)}>
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="18" height="2" rx="1" fill="#111827"/>
          <rect y="6" width="18" height="2" rx="1" fill="#111827"/>
          <rect y="12" width="18" height="2" rx="1" fill="#111827"/>
        </svg>
      </button>
      <nav className={`site-nav${open ? " is-open" : ""}`} aria-label="主要メニュー">
        <a href="#why" onClick={() => setOpen(false)}>選ばれる理由</a>
        <a href="#proof" onClick={() => setOpen(false)}>制作イメージ</a>
        <a href="#plans" onClick={() => setOpen(false)}>料金</a>
        <a href="#diagnose" onClick={() => setOpen(false)}>簡単見積もり</a>
        <a href="#flow" onClick={() => setOpen(false)}>制作の流れ</a>
        <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
      </nav>
      <a href="#contact" className="header-cta">無料相談</a>
    </header>
  );
};

// ========================================================================
// HERO — 3 variants (A/B/C)
// ========================================================================
const Hero = ({ variant }) => {
  // A: ベネフィット訴求（マーケのプロが集客につながるWebを）
  // B: 無料デモサイト訴求
  // C: 3万円〜のスペック訴求（元のシシノテ）
  const content = {
    A: {
      flag: { badge: <Icon.sparkle width="14" height="14" />, text: "マーケティングのプロが伴走" },
      title: <>
        <span className="nowrap"><span className="hl">集客</span>につながる</span><wbr/>
        <span className="nowrap">Webサイトを、</span><br/>
        <span className="nowrap"><span className="accent">写真も原稿も</span></span><wbr/>
        <span className="nowrap">丸ごとお任せ。</span>
      </>,
      lead: "スマホ写真と箇条書きでOK。マーケのプロが構成・コピー・写真補正まで整え、予約・来店につながる店舗Webを制作します。",
      cta: "まずは無料相談",
      sub: "制作イメージを見る",
      offer: {
        head: "ご相談無料",
        strong: "店舗ヒアリングから構成案までを無料でご提示",
        small: "概算費用・進め方をご提案。営業の電話は一切しません"
      }
    },
    B: {
      flag: { badge: <Icon.gift width="14" height="14" />, text: "ご相談者限定" },
      title: <>
        あなたの店舗の<br/>
        <span className="accent">デモサイト</span>を<br/>
        <span className="hl">無料で作成</span>します。
      </>,
      lead: "「契約前に仕上がりが見たい」を解決。業種・店名・特徴をお伝えいただければ、シシノテがゼロから1ページのデモを無料で制作します。",
      cta: "無料でデモを依頼する",
      sub: "サンプルを見る",
      offer: {
        head: "デモ制作料",
        strong: "0円・契約義務なし",
        small: "気に入らなければそのまま破棄でOK"
      }
    },
    C: {
      flag: { badge: <Icon.coin width="14" height="14" />, text: "3万円から始められる" },
      title: <>
        <span className="accent">3万円から</span>LP・<br/>
        WEBサイト制作<br/>
        <span className="hl">まるっとお任せ！</span>
      </>,
      lead: "スマホ写真と箇条書きから、プロが構成を整え、予約・来店につながるWebサイトを制作します。",
      cta: "まずは無料見積もり",
      sub: "制作例を見る",
      offer: {
        head: "初期費用",
        strong: "30,000円〜（LP1枚プラン）",
        small: "保守は必要なときだけ・月額5,000円〜"
      }
    }
  };
  const c = content[variant] || content.A;

  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="hero-flag">
            <span className="badge">{c.flag.badge}</span>
            {c.flag.text}
          </span>
          <h1>{c.title}</h1>
          <p className="hero-lead">{c.lead}</p>
          <div className="hero-actions">
            <Button variant="primary" large href="#contact">{c.cta} →</Button>
            <Button variant="secondary" large href="#proof">{c.sub}</Button>
          </div>
          <div className="hero-offer">
            <div className="gift">
              {variant === "B" ? <Icon.gift width="22" height="22" />
                : variant === "C" ? <Icon.coin width="22" height="22" />
                : <Icon.check width="22" height="22" />}
            </div>
            <div className="body">
              <span className="head">{c.offer.head}</span>
              <strong>{c.offer.strong}</strong>
              <small>{c.offer.small}</small>
            </div>
          </div>
        </div>
        <div className="hero-visual" aria-label="スマホ写真とメモをWebサイトに整える流れ">
          <picture className="hero-visual-picture">
            <source media="(max-width: 880px)" srcSet="assets/concepts/shishinote-fv-sp-v3-visual-user-edited.png" />
            <img
              className="hero-visual-image"
              src="assets/concepts/shishinote-fv-v2-right-visual-clean.png"
              alt="スマホ写真と箇条書きメモから、写真補正、文章作成、予約導線を整えてWebサイトに仕上げる流れ"
            />
          </picture>
        </div>
      </div>
      <div className="hero-trust">
        <div>
          <span className="label">素材準備</span>
          <span className="value"><span className="accent">スマホ写真</span><span className="unit">でOK</span></span>
        </div>
        <div>
          <span className="label">原稿作成</span>
          <span className="value"><span className="accent">プロ</span><span className="unit">が代筆</span></span>
        </div>
        <div>
          <span className="label">構成設計</span>
          <span className="value"><span className="accent">マーケ視点</span><span className="unit">で組み立て</span></span>
        </div>
        <div>
          <span className="label">初期費用</span>
          <span className="value"><span className="accent">30,000円</span><span className="unit">〜</span></span>
        </div>
      </div>
    </section>
  );
};

// ========================================================================
// PAIN BAR — pain points → "全部任せてOK"
// ========================================================================
const PainBar = () => (
  <section className="pain-bar" aria-label="よくあるお悩み">
    <div className="pain-inner">
      <h3>こんなお悩み、<span className="underline">全部任せてOK</span>です</h3>
      <ul className="pain-list">
        <li>写真がスマホで撮ったものしかない</li>
        <li>文章を書く時間がない</li>
        <li>何を載せればいいか分からない</li>
        <li>大手の制作会社は高くて手が出ない</li>
        <li>SNSはあるけどHPが無い</li>
        <li>古いHPを刷新したい</li>
      </ul>
    </div>
  </section>
);

window.Container = Container;
window.Eyebrow = Eyebrow;
window.SectionHead = SectionHead;
window.Button = Button;
window.UrgencyBar = UrgencyBar;
window.Header = Header;
window.Hero = Hero;
window.PainBar = PainBar;

