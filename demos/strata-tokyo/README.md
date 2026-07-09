# Handoff: STRATA TOKYO — Premium Personal Gym Landing Page

## Overview

STRATA TOKYO（ストラタ・トーキョー）は、東京都内（恵比寿・表参道・銀座）の架空の高級パーソナルジムです。本LPは、30〜45歳のエグゼクティブ層（経営者・医師・士業など）をターゲットに、「最短2ヶ月で結果を出す」「完全個室」「管理栄養士監修」「30日返金保証」を主訴求にした、コンバージョン目的のランディングページです。

メインのコンバージョンゴールは **無料カウンセリング予約フォームの送信** で、ヘッダー固定CTA・ヒーローCTA・各プログラムカードCTA・モバイル下部スティッキーCTA・最終予約フォームの計5つの導線で誘導しています。

## About the Design Files

このバンドルに含まれる `index.html` / `styles.css` / `tweaks.jsx` などのファイルは、**HTMLで作成した「デザインリファレンス」** です。最終的な見た目とインタラクションを示すプロトタイプであり、本番コードとしてそのままコピーすることを想定したものではありません。

開発側のタスクは、**これらのHTMLデザインを、対象コードベースの既存環境**（Next.js / Nuxt / Astro / WordPress / SwiftUI / Flutter など）の規約・コンポーネントライブラリに沿って再実装することです。既存環境がない新規プロジェクトの場合は、要件に最も適したフレームワーク（推奨：Next.js + Tailwind CSS、もしくは Astro）を選定し、そこに実装してください。

特に以下の点はフレームワーク側のベストプラクティスに置き換えてください：

- フォーム送信処理（現状は `alert` のダミー）
- 画像最適化（`next/image` 等のリソース最適化）
- メタタグ / OGP / 構造化データの拡充
- フォントロード戦略
- アクセシビリティ（フォーカスリング、aria属性、ランドマーク）

## Fidelity

**High-fidelity (hifi)** — ピクセルパーフェクトに近いモックアップです。色、タイポグラフィ、スペーシング、インタラクション（ホバー・スクロール出現・FAQアコーディオン）すべて最終想定値で作成しています。開発側は、コードベースの既存コンポーネントを使いつつ、見た目はこのデザインを忠実に再現してください。

レスポンシブブレイクポイントは下記2点を満たすこと：
- `980px` 以下でグリッドが2カラム/1カラムに崩れる
- `720px` 以下でナビゲーションがモバイル仕様（下部スティッキーCTA出現）になる

## Screens / Views

本LPは1ページのスクロール型ランディングページです。以下12セクションで構成されています。

### 1. Header (固定ヘッダー)

- **位置**: `position: fixed; top: 0;`、z-index 100
- **背景**: `rgba(10, 9, 8, 0.65)` + `backdrop-filter: blur(20px)`
- **下罫線**: `1px solid rgba(245, 241, 232, 0.08)`
- **高さ**: 約64px (padding 20px var(--gutter))
- **構成**: ロゴ（左） / ナビゲーション（中央） / ヘッダーCTAボタン（右）
- **ロゴ**: `STRATA.TOKYO` — Cormorant Garamond 22px / weight 500 / letter-spacing 0.3em。ドット `.` のみ `#C9A961` ゴールド
- **ナビ**: 5項目（選ばれる理由 / プログラム / トレーナー / 店舗 / FAQ）13px / letter-spacing 0.15em / color `#a8a098`、hover時 `#c9a961`
- **CTAボタン**: アウトライン `1px solid #c9a961`、12px / letter-spacing 0.2em、padding 12px 24px、hover時 ゴールド塗りに反転
- **880px以下**: ナビは非表示、ロゴとCTAのみ

### 2. Hero (ファーストビュー)

