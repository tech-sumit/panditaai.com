"use client";

import { FormEvent, useState } from "react";

/**
 * Shared investor interest form used on `/interest` and `/investor-connect`.
 * Submissions are posted directly to the HubSpot public Forms API from the
 * browser — no backend is required, which keeps the site deployable as a
 * pure static export.
 *
 * Portal + form ids are public once embedded on any HubSpot-hosted form, so
 * they are safe to ship in the bundle. Staging deploys can override them via
 * NEXT_PUBLIC_HUBSPOT_PORTAL_ID / NEXT_PUBLIC_HUBSPOT_FORM_ID.
 *
 * The HubSpot form must expose these contact properties (standard + custom):
 *   Standard: email, firstname, lastname, company, website, message
 *   Custom:   investor_type, ticket_size, investment_timeline, nda_requested
 */

const HUBSPOT_PORTAL_ID =
  process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || "245933164";
const HUBSPOT_FORM_ID =
  process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID ||
  "8f60c6a9-48fc-473e-a8d1-3f4e428fc144";

type Status = "idle" | "sending" | "sent" | "error" | "unconfigured";

type HubSpotField = { objectTypeId: "0-1"; name: string; value: string };

function splitName(full: string): { first: string; last: string } {
  const trimmed = full.trim();
  if (!trimmed) return { first: "", last: "" };
  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) return { first: parts[0], last: "" };
  return { first: parts[0], last: parts.slice(1).join(" ") };
}

type Props = {
  /** Label used in the HubSpot submission context so we can tell which page a
   *  lead came from inside the CRM. */
  pageName?: string;
  /** Optional override for the primary submit button copy. */
  submitLabel?: string;
};

