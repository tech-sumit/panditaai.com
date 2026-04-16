interface Env {
  DB: D1Database;
  MAIL_API_KEY?: string;
  NOTIFICATION_EMAIL?: string;
}

const ALLOWED_ORIGINS = [
  "https://panditaai.com",
  "https://www.panditaai.com",
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:3333",
];

function corsHeaders(origin: string | null): HeadersInit {
  const allowed = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

function json(data: unknown, status: number, origin: string | null): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
  });
}

// Stub: replace with Mailgun/Resend call when ready
async function sendNotification(env: Env, subject: string, body: string): Promise<void> {
  if (!env.MAIL_API_KEY || !env.NOTIFICATION_EMAIL) return;
  // Example Resend integration:
  // await fetch("https://api.resend.com/emails", {
  //   method: "POST",
  //   headers: { Authorization: `Bearer ${env.MAIL_API_KEY}`, "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     from: "notifications@panditaai.com",
  //     to: env.NOTIFICATION_EMAIL,
  //     subject,
  //     text: body,
  //   }),
  // });
  console.log(`[notification] ${subject}`);
}

function requireFields(data: Record<string, unknown>, fields: string[]): string | null {
  for (const f of fields) {
    if (!data[f] || (typeof data[f] === "string" && (data[f] as string).trim() === "")) {
      return f;
    }
  }
  return null;
}

async function handleInterest(request: Request, env: Env, origin: string | null): Promise<Response> {
  const body = await request.json<Record<string, unknown>>();
  const missing = requireFields(body, ["legalName", "organization", "email"]);
  if (missing) {
    return json({ success: false, error: `Missing required field: ${missing}` }, 400, origin);
  }

  await env.DB.prepare(
    `INSERT INTO interest_submissions (legal_name, organization, email, hardware_stack, sim, nda)
     VALUES (?, ?, ?, ?, ?, ?)`
  )
    .bind(
      body.legalName,
      body.organization,
      body.email,
      body.hardwareStack ?? null,
      body.sim ?? null,
      body.nda ?? null
    )
    .run();

  await sendNotification(
    env,
    "New Interest Submission",
    `Name: ${body.legalName}\nOrg: ${body.organization}\nEmail: ${body.email}`
  );

  return json({ success: true }, 200, origin);
}

async function handleInvestorConnect(request: Request, env: Env, origin: string | null): Promise<Response> {
  const body = await request.json<Record<string, unknown>>();
  const missing = requireFields(body, ["investorName", "firmFund"]);
  if (missing) {
    return json({ success: false, error: `Missing required field: ${missing}` }, 400, origin);
  }

  await env.DB.prepare(
    `INSERT INTO investor_submissions (investor_name, firm_fund, message_conviction)
     VALUES (?, ?, ?)`
  )
    .bind(body.investorName, body.firmFund, body.messageConviction ?? null)
    .run();

  await sendNotification(
    env,
    "New Investor Connect",
    `Investor: ${body.investorName}\nFirm/Fund: ${body.firmFund}`
  );

  return json({ success: true }, 200, origin);
}

async function handleContact(request: Request, env: Env, origin: string | null): Promise<Response> {
  const body = await request.json<Record<string, unknown>>();
  const missing = requireFields(body, ["identityName", "encryptedEmail"]);
  if (missing) {
    return json({ success: false, error: `Missing required field: ${missing}` }, 400, origin);
  }

  await env.DB.prepare(
    `INSERT INTO contact_submissions (identity_name, encrypted_email, transmission_packet)
     VALUES (?, ?, ?)`
  )
    .bind(body.identityName, body.encryptedEmail, body.transmissionPacket ?? null)
    .run();

  await sendNotification(
    env,
    "New Contact Submission",
    `Name: ${body.identityName}\nEmail: ${body.encryptedEmail}`
  );

  return json({ success: true }, 200, origin);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin");

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (request.method !== "POST") {
      return json({ success: false, error: "Method not allowed" }, 405, origin);
    }

    try {
      switch (url.pathname) {
        case "/api/interest":
          return await handleInterest(request, env, origin);
        case "/api/investor-connect":
          return await handleInvestorConnect(request, env, origin);
        case "/api/contact":
          return await handleContact(request, env, origin);
        default:
          return json({ success: false, error: "Not found" }, 404, origin);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Internal server error";
      console.error(`[error] ${url.pathname}:`, err);
      return json({ success: false, error: message }, 500, origin);
    }
  },
} satisfies ExportedHandler<Env>;