- **高さ**: `min-height: 100vh`
- **背景画像**: `assets/hero-main.jpg`（AI生成、ジム内でバーベルスクワットをする男性、暗めの照明）
- **オーバーレイ**:
  ```
  linear-gradient(90deg, rgba(10,9,8,0.92) 0%, rgba(10,9,8,0.55) 55%, rgba(10,9,8,0.3) 100%),
  linear-gradient(180deg, rgba(10,9,8,0.4) 0%, transparent 30%, rgba(10,9,8,0.6) 100%)
  ```
- **コンテンツ最大幅**: 720px、左寄せ
- **構成**:
  - **アイブロウ**: `FOR THOSE WHO LEAD` — JetBrains Mono 11px / letter-spacing 0.3em / color `#c9a961`。左に32×1pxのゴールドの横線
  - **メインタイトル**: 「最短**2ヶ月**。一生モノの**身体**へ。」
    - Cormorant Garamond / 400 weight
    - サイズ `clamp(40px, 6.5vw, 84px)` / line-height 1.15
    - 強調語（2ヶ月、身体）は `color: #c9a961; font-style: italic;`
    - サブ英文: `Sculpted in silence. Built for life.` を 0.55em でブロック表示
  - **サブコピー**: 15px / line-height 2 / color `#a8a098` / max-width 520px
  - **CTAボタン2つ**:
    - Primary: `background: #c9a961; color: #0a0908;` padding 18px 36px、文字「無料カウンセリング予約 →」
    - Ghost: 透明背景 + `1px solid rgba(201,169,97,0.3)` border、文字「プログラムを見る」
    - hover時、Primary は `transform: translateY(-2px)` + box-shadow ゴールドグロー、`.arrow` が `translateX(4px)`

- **下部スタッツ**: `position: absolute; bottom: 40px;`、4列フラットレイアウト、罫線で上を区切る
  - `98%` Goal Achievement / `−8.4kg` Avg. 2-month Result / `4.9/5` Member Rating / `30日` Refund Guarantee
  - 数字：Cormorant Garamond 32px / color `#c9a961`、単位は18px / `#a8a098`
  - ラベル：11px / letter-spacing 0.2em / uppercase / `#a8a098`

### 3. Promise (3つの約束)

- **背景**: `#14110f` (--bg-2)、上下に `1px solid` のhairline罫線
- **タイトル**: 「あなたへの**3つの約束**」（STRATA TOKYOがすべてのメンバー様にお約束する、品質基準）
- **3列グリッド**: 各セルは縦罫線で区切られる
- **各カード**:
  - 上部：64×64pxの円形アウトラインアイコン（中にSVGアイコン）
  - ナンバー `01 / 02 / 03` (JetBrains Mono 11px / letter-spacing 0.3em / `#c9a961`)
  - タイトル: Cormorant Garamond 22px / 500
  - 説明: 13px / line-height 1.9 / `#a8a098`
- **内容**:
  1. **完全個室・完全予約制** — 他の利用者と顔を合わせることはありません
  2. **管理栄養士が監修** — 続けられる食事プログラム
  3. **30日間返金保証** — 開始30日以内全額返金

### 4. Reason (選ばれる6つの理由)

- **タイトル**: 「選ばれ続ける、**6つの理由**」
- **3×2 グリッド**、gap 32px
- **各カード**: padding 48px 36px、`background: #14110f`、`1px solid rgba(245,241,232,0.08)`
- **ホバー**:
  - 上部に2px幅のゴールド線がleft→right方向で広がる
  - `background: #1c1815`、`transform: translateY(-4px)`
- **各カード構成**:
  - 大きなナンバー: Cormorant Garamond 48px / italic / `#c9a961`
  - タイトル: 22px / 500 / 2行想定
  - 説明: 13px / `#a8a098`
- **内容**: 医師監修 / 完全オーダーメイド / 採用率3.2%のトレーナー / 24時間チャット / 主要駅徒歩3分 / 1年間アフターサポート

### 5. Result (実績数値 + Before/After)

