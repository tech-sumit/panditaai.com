"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

/**
 * Investor interest capture page. Submissions are posted directly to the
 * HubSpot public Forms API from the browser — no backend is required, which
 * keeps the site deployable as a pure static export.
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

export default function InterestPage() {
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
        pageName: "PanditaAI · Investor Interest",
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
            parsed?.errors?.[0]?.message ||
            parsed?.message ||
            reason;
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
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-12 mb-24 grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 lg:col-span-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-headline text-xs tracking-[0.3em] uppercase text-primary">
              Seed Round Open · $1M on $5M cap
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter leading-none mb-8">
            BACK THE SKILL LAYER <br />{" "}
            <span className="text-primary">FOR PHYSICAL AI.</span>
          </h1>
          <p className="max-w-xl text-on-surface-variant font-body text-lg leading-relaxed">
            PanditaAI is raising a $1M seed to build the open marketplace of
            human-derived skills for NVIDIA-powered humanoids. Tell us who you
            are and how you like to deploy capital — we&apos;ll share the full
            data room and set up an intro call within 48 hours.
          </p>
        </div>
        <div className="hidden lg:block col-span-4 text-right">
            <div className="inline-block p-6 bg-surface-container-low border-l-2 border-primary">
            <div className="font-headline text-[10px] tracking-widest text-primary mb-1 uppercase">
              Current Phase
            </div>
            <div className="font-headline text-xl font-bold tracking-widest uppercase">
              Raising · Close Sep 30 2026
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <div className="w-1 h-1 bg-primary"></div>
              <div className="w-1 h-1 bg-outline-variant"></div>
              <div className="w-1 h-1 bg-outline-variant"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Profiles (Bento Style) */}
      <section className="px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Profile 1: Angels */}
          <div className="group relative aspect-[4/5] bg-surface-container-low overflow-hidden cursor-pointer transition-all hover:bg-surface-container-high p-8 flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <span className="material-symbols-outlined text-6xl">
                person
              </span>
            </div>
            <div>
              <div className="font-headline text-xs tracking-widest text-primary mb-2 uppercase">
                Profile 01
              </div>
              <h3 className="font-headline text-2xl font-bold uppercase leading-tight">
                Angel
                <br />
                Investors
              </h3>
            </div>
            <div className="font-body text-sm text-on-surface-variant">
              Solo cheques from $25K. Typical allocation $25K–$100K with pro-rata
              rights on the Series A.
            </div>
          </div>

          {/* Profile 2: VCs */}
          <div className="group relative aspect-[4/5] bg-surface-container-low overflow-hidden cursor-pointer transition-all hover:bg-surface-container-high p-8 flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <span className="material-symbols-outlined text-6xl">
                hub
              </span>
            </div>
            <div>
              <div className="font-headline text-xs tracking-widest text-primary mb-2 uppercase">
                Profile 02
              </div>
              <h3 className="font-headline text-2xl font-bold uppercase leading-tight">
                Venture
                <br />
                Firms
              </h3>
            </div>
            <div className="font-body text-sm text-on-surface-variant">
              Lead or co-lead the seed. Board observer seat and priority access
              to pilot deployment data.
            </div>
          </div>

          {/* Profile 3: Family Offices */}
          <div className="group relative aspect-[4/5] bg-surface-container-low overflow-hidden cursor-pointer transition-all hover:bg-surface-container-high p-8 flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <span className="material-symbols-outlined text-6xl">
                account_balance
              </span>
            </div>
            <div>
              <div className="font-headline text-xs tracking-widest text-primary mb-2 uppercase">
                Profile 03
              </div>
              <h3 className="font-headline text-2xl font-bold uppercase leading-tight">
                Family
                <br />
                Offices
              </h3>
            </div>
            <div className="font-body text-sm text-on-surface-variant">
              Long-horizon capital into the physical-AI decade. Direct or via
              dedicated deep-tech mandates.
            </div>
          </div>

          {/* Profile 4: Strategic / Syndicate */}
          <div className="group relative aspect-[4/5] bg-surface-container-low overflow-hidden cursor-pointer transition-all hover:bg-surface-container-high p-8 flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <span className="material-symbols-outlined text-6xl">
                groups
              </span>
            </div>
            <div>
              <div className="font-headline text-xs tracking-widest text-primary mb-2 uppercase">
                Profile 04
              </div>
              <h3 className="font-headline text-2xl font-bold uppercase leading-tight">
                Strategic
                <br />
                &amp; Syndicates
              </h3>
            </div>
            <div className="font-body text-sm text-on-surface-variant">
              Robot OEMs, NVIDIA ecosystem players, and angel syndicates pooling
              allocations into a single SPV.
            </div>
          </div>
        </div>
      </section>

      {/* Investor Interest Form */}
      <section className="px-12 grid grid-cols-12 gap-12">
        <div className="col-span-12 lg:col-span-5">
          <div className="sticky top-32">
            <h2 className="font-headline text-4xl font-bold uppercase tracking-tight mb-6">
              Investor <br /> Interest Form
            </h2>
            <p className="text-on-surface-variant mb-12">
              Share a few details and we&apos;ll send the full pitch deck, data
              room, and a calendar link within 48 hours. All submissions are
              handled confidentially.
            </p>
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <span className="font-headline text-primary font-bold">01</span>
                <div>
                  <h4 className="font-headline text-xs font-bold uppercase tracking-widest mb-1">
                    Identity
                  </h4>
                  <p className="text-xs text-on-surface-variant uppercase">
                    Who you are and how to reach you
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="font-headline text-outline font-bold">02</span>
                <div>
                  <h4 className="font-headline text-xs font-bold uppercase tracking-widest mb-1 text-outline">
                    Investor Profile
                  </h4>
                  <p className="text-xs text-on-surface-variant/50 uppercase">
                    Capital type, firm, and ticket size
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="font-headline text-outline font-bold">03</span>
                <div>
                  <h4 className="font-headline text-xs font-bold uppercase tracking-widest mb-1 text-outline">
                    Timeline &amp; Interest
                  </h4>
                  <p className="text-xs text-on-surface-variant/50 uppercase">
                    When you can act and what drew you in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="space-y-12 bg-surface-container-low p-12 border-l border-outline-variant/15"
          >
            {/* Section 1: Identity */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label
                    htmlFor="full-name"
                    className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors"
                  >
                    Full Name
                  </label>
                  <input
                    id="full-name"
                    name="fullName"
                    type="text"
                    required
                    placeholder="JANE SMITH"
                    className="w-full bg-surface-container-highest border-none focus:ring-0 border-b-2 border-transparent focus:border-primary px-4 py-3 font-body text-white placeholder-white/20"
                  />
                </div>
                <div className="group">
                  <label
                    htmlFor="firm"
                    className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors"
                  >
                    Firm / Fund (optional)
                  </label>
                  <input
                    id="firm"
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
                    htmlFor="email"
                    className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="YOU@DOMAIN.COM"
                    className="w-full bg-surface-container-highest border-none focus:ring-0 border-b-2 border-transparent focus:border-primary px-4 py-3 font-body text-white placeholder-white/20"
                  />
                </div>
                <div className="group">
                  <label
                    htmlFor="link"
                    className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors"
                  >
                    LinkedIn / Website (optional)
                  </label>
                  <input
                    id="link"
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
                  htmlFor="notes"
                  className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-4 group-focus-within:text-primary transition-colors"
                >
                  What drew you to PanditaAI? (optional)
                </label>
                <textarea
                  id="notes"
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
                  id="nda"
                  name="nda"
                  type="checkbox"
                />
                <label
                  className="text-xs text-on-surface-variant font-body leading-relaxed"
                  htmlFor="nda"
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
                    : "REGISTER INTEREST"}
                <span className="material-symbols-outlined text-sm">
                  {status === "sent" ? "check_circle" : "send"}
                </span>
              </button>
              {status === "error" && (
                <p className="text-[10px] text-center text-error uppercase tracking-widest">
                  Could not reach HubSpot. Please retry or email
                  invest@panditaai.com.
                  {errorDetail ? ` (${errorDetail})` : ""}
                </p>
              )}
              {status === "unconfigured" && (
                <p className="text-[10px] text-center text-error uppercase tracking-widest">
                  HubSpot portal not configured. Set
                  NEXT_PUBLIC_HUBSPOT_PORTAL_ID and
                  NEXT_PUBLIC_HUBSPOT_FORM_ID.
                </p>
              )}
              <p className="text-[10px] text-center text-on-surface-variant uppercase tracking-widest opacity-50">
                Submissions routed to HubSpot CRM · Encryption: TLS 1.3
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* System Telemetry & Hardware Integration */}
      <section className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-1 px-12">
        <div className="bg-surface-container-low p-12 flex flex-col justify-between aspect-video">
          <h3 className="font-headline text-3xl font-bold uppercase tracking-tight">
            Round Signal
          </h3>
          <div>
            <div className="font-headline text-[10px] text-primary tracking-widest uppercase mb-4">
              Seed Round Terms
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] uppercase tracking-widest">
                <span className="text-on-surface-variant">Raise</span>
                <span>$1M on $5M cap</span>
              </div>
              <div className="w-full h-[1px] bg-outline-variant/20"></div>
              <div className="flex justify-between text-[10px] uppercase tracking-widest">
                <span className="text-on-surface-variant">Instrument</span>
                <span>SAFE · Post-money</span>
              </div>
              <div className="w-full h-[1px] bg-outline-variant/20"></div>
              <div className="flex justify-between text-[10px] uppercase tracking-widest">
                <span className="text-on-surface-variant">Close Target</span>
                <span>Sep 30 2026</span>
              </div>
              <div className="w-full h-[1px] bg-outline-variant/20"></div>
              <div className="flex justify-between text-[10px] uppercase tracking-widest">
                <span className="text-on-surface-variant">Use of Funds</span>
                <span>35% HW · 25% R&amp;D · 25% Team · 15% Ops</span>
              </div>
            </div>
            <div className="mt-6">
              <Link
                className="font-headline text-[10px] text-primary tracking-widest uppercase hover:underline"
                href="/pitch-deck"
              >
                View pitch deck →
              </Link>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden aspect-video bg-surface-container-low group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover brightness-90 group-hover:brightness-110 transition-all duration-700 scale-105 group-hover:scale-100"
            alt="Expert hand in a VR teleoperation glove with tracking markers casting amber data trails as motion is captured"
            src="/images/interest-vr-capture.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
          <div className="absolute bottom-8 left-8">
            <div className="font-headline text-xs tracking-widest text-primary mb-2 uppercase">
              What you&apos;re backing
            </div>
            <h3 className="font-headline text-2xl font-bold uppercase">
              Vision to Actuation
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}
