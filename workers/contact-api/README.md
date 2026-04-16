# panditaai-contact Worker

Cloudflare Worker handling contact form submissions for panditaai.com. Stores submissions in D1 and optionally sends email notifications.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/interest` | Interest form (legalName, organization, email, hardwareStack, sim, nda) |
| POST | `/api/investor-connect` | Investor form (investorName, firmFund, messageConviction) |
| POST | `/api/contact` | About page form (identityName, encryptedEmail, transmissionPacket) |

All endpoints return `{ "success": true }` on success or `{ "success": false, "error": "..." }` on failure.

## Setup

```bash
cd projects/panditaai.com/workers/contact-api
npm install
```

### Create the D1 database

```bash
npm run db:create
```

Copy the returned `database_id` into `wrangler.toml`.

### Run migrations

```bash
# Remote (production)
npm run db:migrate

# Local dev
npm run db:migrate:local
```

## Development

```bash
npm run dev
```

The worker runs at `http://localhost:8787`.

## Deploy

```bash
npm run deploy
```

## Email Notifications (optional)

Set these secrets to enable email notifications via Resend/Mailgun:

```bash
wrangler secret put MAIL_API_KEY
wrangler secret put NOTIFICATION_EMAIL
```

Then uncomment the fetch call in `sendNotification()` in `src/index.ts`.

## Next.js Integration

Set the worker URL in your Next.js app:

```
NEXT_PUBLIC_CONTACT_API_URL=https://panditaai-contact.<your-subdomain>.workers.dev
```

Example fetch from the frontend:

```ts
await fetch(`${process.env.NEXT_PUBLIC_CONTACT_API_URL}/api/interest`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ legalName, organization, email, hardwareStack, sim, nda }),
});
```