- **背景**: `#14110f`
- **タイトル**: 「数字が語る、**確かな成果**」
- **KPI 4列**:
  - 数字: Cormorant Garamond 56px / color `#c9a961`、単位は18px
  - `3,247名` / `−8.4kg` / `98%` / `92%`
- **Before/Afterカード 3枚**:
  - 各カードは Before/After 画像並列表示、中央に1pxゴールド縦線
  - 画像エリアは現在ストライプパターンのプレースホルダー（実装時は実写差し替え推奨）
  - 左上に `BEFORE` / `AFTER` ラベル（モノスペース10px / ゴールド）
  - 下部：氏名イニシャル + 年齢 + 属性 + 結果数値（−11.2kg / −8.6% など）

### 6. Program (3コース)

- **タイトル**: 「3つの**プログラム**」
- **3列**、中央のカードに `.featured` クラスでハイライト
- **Featured カード**:
  - `border: 1px solid #c9a961`
  - 上端に `MOST POPULAR` バッジ（ゴールド塗り、白抜き文字、モノスペース10px）
  - グラデーション背景: `linear-gradient(180deg, #1c1815 0%, #14110f 100%)`
- **各カード**:
  - タグ: `ESSENTIAL / RECOMMENDED / PREMIUM`
  - 名前: Cormorant Garamond 28px
  - 期間: 12px / `#a8a098`
  - 価格: `¥` の後に Cormorant Garamond 42px の数字
  - 価格注釈: 月々分割
  - チェック付き機能リスト 5〜6項目 (`✓` を `#c9a961` で)
  - CTAボタン
- **コース内容**:
  - Quick (2ヶ月 / 全16回) ¥298,000
  - Standard (3ヶ月 / 全24回) ¥432,000 ★featured
  - Executive (6ヶ月 / 全48回) ¥798,000

### 7. Trainer (トレーナー紹介)

- **背景**: `#14110f`
- **タイトル**: 「採用率**3.2%**の厳選トレーナー陣」
- **3列カードグリッド**:
  - 画像: aspect-ratio 3:4、`object-fit: cover`
  - ホバー時、画像が `scale(1.04)`、カード全体が `translateY(-6px)`
  - メタ部分 padding 28px:
    - 役職タグ (JetBrains Mono 10px / 0.3em / uppercase / `#c9a961`)
    - 日本語氏名 (Cormorant Garamond 24px)
    - 英字名 (JetBrains Mono 11px / `#6b655e`)
    - 経歴文 (12px / line-height 1.9 / `#a8a098`)
    - スキルタグ (10px / outline border)
- **画像**: `assets/trainer-1.jpg`, `trainer-2.jpg`, `trainer-3.jpg`（AI生成ポートレート）

### 8. Voice (お客様の声)

- **背景**: `#14110f`
- **タイトル**: 「メンバーの**声**」
- **2列グリッド × 4枚**
- **各カード**:
  - padding 40px、背景 `#0a0908`、`1px solid` 罫線
  - 左上に巨大な装飾クォート `"` (Cormorant Garamond 80px / opacity 0.3 / ゴールド)
  - 本文: Cormorant Garamond 17px / line-height 1.8（証言は和文）
  - 区切り罫線の下にアバター（48px円形・ゴールドグラデ・イニシャル白抜き） + 氏名 + 属性

### 9. Studio (店舗・空間)

- **タイトル**: 「非日常としての**空間設計**」
- **2カラムフィーチャー**:
  - 左: `assets/studio-interior.jpg`（AI生成、無人のジム内観、aspect 4:3）
  - 右: ラベル → 大見出し → 2段落の説明文
- **店舗カード 3列**:
  - padding 32px、ホバー時 border をゴールドに、bg を `#1c1815` に
  - 「01 / FLAGSHIP」「02 / OMOTESANDO」「03 / GINZA」のナンバリング
  - 店舗名 (Cormorant Garamond 24px) + 住所 + アクセス・営業時間

### 10. Flow (1セッションの流れ)

