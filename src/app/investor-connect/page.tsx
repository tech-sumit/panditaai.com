"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_CONTACT_API_URL || "";

export default function InvestorConnectPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch(`${API_URL}/api/investor-connect`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="px-12 mb-32 grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 md:col-span-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[10px] font-headline font-bold tracking-[0.2em] uppercase text-primary">
              Seed Round Open · Closing Sep 30 2026
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tight leading-[0.9] uppercase mb-8">
            Back the <span className="text-primary">Skill Layer</span>.
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed font-light">
            PanditaAI is raising a $1M seed (SAFE, $5M cap) to build the open marketplace of human-derived physical skills for NVIDIA-powered humanoids. Min ticket $50,000. Angels and micro-funds welcome.
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
          <Link href="/pitch-deck" className="w-full bg-primary-container text-on-primary-fixed py-5 font-headline font-bold uppercase tracking-[0.2em] hover:brightness-110 transition-all flex items-center justify-center gap-3">
            View Deck{" "}
            <span className="material-symbols-outlined text-sm">slideshow</span>
          </Link>
          <a href="mailto:sumit@panditaai.com" className="w-full border border-outline-variant/30 py-5 font-headline font-bold uppercase tracking-[0.2em] text-primary hover:bg-primary/10 transition-all flex items-center justify-center gap-3">
            Email Sumit{" "}
            <span className="material-symbols-outlined text-sm">
              alternate_email
            </span>
          </a>
        </div>
      </section>

      {/* Thesis & Conviction Bento */}
      <section className="px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <div className="bg-surface-container-low p-12 aspect-square flex flex-col justify-between border-l border-t border-outline-variant/10">
            <div>
              <div className="text-primary font-headline font-bold mb-4 text-xs tracking-widest uppercase">
                01 / Thesis
              </div>
              <h3 className="text-3xl font-headline font-medium leading-tight mb-6">
                Humanoids ship. Skills don&apos;t.
              </h3>
            </div>
            <p className="text-on-surface-variant font-light text-lg">
              Figure, Unitree, Boston Dynamics and Tesla Optimus are commoditizing humanoid hardware. Whoever owns the open skill layer captures the software margin.
            </p>
          </div>
          <div className="bg-surface-container-low p-12 aspect-square flex flex-col justify-between border-l border-t border-outline-variant/10">
            <div>
              <div className="text-primary font-headline font-bold mb-4 text-xs tracking-widest uppercase">
                02 / Edge
              </div>
              <h3 className="text-3xl font-headline font-medium leading-tight mb-6">
                Why PanditaAI Wins.
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">
                  check_circle
                </span>
                <span className="text-on-surface text-sm uppercase tracking-wider font-bold">
                  Open · Any Robot Any OEM
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">
                  check_circle
                </span>
                <span className="text-on-surface text-sm uppercase tracking-wider font-bold">
                  Human Expert Royalty Flywheel
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">
                  check_circle
                </span>
                <span className="text-on-surface text-sm uppercase tracking-wider font-bold">
                  NVIDIA-Native Stack (Isaac + TensorRT)
                </span>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-0 aspect-square overflow-hidden border-l border-r border-t border-outline-variant/10">
            <img
              className="w-full h-full object-cover brightness-90 hover:brightness-110 transition-all duration-700"
              alt="Humanoid robot gripper performing a human-trained chef knife cut in a professional kitchen"
              src="/images/robot-chef-knife.webp"
            />
          </div>
        </div>
      </section>

      {/* Capital & Use of Funds */}
      <section className="bg-surface-container-low py-32 px-12 mb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 relative z-10">
          <div>
            <h2 className="text-5xl font-headline font-bold uppercase tracking-tighter mb-12">
              The Round <span className="text-primary">Parameters</span>
            </h2>
            <div className="space-y-12">
              <div className="border-b border-outline-variant/20 pb-8">
                <div className="text-[10px] uppercase font-headline tracking-[0.3em] text-on-surface-variant mb-2">
                  Capital Being Raised
                </div>
                <div className="text-6xl font-headline font-black text-white">
                  $1.0M
                </div>
                <div className="text-sm text-on-surface-variant mt-2">
                  SAFE · $5M Valuation Cap · Min Ticket $50,000
                </div>
              </div>
              <div className="border-b border-outline-variant/20 pb-8">
                <div className="text-[10px] uppercase font-headline tracking-[0.3em] text-on-surface-variant mb-2">
                  Round Status
                </div>
                <div className="text-4xl font-headline font-bold text-primary">
                  CLOSING SEP 30 2026
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-headline font-bold tracking-[0.4em] uppercase text-primary mb-12">
              Deployment Strategy
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b border-outline-variant/10 pb-4">
                <span className="text-lg font-headline font-medium uppercase tracking-widest">
                  Humanoid Hardware &amp; MoCap
                </span>
                <span className="text-2xl font-headline text-primary">35%</span>
              </div>
              <div className="flex justify-between items-end border-b border-outline-variant/10 pb-4">
                <span className="text-lg font-headline font-medium uppercase tracking-widest">
                  R&amp;D / Sim Compute
                </span>
                <span className="text-2xl font-headline text-primary">25%</span>
              </div>
              <div className="flex justify-between items-end border-b border-outline-variant/10 pb-4">
                <span className="text-lg font-headline font-medium uppercase tracking-widest">
                  Founding Team
                </span>
                <span className="text-2xl font-headline text-primary">25%</span>
              </div>
              <div className="flex justify-between items-end border-b border-outline-variant/10 pb-4">
                <span className="text-lg font-headline font-medium uppercase tracking-widest">
                  Operations &amp; Legal
                </span>
                <span className="text-2xl font-headline text-primary">15%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Connect Form */}
      <section className="px-12 mb-32 grid grid-cols-12 gap-16">
        <div className="col-span-12 lg:col-span-5">
          <h2 className="text-4xl font-headline font-bold uppercase mb-8">
            Secure Your <span className="text-primary">Allocation.</span>
          </h2>
          <p className="text-on-surface-variant mb-12 text-lg">
            Formal outreach for institutional investors and strategic partners.
            Please provide credentials for terminal access.
          </p>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <span className="text-primary font-headline font-black text-xl leading-none">
                /
              </span>
              <div>
                <div className="text-xs font-headline font-bold tracking-widest uppercase mb-1">
                  Direct Line
                </div>
                <div className="text-white text-lg font-light tracking-wide">
                  sumit@panditaai.com
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-primary font-headline font-black text-xl leading-none">
                /
              </span>
              <div>
                <div className="text-xs font-headline font-bold tracking-widest uppercase mb-1">
                  HQ Location
                </div>
                <div className="text-white text-lg font-light tracking-wide">
                  Pune, Maharashtra, India
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-primary font-headline font-black text-xl leading-none">
                /
              </span>
              <div>
                <div className="text-xs font-headline font-bold tracking-widest uppercase mb-1">
                  Entity
                </div>
                <div className="text-white text-lg font-light tracking-wide">
                  Shailka Systems Pvt. Ltd.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7 bg-surface-container-high p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label
                  htmlFor="investor-name"
                  className="text-[10px] font-headline font-bold uppercase tracking-[0.2em] text-on-surface-variant"
                >
                  Investor Name
                </label>
                <input
                  id="investor-name"
                  name="investorName"
                  className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-primary focus:ring-0 transition-all text-white font-headline tracking-widest placeholder:text-white/20 px-4 py-4"
                  placeholder="FULL NAME"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="firm-fund"
                  className="text-[10px] font-headline font-bold uppercase tracking-[0.2em] text-on-surface-variant"
                >
                  Firm / Fund
                </label>
                <input
                  id="firm-fund"
                  name="firmFund"
                  className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-primary focus:ring-0 transition-all text-white font-headline tracking-widest placeholder:text-white/20 px-4 py-4"
                  placeholder="VENTURE CAPITAL / FAMILY OFFICE"
                  type="text"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message-conviction"
                className="text-[10px] font-headline font-bold uppercase tracking-[0.2em] text-on-surface-variant"
              >
                Message / Conviction
              </label>
              <textarea
                id="message-conviction"
                name="messageConviction"
                className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-primary focus:ring-0 transition-all text-white font-headline tracking-widest placeholder:text-white/20 px-4 py-4 resize-none"
                placeholder="BRIEF STATEMENT OF INTEREST"
                rows={4}
              ></textarea>
            </div>
            <button
              className="w-full bg-primary text-on-primary-fixed font-headline font-black uppercase py-5 tracking-[0.4em] hover:bg-primary-container transition-colors disabled:opacity-50"
              type="submit"
              disabled={status === "sending" || status === "sent"}
            >
              {status === "sending" ? "Connecting..." : status === "sent" ? "Connection Established" : "Initialize Connection"}
            </button>
            {status === "error" && (
              <p className="text-[10px] text-center text-error uppercase tracking-widest mt-4">
                Connection failed. Please retry.
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
