# Anchorforge Digital

Marketing site for Anchorforge Digital — affordable small business websites.
Built with Next.js (App Router, TypeScript) and deployed on Vercel.

## Stack

- Next.js 15 + React 19, TypeScript
- Self-hosted fonts via `next/font` (Playfair Display, Space Grotesk, JetBrains Mono)
- Nodemailer contact form (Gmail SMTP), see `.env.example`
- Plain CSS Modules + a global design-token stylesheet

## Develop

```sh
bun install
bun run dev
```

## Build

```sh
bun run build
bun run start
```

## Environment variables

Copy `.env.example` and fill in the Gmail App Password (`GMAIL_APP_PASSWORD`).
`GMAIL_USER`, `CONTACT_TO`, and `MAIL_FROM` have sensible defaults.