- **背景**: `#14110f`
- **タイトル**: 「1セッション**60分**の流れ」
- **4列ステップ表示**:
  - 各ステップに 64×64px の円（ゴールド枠 / Cormorant italic でローマ数字 i / ii / iii / iv）
  - 円の中央高さで横方向にグラデーション罫線（透明→ゴールド→透明）
  - 時間ラベル (JetBrains Mono 11px)、ステップ名、説明文
- **内容**:
  1. 0–10min コンディションヒアリング
  2. 10–25min ウォームアップ＆可動域
  3. 25–55min メイントレーニング
  4. 55–60min ストレッチ＆振り返り

### 11. FAQ

- **タイトル**: 「よくある**ご質問**」
- **max-width**: 820px、中央寄せ
- **アコーディオン式**:
  - 各項目下部 `1px solid` 罫線
  - 質問ボタン: padding 28px 0、左に `Q.` (Cormorant italic ゴールド)、右に 32×32 円のトグル
  - トグルは閉じ状態で `＋` 形、開状態で `−` 形（rotateで実現）。開時は塗りゴールド
  - 回答パネル: `max-height: 0 → 400px` のtransition (0.4s ease)、padding-bottom 28px
- 6問掲載

### 12. Final CTA (無料カウンセリング予約)

- **背景**: `#0a0908`、中央に radial-gradient のゴールドグロー
- **2カラム** (1.1fr : 1fr):
  - **左**: 大見出し「まずは**無料**カウンセリング。一度、本気で話しませんか。」+ 説明文 + 5項目の特典リスト（`→` ゴールド先頭）
  - **右**: フォームカード
    - `1px solid #c9a961` border
    - padding 48px、`background: #14110f`
    - お名前 / 電話 / メール / 希望店舗(select) / 興味コース(select) / 備考(textarea)
    - 送信ボタン: ゴールド塗り全幅、hover時に白に反転 + glow

### 13. Footer

- 4カラム (1.5fr : 1fr × 3)
- ブランド / Programs / Studios / Company
- 罫線下に著作権表示と「EBISU / OMOTESANDO / GINZA」

### モバイル下部固定CTA

- `720px` 以下で表示
- 全幅ゴールド塗りのCTAボタン
- ページ底部の余白 70px を確保

## Interactions & Behavior

### スクロールリビール
- `.reveal` クラスを持つ要素は初期状態で `opacity: 0; transform: translateY(24px);`
- `IntersectionObserver` で viewport に 10% 入った時点で `.in` クラス付与、`opacity: 1; transform: translateY(0)` に
- transition: `opacity 0.8s ease, transform 0.8s ease`
- threshold 0.1、rootMargin `0px 0px -60px 0px`、一度発火したらunobserve

### FAQ アコーディオン
- `.faq-q` クリックで親 `.faq-item` に `.open` クラスをトグル
- 1つだけ開ける制限は**なし**（複数同時に開ける現状仕様。要件次第で排他制御可）

### ヘッダーCTA / プログラムCTA / スティッキーCTA
- すべて `#cta`（最終フォームセクション）への smooth-scroll アンカー
- `html { scroll-behavior: smooth; }` で実装

### フォーム送信
- 現状 `event.preventDefault()` + `alert()` のダミー
- 本実装ではバックエンド or フォームサービス（Formspree、SendGrid、独自API等）への送信処理に差し替え
- バリデーション: name / phone / email / 店舗 / コース は `required`

### ホバー状態
- 主要CTA: `translateY(-2px)` + ゴールドグローshadow
- カード類: 軽く浮く / 上端線が広がる / 画像がスケール
- 矢印アイコン: `.arrow { transition: transform 0.3s }` で hover 時 `translateX(4px)`

## State Management

LPなのでアプリ的なstate管理は不要です。実装時に必要なのは：

- **FAQの開閉状態**（DOM クラスでもOK / フレームワークの useState でも可）
- **フォームのフィールド値とバリデーション**（react-hook-form / zod 等推奨）
- **送信中・成功・エラー状態**（loading / success / error の3状態）
- **スクロール検出**（IntersectionObserver で十分）