export default function InvestorInterestForm({
  pageName = "PanditaAI · Investor Interest",
  submitLabel = "REGISTER INTEREST",
}: Props) {
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
      field("company", String(data.firm || "")),
      field("website", String(data.link || "")),
      field("message", String(data.notes || "")),
      field("investor_type", String(data.investorType || "")),
      field("ticket_size", String(data.ticketSize || "")),
      field("investment_timeline", String(data.timeline || "")),
      field("nda_requested", data.nda === "on" ? "true" : "false"),
    ].filter((f) => f.value !== "");

    const payload = {
      fields,
      context: {
        pageUri: typeof window !== "undefined" ? window.location.href : "",
        pageName,
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
      className="space-y-12 bg-surface-container-low p-12 border-l border-outline-variant/15"
    >
      {/* Section 1: Identity */}
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group">
            <label
              htmlFor="iif-full-name"
              className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors"
            >
              Full Name
            </label>
            <input
              id="iif-full-name"
              name="fullName"
              type="text"
              required
              placeholder="JANE SMITH"
              className="w-full bg-surface-container-highest border-none focus:ring-0 border-b-2 border-transparent focus:border-primary px-4 py-3 font-body text-white placeholder-white/20"
            />
          </div>
          <div className="group">
            <label
              htmlFor="iif-firm"
              className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors"
            >
              Firm / Fund (optional)
            </label>
            <input
              id="iif-firm"
              name="firm"
              type="text"
              placeholder="SEQUOIA, FAMILY OFFICE, INDEPENDENT..."
              className="w-full bg-surface-container-highest border-none focus:ring-0 border-b-2 border-transparent focus:border-primary px-4 py-3 font-body text-white placeholder-white/20"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group">
            <label
              htmlFor="iif-email"
              className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors"
            >
              Email
            </label>
            <input
              id="iif-email"
              name="email"
              type="email"
              required
              placeholder="YOU@DOMAIN.COM"
              className="w-full bg-surface-container-highest border-none focus:ring-0 border-b-2 border-transparent focus:border-primary px-4 py-3 font-body text-white placeholder-white/20"
            />
          </div>
          <div className="group">
            <label
              htmlFor="iif-link"
              className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors"
            >
              LinkedIn / Website (optional)
            </label>
            <input
              id="iif-link"
              name="link"
              type="url"
              placeholder="HTTPS://..."
              className="w-full bg-surface-container-highest border-none focus:ring-0 border-b-2 border-transparent focus:border-primary px-4 py-3 font-body text-white placeholder-white/20"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Investor Profile */}
      <div className="pt-8 border-t border-outline-variant/20 space-y-8">
        <div>
          <label className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-6">
            Investor Type
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { value: "angel", label: "Angel" },
              { value: "vc", label: "VC / Fund" },
              { value: "family-office", label: "Family Office" },
              { value: "syndicate", label: "Syndicate / SPV" },
              { value: "strategic", label: "Strategic / Corporate" },
              { value: "other", label: "Other" },
            ].map((opt) => (
              <label className="cursor-pointer" key={opt.value}>
                <input
                  className="hidden peer"
                  name="investorType"
                  type="radio"
                  value={opt.value}
                />
                <div className="py-3 text-center border border-outline-variant/30 font-headline text-[10px] uppercase tracking-widest peer-checked:bg-primary peer-checked:text-on-primary-fixed peer-checked:border-primary hover:border-primary transition-all">
                  {opt.label}
                </div>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-6">
            Ticket Size
          </label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { value: "<25k", label: "< $25K" },
              { value: "25-100k", label: "$25K–$100K" },
              { value: "100-250k", label: "$100K–$250K" },
              { value: "250-500k", label: "$250K–$500K" },
              { value: "500k+", label: "$500K+" },
            ].map((opt) => (
              <label className="cursor-pointer" key={opt.value}>
                <input
                  className="hidden peer"
                  name="ticketSize"
                  type="radio"
                  value={opt.value}
                />
                <div className="py-3 text-center border border-outline-variant/30 font-headline text-[10px] uppercase tracking-widest peer-checked:bg-primary peer-checked:text-on-primary-fixed peer-checked:border-primary hover:border-primary transition-all">
                  {opt.label}
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Timeline & Interest */}
      <div className="pt-8 border-t border-outline-variant/20 space-y-8">
        <div>
          <label className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-6">
            Decision Timeline
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { value: "ready", label: "Ready to commit" },
              { value: "1-3-months", label: "1–3 months" },
              { value: "exploratory", label: "Exploratory" },
            ].map((opt) => (
              <label className="cursor-pointer" key={opt.value}>
                <input
                  className="hidden peer"
                  name="timeline"
                  type="radio"
                  value={opt.value}
                />
                <div className="py-3 text-center border border-outline-variant/30 font-headline text-[10px] uppercase tracking-widest peer-checked:bg-primary peer-checked:text-on-primary-fixed peer-checked:border-primary hover:border-primary transition-all">
                  {opt.label}
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="group">
          <label
            htmlFor="iif-notes"
            className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-4 group-focus-within:text-primary transition-colors"
          >
            What drew you to PanditaAI? (optional)
          </label>
          <textarea
            id="iif-notes"
            name="notes"
            rows={4}
            placeholder="Thesis fit, prior portfolio overlap, specific questions, intro source..."
            className="w-full bg-surface-container-highest border-none focus:ring-0 border-b-2 border-transparent focus:border-primary px-4 py-3 font-body text-white placeholder-white/20"
          />
        </div>
      </div>

      {/* Section 4: Consent & Submit */}
      <div className="pt-8 border-t border-outline-variant/20 space-y-6">
        <div className="flex items-start gap-4">
          <input
            className="mt-1 bg-surface-container-highest border-outline-variant text-primary focus:ring-0"
            id="iif-nda"
            name="nda"
            type="checkbox"
          />
          <label
            className="text-xs text-on-surface-variant font-body leading-relaxed"
            htmlFor="iif-nda"
          >
            I&apos;d like a mutual NDA before accessing the data room and
            financial model.
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
              : submitLabel}
          <span className="material-symbols-outlined text-sm">
            {status === "sent" ? "check_circle" : "send"}
          </span>
        </button>
        {status === "error" && (
          <p className="text-[10px] text-center text-error uppercase tracking-widest">
            Could not reach HubSpot. Please retry or email
            sumit@panditaai.com.
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
