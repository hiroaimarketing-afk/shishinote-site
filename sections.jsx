// シシノテ LP v2 — Sections (Reasons / Before-After / Plans / Compare / Portfolio / Testimonials / Guarantee / Flow / FAQ / Contact / Footer)

// ========================================================================
// REASONS — 選ばれる理由 (3 cards with numbers + stats)
// ========================================================================
const Reasons = () => (
  <section className="section" id="why">
    <Container>
      <SectionHead
        center
        eyebrow="WHY SHISHINOTE"
        title={<>シシノテが<span className="accent">選ばれる理由</span></>}
        lead="他社では断られがちな「素材が揃っていない店舗」こそ、シシノテの得意領域です。"
      />
      <div className="reason-grid">
        <article className="reason-card">
          <span className="num">01</span>
          <h3><span className="accent">マーケのプロ</span>が構成設計から伴走</h3>
          <p>誰に何を伝えるか、どこで予約させるかを、店舗マーケ経験豊富なディレクターが設計。「作って終わり」のWebではなく、来店・予約につながる導線を組み立てます。</p>
          <div className="stat">構成・コピー・写真の見せ方まで一貫</div>
        </article>
        <article className="reason-card">
          <span className="num">02</span>
          <h3>素材は<span className="accent">スマホ写真</span>と箇条書きでOK</h3>
          <p>写真補正、撮影指示書の作成、原稿のたたき台まで全部こちらで整えます。店舗側にお願いするのは、お店の魅力と現状を教えていただくことだけ。</p>
          <div className="stat">「素材ゼロ」からのご依頼にも対応</div>
        </article>
        <article className="reason-card">
          <span className="num">03</span>
          <h3>料金は<span className="accent">完全明朗</span>・必要なときだけ保守</h3>
          <p>お見積もりは事前明示が原則で、ご了承いただいた範囲を超える追加請求は行いません。公開後の保守も月額5,000円〜の必要分だけで、年間契約は不要です。</p>
          <div className="stat">追加費用は事前に必ずご相談</div>
        </article>
      </div>
    </Container>
  </section>
);

