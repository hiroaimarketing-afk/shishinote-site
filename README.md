# シシノテ サービスサイト

小〜中規模店舗向けWebサイト/LP制作サービス「シシノテ」の公開用静的サイトです。

## 公開対象

- `index.html`
- `styles.css`
- `script.js`
- `assets/`

Cloudflare Pagesではビルドコマンドなしで公開できます。

## 問い合わせフォーム

問い合わせフォームは Cloudflare Pages Functions の `/api/contact` にPOSTし、Resend REST API経由でメール送信します。

Cloudflare Pagesの環境変数に以下を設定してください。

- `RESEND_API_KEY`: ResendのAPIキー
- `CONTACT_TO_EMAIL`: 受信先メールアドレス。未設定時は `hello@shishinote.jp`
- `CONTACT_FROM_EMAIL`: 送信元メールアドレス。例 `シシノテ <noreply@shishinote.jp>`

`CONTACT_FROM_EMAIL` はResend側で認証済みのドメイン/メールアドレスを使ってください。
