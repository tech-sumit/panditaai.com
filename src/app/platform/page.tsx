"use client";

import Link from "next/link";

export default function PlatformPage() {
  return (
    <div className="pt-32">
      {/* Hero Header */}
      <section className="px-6 md:px-12 mb-24 max-w-7xl mx-auto grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 md:col-span-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-3 h-3 bg-primary animate-pulse" />
            <span className="font-headline text-primary tracking-[0.3em] uppercase text-xs font-bold">
              Concept Architecture · Prototype
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tight leading-[0.9] mb-8">
            THE SKILL <br />
            <span className="text-primary">PLATFORM</span>
          </h1>
          <p className="text-on-surface-variant text-xl max-w-2xl font-light leading-relaxed">
            PanditaAI is the open marketplace for physical skills. Experts capture expertise, we train it in NVIDIA Omniverse, and robots license it for deployment on Jetson Orin or IGX.
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 border-l border-outline-variant/20 pl-8 pb-4">
          <div className="space-y-4">
            <div>
              <div className="text-[10px] text-outline font-headline uppercase tracking-[0.2em] mb-1">
                Stage
              </div>
              <div className="text-sm font-headline uppercase text-white">
                Prototyping · Pre-Revenue
              </div>
            </div>
            <div>
              <div className="text-[10px] text-outline font-headline uppercase tracking-[0.2em] mb-1">
                Training Stack
              </div>
              <div className="text-sm font-headline uppercase text-white">
                NVIDIA Isaac Sim · Omniverse
              </div>
            </div>
            <div>
              <div className="text-[10px] text-outline font-headline uppercase tracking-[0.2em] mb-1">
                Inference Target
              </div>
              <div className="text-sm font-headline uppercase text-white">
                &lt;5ms via TensorRT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Bento Grid */}
      <section className="px-6 md:px-12 mb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-4">
          {/* Creator Card */}
          <div className="col-span-12 md:col-span-7 bg-surface-container-low p-8 md:p-12 flex flex-col justify-between group overflow-hidden relative">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-12">
                <span className="material-symbols-outlined text-primary text-4xl">
                  sports_martial_arts
                </span>
                <h3 className="text-3xl font-headline font-bold tracking-tight uppercase">
                  Expert Onboarding
                </h3>
              </div>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="text-primary font-headline font-bold text-lg">
                    01.
                  </div>
                  <div>
                    <h4 className="font-headline font-bold uppercase tracking-wider mb-2">
                      Record Your Skill
                    </h4>
                    <p className="text-on-surface-variant text-sm">
                      Partner with our motion-capture studios or use VR teleoperation. We record your expertise across varied scenarios until the sim policy matches your technique.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-primary font-headline font-bold text-lg">
                    02.
                  </div>
                  <div>
                    <h4 className="font-headline font-bold uppercase tracking-wider mb-2">
                      Earn On Every Deployment
                    </h4>
                    <p className="text-on-surface-variant text-sm">
                      Your skill ships to the marketplace under your name. You earn royalties every time a robot operator licenses it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <Link
                href="/interest"
                className="inline-block border border-outline-variant/30 text-primary px-8 py-3 font-headline text-xs font-bold uppercase tracking-widest hover:bg-primary/10 transition-all"
              >
                Register as an Expert
              </Link>
            </div>
            <div className="absolute -right-20 -bottom-20 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-[300px]">
                hub
              </span>
            </div>
          </div>

          {/* Deployment Pipeline Stats */}
          <div className="col-span-12 md:col-span-5 bg-surface-container-high p-8 flex flex-col justify-between border-t-2 border-primary">
            <div>
              <h3 className="font-headline font-bold tracking-widest uppercase text-xs text-primary mb-8">
                Training Targets
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-outline-variant/10 pb-4">
                  <span className="text-xs font-headline uppercase text-on-surface-variant">
                    Parallel Sim Instances
                  </span>
                  <span className="text-sm font-mono text-white">1,000</span>
                </div>
                <div className="flex justify-between items-end border-b border-outline-variant/10 pb-4">
                  <span className="text-xs font-headline uppercase text-on-surface-variant">
                    Inference Latency
                  </span>
                  <span className="text-sm font-mono text-white">
                    &lt;5ms (TensorRT)
                  </span>
                </div>
                <div className="flex justify-between items-end border-b border-outline-variant/10 pb-4">
                  <span className="text-xs font-headline uppercase text-on-surface-variant">
                    Deploy Target
                  </span>
                  <span className="text-sm font-mono text-white">
                    Jetson Orin · IGX
                  </span>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-surface mt-8 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-px bg-primary/20 absolute" />
                <div className="w-1/2 h-full border-x border-primary/20 absolute" />
                <span className="text-[10px] font-headline text-primary/60 uppercase tracking-[0.4em] z-10 bg-surface px-4">
                  Active Telemetry Stream
                </span>
              </div>
            </div>
          </div>

          {/* Marketplace Preview Skill Card */}
          <div className="col-span-12 md:col-span-4 bg-surface-container-low p-6">
            <h3 className="font-headline font-bold uppercase text-xs text-on-surface-variant mb-6 flex justify-between items-center">
              Skill Card · Sample Design
              <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 tracking-tighter">
                PROTOTYPE
              </span>
            </h3>
            <div className="bg-surface p-4 border-l border-primary/40 group hover:bg-surface-container-highest transition-colors">
              <div className="flex justify-between mb-4">
                <span className="text-[10px] font-headline bg-outline-variant/20 px-2 py-1 uppercase text-white">
                  Manipulation
                </span>
                <span className="text-[10px] font-mono text-primary">
                  PROTOTYPE
                </span>
              </div>
              <h4 className="font-headline font-bold uppercase mb-2">
                Chef Knife Skills v1
              </h4>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-[10px] uppercase font-headline text-on-surface-variant">
                  <span>Expert Source</span>
                  <span className="text-white">Human Chef · 3 yrs</span>
                </div>
                <div className="flex justify-between text-[10px] uppercase font-headline text-on-surface-variant">
                  <span>Sim Training</span>
                  <span className="text-white">~24 hrs · Isaac Sim</span>
                </div>
                <div className="flex justify-between text-[10px] uppercase font-headline text-on-surface-variant">
                  <span>Transfer Time</span>
                  <span className="text-white">~1 hr per humanoid</span>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
                <span className="text-xs font-headline text-on-surface-variant uppercase tracking-widest">
                  Pricing TBD · Not Yet Live
                </span>
                <span className="text-[10px] font-headline font-bold uppercase tracking-widest text-primary/50">
                  Sample
                </span>
              </div>
            </div>
          </div>

          {/* Universal Hardware Bridge */}
          <div className="col-span-12 md:col-span-8 bg-surface-container-low grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 border-r border-outline-variant/10">
              <h3 className="text-3xl font-headline font-bold tracking-tight uppercase mb-6 leading-tight">
                Universal <br />
                Hardware Bridge
              </h3>
              <p className="text-on-surface-variant text-sm mb-8">
                Seamless execution across the NVIDIA edge ecosystem. Our runtime
                provides native optimization for specific ISA requirements
                without code modification.
              </p>
              <div className="space-y-4">
                <div className="bg-surface-container-highest p-4 flex items-center justify-between">
                  <span className="font-headline font-bold uppercase text-xs tracking-widest">
                    NVIDIA Jetson AGX
                  </span>
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                </div>
                <div className="bg-surface-container-highest p-4 flex items-center justify-between">
                  <span className="font-headline font-bold uppercase text-xs tracking-widest">
                    NVIDIA IGX Orin
                  </span>
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center items-center text-center relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                alt="Amber skill file binary streaming through circuit traces from a training cloud to a humanoid robot — runtime deployment"
                src="/images/skill-packet-deploy.webp"
              />
              <div className="relative z-10">
                <div className="mb-6 inline-block p-4 border border-primary">
                  <span className="material-symbols-outlined text-5xl text-primary">
                    memory
                  </span>
                </div>
                <h4 className="font-headline font-bold uppercase tracking-widest mb-2">
                  Runtime Workflow
                </h4>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">
                  Zero-Latency Local Execution
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Infrastructure Stack */}
      <section className="mb-32 bg-surface-container-low py-24">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-headline font-bold uppercase tracking-tighter mb-4">
              The Infrastructure Stack
            </h2>
            <p className="text-on-surface-variant font-light">
              Powered by Cloudflare Workers for global low-latency
              orchestration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-outline-variant/30 -z-0" />
            <div className="bg-surface p-8 border-b-4 border-primary z-10">
              <div className="text-primary font-headline font-bold mb-4">
                LOAD
              </div>
              <h5 className="font-headline font-bold uppercase text-sm mb-2">
                Ingress Node
              </h5>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Raw sensor telemetry and skill manifest validation at the edge.
              </p>
            </div>
            <div className="bg-surface p-8 border-b-4 border-primary z-10">
              <div className="text-primary font-headline font-bold mb-4">
                RESOLVE
              </div>
              <h5 className="font-headline font-bold uppercase text-sm mb-2">
                CF-Worker Core
              </h5>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Dynamic routing and subscription verification via distributed
                backend.
              </p>
            </div>
            <div className="bg-surface p-8 border-b-4 border-primary z-10">
              <div className="text-primary font-headline font-bold mb-4">
                OPTIMIZE
              </div>
              <h5 className="font-headline font-bold uppercase text-sm mb-2">
                Kernel JIT
              </h5>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Just-in-time optimization of neural weights for specific device
                SKU.
              </p>
            </div>
            <div className="bg-surface p-8 border-b-4 border-primary z-10">
              <div className="text-primary font-headline font-bold mb-4">
                EXECUTE
              </div>
              <h5 className="font-headline font-bold uppercase text-sm mb-2">
                Local Runtime
              </h5>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Deterministic physical movement execution with safety
                interlocks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Physical AI Frontier CTA */}
      <section className="px-6 md:px-12 mb-32 max-w-7xl mx-auto">
        <div className="bg-primary flex flex-col md:flex-row items-center">
          <div className="p-10 md:p-16 flex-1">
            <h2 className="text-on-primary-fixed text-4xl md:text-5xl font-headline font-bold tracking-tighter uppercase mb-6 leading-[0.85]">
              Join the <br />
              Physical AI Frontier
            </h2>
            <p className="text-on-primary-fixed/80 max-w-md font-medium text-lg leading-relaxed">
              We are currently onboarding early hardware partners and
              world-class AI creators.
            </p>
          </div>
          <div className="p-10 md:p-16 flex flex-col gap-4">
            <Link
              href="/investor-connect"
              className="bg-on-primary-fixed text-primary px-12 py-5 font-headline font-black uppercase text-sm tracking-widest hover:scale-105 transition-transform text-center"
            >
              Investor Connect
            </Link>
            <Link
              href="/interest"
              className="border-2 border-on-primary-fixed text-on-primary-fixed px-12 py-5 font-headline font-bold uppercase text-sm tracking-widest hover:bg-on-primary-fixed hover:text-primary transition-colors text-center"
            >
              Register Interest
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
