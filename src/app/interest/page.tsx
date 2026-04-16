import Link from "next/link";
import InvestorInterestForm from "@/components/ui/InvestorInterestForm";

export default function InterestPage() {
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
          <InvestorInterestForm pageName="PanditaAI · Investor Interest (/interest)" />
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