## Design Tokens

### Colors (黒×ゴールド テーマ)

| Token | Hex | 用途 |
|---|---|---|
| `--bg` | `#0a0908` | ベース背景（深い黒） |
| `--bg-2` | `#14110f` | セクション交互背景 |
| `--bg-3` | `#1c1815` | カードホバー背景 |
| `--fg` | `#f5f1e8` | 主文字色（オフホワイト） |
| `--fg-muted` | `#a8a098` | 補助文字 |
| `--fg-dim` | `#6b655e` | さらに薄い文字 |
| `--accent` | `#c9a961` | ゴールド（メインアクセント） |
| `--accent-2` | `#8b7355` | ブロンズ |
| `--accent-glow` | `rgba(201, 169, 97, 0.15)` | ゴールドグロー |
| `--line` | `rgba(245, 241, 232, 0.08)` | hairline罫線 |
| `--line-strong` | `rgba(201, 169, 97, 0.3)` | アクセント罫線 |

### Typography

| Family | 用途 |
|---|---|
| `Cormorant Garamond` (serif, 300/400/500/italic-400) | 見出し全般・アクセント数字 |
| `Noto Serif JP` | 和文見出し補完 |
| `Inter` (300/400/500) | 本文 |
| `Noto Sans JP` (300/400/500) | 和文本文 |
| `JetBrains Mono` (300/400) | アイブロウ・タグ・ナンバリング |

### Spacing

| 用途 | 値 |
|---|---|
| `--gutter` | `clamp(20px, 5vw, 64px)` |
| `--container` (max-width) | 1280px |
| セクション縦padding | `clamp(80px, 12vw, 160px) 0` |
| カード padding | 32〜48px |
| セクション head 下マージン | 80px |

### Type Scale

| 用途 | サイズ |
|---|---|
| Hero title | `clamp(40px, 6.5vw, 84px)` |
| Section title | `clamp(32px, 5vw, 56px)` |
| Card title | 22〜28px |
| Body | 13〜15px |
| Eyebrow / tag | 10〜11px |

### Letter-spacing スケール

| 用途 | 値 |
|---|---|
| 見出し本文 | `0.02em` |
| アイブロウ (英) | `0.3em` |
| ナビ・ボタン | `0.15〜0.2em` |
| ロゴ | `0.3em` |

### Borders / Radius

- 基本：直角（`border-radius: 0`）。**角丸は使わない**のがブランドルール
- 例外：円形要素（アバター、アイコン枠、フロー数字の円、トグルボタン）のみ `50%`
- 罫線：`1px solid var(--line)` か `var(--line-strong)`

### Shadows

- 強いshadowは使わず、ゴールドグローのみ：`box-shadow: 0 12px 32px var(--accent-glow)`（ボタンhover時）

### Transitions

- 基本: `0.3s cubic-bezier(0.4, 0, 0.2, 1)` または `0.3s ease`
- リビール: `0.8s ease`
- カラー変化: `0.2s`

### Theme variants (Tweaks で切替可能)

- **Gold** (デフォルト): 上記の通り
- **Red**: `--accent: #c0392b; --accent-2: #8b1e1e;`（黒地のまま）
- **White**: 反転テーマ。`--bg: #f5f1e8; --fg: #14110f; --accent: #1a1815;`

## Assets

すべて `assets/` ディレクトリ内、AI画像生成 (nano-banana-2) で作成済み。本番では実際のジム写真への差し替えを推奨。

| ファイル | 用途 | サイズ |
|---|---|---|
| `hero-main.jpg` | Hero背景。バーベルスクワット中の男性、暗色ジム内 | 1376×768 |
| `studio-interior.jpg` | Studioセクション内観 | 1376×768 |
| `trainer-1.jpg` | トレーナー田中（男性・30代前半） | 896×1200 |
| `trainer-2.jpg` | トレーナー佐藤（女性・20代後半） | 896×1200 |
| `trainer-3.jpg` | トレーナー山本（男性・30代後半） | 896×1200 |
| `nutrition.jpg` | 食事画像（現在未使用、追加コンテンツ用に保管） | 1376×768 |

