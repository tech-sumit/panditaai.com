"use client";

import { FormEvent, useState } from "react";

/**
 * General "Record Interest" form for non-investor audiences: skill experts,
 * robot OEMs, developers, and pilot customers. Submits to the same HubSpot
 * form as the investor flow but only populates standard contact properties
 * (firstname/lastname/email/company) plus a structured message field with
 * persona, referral source, and free-form notes.
 *
 * Leads captured here can be told apart from investor leads in HubSpot by
 * the absence of `investor_type` / `ticket_size` — those are never set by
 * this form — and by the `pageName` in the submission context.
 */

const HUBSPOT_PORTAL_ID =
  process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || "245933164";
const HUBSPOT_FORM_ID =
  process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID ||
  "8f60c6a9-48fc-473e-a8d1-3f4e428fc144";

type Status = "idle" | "sending" | "sent" | "error" | "unconfigured";

type HubSpotField = { objectTypeId: "0-1"; name: string; value: string };

const PERSONA_LABELS: Record<string, string> = {
  expert: "Skill Expert",
  oem: "Robot OEM / Integrator",
  developer: "Developer / Researcher",
  pilot: "Pilot Customer",
  press: "Press / Media",
  other: "Other",
};

function splitName(full: string): { first: string; last: string } {
  const trimmed = full.trim();
  if (!trimmed) return { first: "", last: "" };
  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) return { first: parts[0], last: "" };
  return { first: parts[0], last: parts.slice(1).join(" ") };
}

function buildMessage(data: Record<string, string>): string {
  const persona = String(data.persona || "").trim();
  const referral = String(data.referral || "").trim();
  const notes = String(data.notes || "").trim();
  const newsletter = data.newsletter === "on";

  const header: string[] = [];
  if (persona) header.push(`[Persona] ${PERSONA_LABELS[persona] ?? persona}`);
  if (referral) header.push(`[Heard via] ${referral}`);
  if (newsletter) header.push(`[Newsletter] opted in`);

  return [header.join("\n"), notes].filter(Boolean).join("\n\n");
}