// ========================================================================
// BEFORE / AFTER — slider showing photo correction
// ========================================================================
const BeforeAfterCard = ({ before, after, title, desc }) => {
  const [pos, setPos] = React.useState(50);
  const ref = React.useRef(null);
  const dragging = React.useRef(false);

  const move = (clientX) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
    setPos((x / rect.width) * 100);
  };

  const onDown = (e) => {
    dragging.current = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    move(clientX);
  };
  const onMove = (e) => {
    if (!dragging.current) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    move(clientX);
  };
  const onUp = () => { dragging.current = false; };

  React.useEffect(() => {
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
  }, []);

  return (
    <div className="ba-card">
      <div
        className="ba-frame"
        ref={ref}
        style={{ "--pos": pos + "%" }}
        onMouseDown={onDown}
        onTouchStart={onDown}
      >
        <img className="after" src={after} alt="" />
        <img className="before" src={before} alt="" />
        <span className="tag before-tag">BEFORE</span>
        <span className="tag after-tag">AFTER</span>
        <div className="handle"></div>
      </div>
      <div className="ba-meta">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const BeforeAfter = () => (
  <section className="section band" id="ba">
    <Container>
      <SectionHead
        eyebrow="BEFORE / AFTER"
        title={<>スマホ写真が、<br/><span className="accent">Web素材</span>に生まれ変わる。</>}
        lead="お客様から送られてきたスマホ写真を、シシノテが Web 用に補正・整理します（バーをドラッグして比較）。"
      />
      <div className="ba-grid">
        <BeforeAfterCard
          before="assets/demos/before-clinic-user-20260630.png"
          after="assets/demos/after-clinic.png"
          title="歯科クリニック・診療室"
          desc="室内照明だけで撮影した暗い写真を、自然光が差し込むような明るさに。緑の差し色と木目の質感が伝わるトーンに整えます。"
        />
        <BeforeAfterCard
          before="assets/demos/before-cafe-user-20260630.png"
          after="assets/demos/after-cafe.png"
          title="カフェ・モーニング写真"
          desc="影に沈みがちな店内の食卓写真を、シズル感の出る明るさと色味に補正。トーストの焼き色やフルーツの鮮やかさを引き出します。"
        />
        <BeforeAfterCard
          before="assets/demos/before-fitness-user-20260630.png"
          after="assets/demos/after-fitness.png"
          title="パーソナルジム・スタジオ"
          desc="黒い設備とフロアで暗く沈みがちな空間を、間接照明の温度感と素材感が伝わる明るさに。器具の質感も鮮明になります。"
        />
      </div>
    </Container>
  </section>
);

// ========================================================================
// DIAGNOSTIC TOOL — 5-question quiz returning recommended plan
// ========================================================================
const DIAG_QUESTIONS = [
  {
    q: "現在のWebサイトの状況を教えてください",
    options: [
      { label: "まだHPは無い（SNSのみ）", score: { mini: 2, std: 1, prem: 0 } },
      { label: "古いHPを刷新したい", score: { mini: 1, std: 3, prem: 1 } },
      { label: "新店舗のオープン告知が必要", score: { mini: 3, std: 1, prem: 0 } },
      { label: "集客を本気で伸ばしたい", score: { mini: 0, std: 2, prem: 3 } },
    ]
  },
  {
    q: "用意できるページ数は？",
    options: [
      { label: "1ページで十分", score: { mini: 3, std: 0, prem: 0 } },
      { label: "3〜5ページくらい", score: { mini: 0, std: 3, prem: 1 } },
      { label: "本格的なサイトを作りたい", score: { mini: 0, std: 1, prem: 3 } },
    ]
  },
  {
    q: "予約・問い合わせの仕組みは？",
    options: [
      { label: "フォームか電話で十分", score: { mini: 3, std: 1, prem: 0 } },
      { label: "予約サイト/LINE と連携したい", score: { mini: 1, std: 3, prem: 1 } },
      { label: "予約・決済も組み込みたい", score: { mini: 0, std: 1, prem: 3 } },
    ]
  },
  {
    q: "SNS・Google マップの活用は？",
    options: [
      { label: "今はサイトだけで十分", score: { mini: 3, std: 1, prem: 0 } },
      { label: "SNS リンク設置くらいで", score: { mini: 1, std: 3, prem: 1 } },
      { label: "MEO・SNS まで本格的に", score: { mini: 0, std: 0, prem: 3 } },
    ]
  },
  {
    q: "公開後の更新・改善は？",
    options: [
      { label: "公開できたら一旦終わりでOK", score: { mini: 3, std: 1, prem: 0 } },
      { label: "月1〜2回は更新したい", score: { mini: 0, std: 3, prem: 2 } },
      { label: "アクセス解析しながら改善したい", score: { mini: 0, std: 1, prem: 3 } },
    ]
  },
];

const PLAN_INFO = {
  mini: {
    badge: "おすすめプラン",
    name: "ミニマム（LP1枚）",
    price: "30,000円〜",
    items: [
      "1ページLP・5セクションまで",
      "問い合わせフォーム・SNSリンク",
      "スマホ対応・写真の簡易補正",
      "公開設定までシシノテで完結"
    ]
  },
  std: {
    badge: "おすすめプラン",
    name: "スタンダード",
    price: "100,000円〜",
    items: [
      "3〜5ページ・合計14セクションまで",
      "予約システム連携・CMS対応",
      "Googleマップ・SNS導線整理",
      "公開時の動作確認まで実施"
    ]
  },
  prem: {
    badge: "おすすめプラン",
    name: "プレミアム",
    price: "300,000円〜",
    items: [
      "本格サイト + LP1本",
      "MEO初期整備・口コミ導線設計",
      "SNS/広告用コピー作成",
      "月次アクセス解析レポート"
    ]
  }
};

const DiagnosticTool = () => {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState([]);
  const total = DIAG_QUESTIONS.length;
  const done = step >= total;

  const select = (idx) => {
    const next = [...answers];
    next[step] = idx;
    setAnswers(next);
    setTimeout(() => setStep(step + 1), 200);
  };

  const reset = () => { setStep(0); setAnswers([]); };

  const resultPlan = React.useMemo(() => {
    if (!done) return null;
    const score = { mini: 0, std: 0, prem: 0 };
    answers.forEach((a, i) => {
      const opt = DIAG_QUESTIONS[i]?.options[a];
      if (!opt) return;
      score.mini += opt.score.mini;
      score.std += opt.score.std;
      score.prem += opt.score.prem;
    });
    const best = Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];
    return PLAN_INFO[best];
  }, [done, answers]);

  return (
    <section className="section diagnostic" id="diagnose">
      <Container>
        <div>
          <Eyebrow>FREE DIAGNOSIS</Eyebrow>
          <h2 className="section-title" style={{ color: "#fff" }}>
            <span style={{ color: "var(--gold)" }}>30秒</span>でわかる、<br/>
            あなたのお店に最適な<br/>
            <span style={{ background: "linear-gradient(180deg, transparent 62%, rgba(247,183,51,.5) 62%)", padding: "0 4px" }}>プランと概算費用</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,.78)", fontSize: 16, lineHeight: 1.9, fontWeight: 700, marginTop: 18 }}>
            業種・規模・目的を5つの質問でお聞きするだけ。匿名でもご利用いただけます。<br/>
            お見積もりはあくまで目安。正式な金額は無料相談でお出しします。
          </p>
          <div style={{ marginTop: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 800 }}>
              <span style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--gold)", color: "var(--ink)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                <Icon.check width="16" height="16" />
              </span>
              入力情報の保存なし
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 800 }}>
              <span style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--gold)", color: "var(--ink)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                <Icon.check width="16" height="16" />
              </span>
              連絡先入力は任意
            </div>
          </div>
        </div>

        <div className="diagnostic-card">
          <div className="diag-progress">
            {Array.from({ length: total }).map((_, i) => (
              <span key={i} className={i < step ? "done" : i === step ? "active" : ""}></span>
            ))}
          </div>
          {!done ? (
            <div className="diag-q">
              <span className="step-label">Question {step + 1} / {total}</span>
              <h3>{DIAG_QUESTIONS[step].q}</h3>
              <div className="diag-options">
                {DIAG_QUESTIONS[step].options.map((opt, i) => (
                  <button
                    key={i}
                    className={`diag-option${answers[step] === i ? " selected" : ""}`}
                    type="button"
                    onClick={() => select(i)}
                  >
                    <span className="bullet"></span>
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
              <div className="diag-actions">
                {step > 0 && (
                  <button type="button" className="ghost" onClick={() => setStep(step - 1)}>← 前に戻る</button>
                )}
              </div>
            </div>
          ) : (
            <div className="diag-result">
              <span className="badge">{resultPlan.badge}</span>
              <h3 className="plan-name">{resultPlan.name}</h3>
              <p className="price">{resultPlan.price}</p>
              <ul>
                {resultPlan.items.map((it, i) => <li key={i}>{it}</li>)}
              </ul>
              <div style={{ display: "flex", gap: 10, marginTop: 8, flexWrap: "wrap" }}>
                <Button variant="primary" href="#contact">このプランで相談する →</Button>
                <button type="button" className="ghost" onClick={reset}>もう一度診断する</button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

// ========================================================================
// QUOTE SIMULATOR — sliders + checkboxes → live price
// ========================================================================
const QuoteSimulator = () => {
  const [pages, setPages] = React.useState(3);
  const [opts, setOpts] = React.useState({
    booking: false,
    cms: false,
    meo: true,
    shoot: false,
    sns: false,
    maint: false,
  });

  const base = pages === 1 ? 30000 : pages <= 3 ? 100000 : pages <= 5 ? 180000 : 280000;
  const addOns = [
    { key: "booking", price: 30000 },
    { key: "cms", price: 50000 },
    { key: "meo", price: 40000 },
    { key: "shoot", price: 50000 },
    { key: "sns", price: 30000 },
    { key: "maint", price: 10000 },
  ];
  const total = base + addOns.reduce((s, a) => opts[a.key] ? s + a.price : s, 0);

  const toggle = (k) => setOpts(o => ({ ...o, [k]: !o[k] }));

  return (
    <section className="section" id="simulator">
      <Container>
        <SectionHead
          center
          eyebrow="QUOTE SIMULATOR"
          title={<>条件を選ぶだけで、<span className="accent">概算費用が即時表示</span></>}
          lead="ページ数とオプションを動かして、おおよその初期費用を確認できます。最終金額は無料相談で確定します。"
        />
        <div className="quote-card">
          <div className="quote-controls">
            <div className="quote-row">
              <div className="label">
                <span>ページ数</span>
                <span className="val">{pages === 1 ? "1ページLP" : pages <= 5 ? `${pages}ページ` : "本格サイト（6+）"}</span>
              </div>
              <input
                type="range"
                min="1"
                max="6"
                step="1"
                value={pages}
                onChange={(e) => setPages(parseInt(e.target.value))}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--muted)", fontWeight: 800 }}>
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6+</span>
              </div>
            </div>
            <div className="quote-row">
              <div className="label">
                <span>追加オプション</span>
              </div>
              <div className="quote-checks">
                <label>
                  <input type="checkbox" checked={opts.booking} onChange={() => toggle("booking")} />
                  予約システム連携（+30,000円）
                </label>
                <label>
                  <input type="checkbox" checked={opts.cms} onChange={() => toggle("cms")} />
                  CMS / WordPress対応（+50,000円）
                </label>
                <label>
                  <input type="checkbox" checked={opts.meo} onChange={() => toggle("meo")} />
                  MEO初期整備（+40,000円）
                </label>
                <label>
                  <input type="checkbox" checked={opts.shoot} onChange={() => toggle("shoot")} />
                  出張撮影（+50,000円〜）
                </label>
                <label>
                  <input type="checkbox" checked={opts.sns} onChange={() => toggle("sns")} />
                  SNS/広告用コピー作成（+30,000円）
                </label>
                <label>
                  <input type="checkbox" checked={opts.maint} onChange={() => toggle("maint")} />
                  公開後の月額保守（+10,000円/月）
                </label>
              </div>
            </div>
          </div>
          <div className="quote-output">
            <span className="label">初期費用 概算</span>
            <p className="price">{total.toLocaleString()}<small>円〜</small></p>
            <p className="desc">含まれるもの: 構成設計、コピー作成、スマホ写真の補正、SP対応、問い合わせフォーム、Googleマップ埋め込み。<br/>※最終金額は無料相談で確定します。</p>
            <div className="cta">
              <Button variant="primary" full href="#contact">この内容で無料相談する →</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

window.Reasons = Reasons;
window.BeforeAfter = BeforeAfter;
window.DiagnosticTool = DiagnosticTool;
window.QuoteSimulator = QuoteSimulator;