Before/After 6枚は現在ストライプパターンプレースホルダー。本実装時は実顧客の許諾を得た写真への差し替えが必要。

外部依存：
- Google Fonts: Cormorant Garamond / Inter / JetBrains Mono / Noto Sans JP / Noto Serif JP
- React 18 + ReactDOM 18 + Babel Standalone 7（Tweaksパネル動作用、本実装では不要）

## Files

このバンドルに含まれるリファレンスファイル：

- `index.html` — メインのHTMLマークアップ（全12セクション）
- `styles.css` — 全スタイル定義（CSS変数 / セクション別スタイル / レスポンシブ）
- `tweaks.jsx` — デザイン検討用のTweaksパネル（**本実装では不要**。テーマ切替・コピー差し替えのデモ用）
- `tweaks_panel.jsx` — Tweaksパネルのフレームワーク（**本実装では不要**）

本実装時は `index.html` のセクション構造と `styles.css` の値を参照しつつ、対象フレームワークのコンポーネント設計に落とし込んでください。Tweaks 関連ファイルは破棄してOKです。

## Implementation Notes

### 推奨構成（Next.js + Tailwind の場合）

```
app/
  page.tsx
  layout.tsx
components/
  sections/
    Header.tsx
    Hero.tsx
    Promise.tsx
    Reason.tsx
    Result.tsx
    Program.tsx
    Trainer.tsx
    Voice.tsx
    Studio.tsx
    Flow.tsx
    Faq.tsx
    CtaFinal.tsx
    Footer.tsx
  ui/
    Button.tsx
    Card.tsx
    SectionHead.tsx
  forms/
    ReservationForm.tsx
public/
  assets/
    *.jpg
```

### Tailwind に変換する場合のキー値

`tailwind.config.ts` で以下のカスタム値を定義：

```ts
theme: {
  extend: {
    colors: {
      bg: { DEFAULT: '#0a0908', 2: '#14110f', 3: '#1c1815' },
      fg: { DEFAULT: '#f5f1e8', muted: '#a8a098', dim: '#6b655e' },
      accent: { DEFAULT: '#c9a961', 2: '#8b7355' },
    },
    fontFamily: {
      serif: ['"Cormorant Garamond"', '"Noto Serif JP"', 'serif'],
      sans: ['Inter', '"Noto Sans JP"', 'sans-serif'],
      mono: ['"JetBrains Mono"', 'monospace'],
    },
    letterSpacing: {
      eyebrow: '0.3em',
      nav: '0.15em',
      button: '0.2em',
    },
    maxWidth: { container: '1280px' },
  }
}
```

### アクセシビリティ TODO

- すべての画像に意味のある `alt` を付与（装飾はempty alt）
- FAQ アコーディオン: `<button aria-expanded>` で実装、開閉時に動的更新
- フォームの `<label>` と `<input>` を `for` / `id` で必ず関連付け
- ヘッダー固定時のスキップリンクを検討
- ダークテーマでもコントラスト比 WCAG AA以上を維持済み（fg #f5f1e8 / bg #0a0908 で約16:1）

### SEO / メタタグ TODO

- OGP 画像（1200×630）の追加
- `<meta name="description">` は記載済み、必要に応じ調整
- 構造化データ: `LocalBusiness` (3店舗) + `Service`（プログラム）の JSON-LD 推奨
- `<link rel="canonical">` 追加
- サイトマップ / robots.txt

### パフォーマンス TODO

- AI生成画像はPNGで保存されているため、本実装では WebP / AVIF への変換 + サイズ最適化を推奨
- Hero画像は `<link rel="preload">` 推奨
- Google Fonts は `font-display: swap` か self-host を検討

---

ご不明点があれば随時お問い合わせください。