export default function GeneralInterestForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorDetail, setErrorDetail] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorDetail("");

    if (!HUBSPOT_PORTAL_ID || !HUBSPOT_FORM_ID) {
      setStatus("unconfigured");
      return;
    }

    setStatus("sending");

    const data = Object.fromEntries(
      new FormData(e.currentTarget) as unknown as Iterable<[string, string]>,
    );

    const { first, last } = splitName(String(data.fullName || ""));

    const field = (name: string, value: string): HubSpotField => ({
      objectTypeId: "0-1",
      name,
      value,
    });

    const fields: HubSpotField[] = [
      field("email", String(data.email || "")),
      field("firstname", first),
      field("lastname", last),
      field("company", String(data.company || "")),
      field("message", buildMessage(data)),
    ].filter((f) => f.value !== "");

    const payload = {
      fields,
      context: {
        pageUri: typeof window !== "undefined" ? window.location.href : "",
        pageName: "PanditaAI · Record Interest (/interest)",
      },
    };

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      if (!res.ok) {
        const body = await res.text().catch(() => "");
        let reason = body.slice(0, 200);
        try {
          const parsed = JSON.parse(body);
          reason =
            parsed?.errors?.[0]?.message || parsed?.message || reason;
        } catch {
          // not JSON, fall back to raw body
        }
        throw new Error(`HubSpot ${res.status}: ${reason}`);
      }
      setStatus("sent");
    } catch (err) {
      setErrorDetail(err instanceof Error ? err.message : "Unknown error");
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-10 bg-surface-container-low p-12 border-l border-outline-variant/15"
    >
      {/* Identity */}
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group">
            <label
              htmlFor="gif-full-name"
              className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors"
            >
              Full Name
            </label>
            <input
              id="gif-full-name"
              name="fullName"
              type="text"
              required
              placeholder="JANE SMITH"
              className="w-full bg-surface-container-highest border-none focus:ring-0 border-b-2 border-transparent focus:border-primary px-4 py-3 font-body text-white placeholder-white/20"
            />
          </div>
          <div className="group">
            <label
              htmlFor="gif-email"
              className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors"
            >
              Email
            </label>
            <input
              id="gif-email"
              name="email"
              type="email"
              required
              placeholder="YOU@DOMAIN.COM"
              className="w-full bg-surface-container-highest border-none focus:ring-0 border-b-2 border-transparent focus:border-primary px-4 py-3 font-body text-white placeholder-white/20"
            />
          </div>
        </div>
        <div className="group">
          <label
            htmlFor="gif-company"
            className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors"
          >
            Company / Organization (optional)
          </label>
          <input
            id="gif-company"
            name="company"
            type="text"
            placeholder="DOJO, LAB, STARTUP, OEM, INDEPENDENT..."
            className="w-full bg-surface-container-highest border-none focus:ring-0 border-b-2 border-transparent focus:border-primary px-4 py-3 font-body text-white placeholder-white/20"
          />
        </div>
      </div>

      {/* Persona */}
      <div className="pt-6 border-t border-outline-variant/20 space-y-6">
        <label className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant">
          I&apos;m interested as a…
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { value: "expert", label: "Skill Expert" },
            { value: "oem", label: "Robot OEM" },
            { value: "developer", label: "Developer" },
            { value: "pilot", label: "Pilot Customer" },
            { value: "press", label: "Press / Media" },
            { value: "other", label: "Other" },
          ].map((opt) => (
            <label className="cursor-pointer" key={opt.value}>
              <input
                className="hidden peer"
                name="persona"
                type="radio"
                value={opt.value}
                required
              />
              <div className="py-3 text-center border border-outline-variant/30 font-headline text-[10px] uppercase tracking-widest peer-checked:bg-primary peer-checked:text-on-primary-fixed peer-checked:border-primary hover:border-primary transition-all">
                {opt.label}
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Use case */}
      <div className="pt-6 border-t border-outline-variant/20 space-y-8">
        <div className="group">
          <label
            htmlFor="gif-notes"
            className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-4 group-focus-within:text-primary transition-colors"
          >
            Tell us more
          </label>
          <textarea
            id="gif-notes"
            name="notes"
            rows={5}
            required
            placeholder="What craft do you want to capture, what hardware are you bringing online, or what use case are you exploring? The more specific the better."
            className="w-full bg-surface-container-highest border-none focus:ring-0 border-b-2 border-transparent focus:border-primary px-4 py-3 font-body text-white placeholder-white/20"
          />
        </div>
        <div className="group">
          <label
            htmlFor="gif-referral"
            className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors"
          >
            How did you hear about us? (optional)
          </label>
          <input
            id="gif-referral"
            name="referral"
            type="text"
            placeholder="X / LINKEDIN / HACKER NEWS / FRIEND / CONFERENCE..."
            className="w-full bg-surface-container-highest border-none focus:ring-0 border-b-2 border-transparent focus:border-primary px-4 py-3 font-body text-white placeholder-white/20"
          />
        </div>
      </div>

      {/* Consent + submit */}
      <div className="pt-6 border-t border-outline-variant/20 space-y-6">
        <div className="flex items-start gap-4">
          <input
            className="mt-1 bg-surface-container-highest border-outline-variant text-primary focus:ring-0"
            id="gif-newsletter"
            name="newsletter"
            type="checkbox"
            defaultChecked
          />
          <label
            className="text-xs text-on-surface-variant font-body leading-relaxed"
            htmlFor="gif-newsletter"
          >
            Keep me posted — send milestone updates and early-access invites as
            we ship new skills.
          </label>
        </div>
        <button
          className="w-full bg-primary-container text-on-primary-fixed font-headline font-bold uppercase py-6 tracking-[0.3em] active:scale-[0.98] transition-transform flex justify-center items-center gap-4 disabled:opacity-50"
          type="submit"
          disabled={status === "sending" || status === "sent"}
        >
          {status === "sending"
            ? "SENDING..."
            : status === "sent"
              ? "RECEIVED · WE’LL BE IN TOUCH"
              : "RECORD INTEREST"}
          <span className="material-symbols-outlined text-sm">
            {status === "sent" ? "check_circle" : "send"}
          </span>
        </button>
        {status === "error" && (
          <p className="text-[10px] text-center text-error uppercase tracking-widest">
            Could not reach HubSpot. Please retry or email
            hello@panditaai.com.
            {errorDetail ? ` (${errorDetail})` : ""}
          </p>
        )}
        {status === "unconfigured" && (
          <p className="text-[10px] text-center text-error uppercase tracking-widest">
            HubSpot portal not configured. Set
            NEXT_PUBLIC_HUBSPOT_PORTAL_ID and NEXT_PUBLIC_HUBSPOT_FORM_ID.
          </p>
        )}
        <p className="text-[10px] text-center text-on-surface-variant uppercase tracking-widest opacity-50">
          Submissions routed to HubSpot CRM · Encryption: TLS 1.3
        </p>
      </div>
    </form>
  );
}
