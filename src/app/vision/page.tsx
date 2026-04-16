"use client";

import Link from "next/link";

export default function VisionPage() {
  return (
    <>
      {/* Hero: The Orbital Command */}
      <section className="min-h-[1024px] pt-32 pb-20 px-12 flex flex-col justify-end relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            className="w-full h-full object-cover grayscale brightness-50"
            alt="Cinematic high-tech futuristic robotics laboratory with glowing orange lights and complex mechanical structures in dark atmosphere"
            src="/images/vision-hero.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-headline text-primary tracking-[0.4em] uppercase text-xs">
              Strategic Mandate // 2024-2034
            </span>
          </div>
          <h1 className="font-headline text-7xl md:text-9xl font-black tracking-tighter leading-none mb-12">
            THE ARCHITECTURE <br />
            <span className="text-primary italic">OF AGENCY</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-6">
              <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed">
                We are not building robots. We are building the substrate upon
                which the next billion physical actions will be executed.
              </p>
            </div>
            <div className="md:col-span-6 flex justify-end">
              <div className="p-8 bg-surface-container-low backdrop-blur-md border-l-4 border-primary">
                <span className="block font-headline text-xs uppercase tracking-widest text-primary mb-2">
                  Primary Objective
                </span>
                <p className="text-sm font-medium tracking-tight">
                  Standardizing robot skill distribution for the frontier
                  economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section: Skill-Native / Modular */}
      <section className="py-32 px-12 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="font-headline text-5xl font-extrabold tracking-tight mb-8">
              SKILL-NATIVE <br />
              BY DESIGN.
            </h2>
            <div className="space-y-8 text-lg text-on-surface-variant leading-relaxed">
              <p>
                Traditional robotics is trapped in the &ldquo;Monolith
                Era&rdquo;&mdash;where hardware and software are inseparable,
                expensive, and rigid. PanditaAI breaks this cycle.
              </p>
              <p className="text-white font-medium border-l border-outline-variant pl-6 py-2">
                Our architecture treats skills as modular, hot-swappable assets.
                A robot is no longer a tool; it is a container for physical
                expertise.
              </p>
              <p>
                By decoupling the cognitive &ldquo;skill layer&rdquo; from the
                mechanical &ldquo;actuation layer,&rdquo; we enable a world
                where capability is downloaded, not hard-coded.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-high p-8 flex flex-col justify-between aspect-square">
              <span className="material-symbols-outlined text-primary text-4xl">
                extension
              </span>
              <h3 className="font-headline text-xl font-bold uppercase tracking-tight">
                Modular Logic
              </h3>
            </div>
            <div className="bg-primary p-8 flex flex-col justify-between aspect-square">
              <span className="material-symbols-outlined text-on-primary-fixed text-4xl">
                dynamic_feed
              </span>
              <h3 className="font-headline text-xl font-bold uppercase tracking-tight text-on-primary-fixed">
                Instant Deployment
              </h3>
            </div>
            <div className="bg-surface-container-low p-8 flex flex-col justify-between aspect-square col-span-2">
              <span className="material-symbols-outlined text-outline text-4xl">
                hub
              </span>
              <h3 className="font-headline text-xl font-bold uppercase tracking-tight">
                Distributed Intelligence
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Bento: The Physical AI Economy */}
      <section className="py-20 px-12 bg-surface-container-low relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="font-headline text-primary tracking-[0.3em] uppercase text-xs block mb-4">
              Core Infrastructure
            </span>
            <h2 className="font-headline text-6xl font-black tracking-tighter">
              THE DISTRIBUTION LAYER
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 md:row-span-2 bg-surface-container-highest p-12 flex flex-col justify-end relative overflow-hidden min-h-[500px]">
              <div className="absolute top-0 right-0 p-8 text-primary/20 font-black text-9xl font-headline pointer-events-none">
                01
              </div>
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
                alt="Detailed view of a metallic robotic hand performing a precise industrial assembly task under spotlight"
                src="/images/robotic-hand-assembly.webp"
              />
              <h3 className="font-headline text-3xl font-bold mb-4 relative z-10">
                Neural Skill Registry
              </h3>
              <p className="text-on-surface-variant relative z-10">
                A centralized, high-fidelity repository of neural-weighted
                skills, ready for cross-platform deployment.
              </p>
            </div>
            <div className="bg-primary-container p-10 flex flex-col justify-between">
              <span className="material-symbols-outlined text-on-primary-fixed text-3xl">
                open_in_new
              </span>
              <h3 className="font-headline text-xl font-bold text-on-primary-fixed uppercase">
                Open Ecosystem
              </h3>
            </div>
            <div className="bg-surface-container-high p-10 flex flex-col justify-between">
              <span className="material-symbols-outlined text-primary text-3xl">
                terminal
              </span>
              <h3 className="font-headline text-xl font-bold uppercase">
                Dev Core API
              </h3>
            </div>
            <div className="md:col-span-2 bg-surface p-10 border-l border-primary/30">
              <h3 className="font-headline text-2xl font-bold mb-4">
                India-Origin Talent
              </h3>
              <p className="text-sm text-on-surface-variant mb-6">
                Leveraging the world&apos;s most dense engineering ecosystem to
                solve global physical bottlenecks.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="font-headline text-3xl font-black text-primary">
                    12K+
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-outline">
                    Engineers
                  </span>
                </div>
                <div className="w-px h-8 bg-outline-variant"></div>
                <div className="flex flex-col">
                  <span className="font-headline text-3xl font-black text-primary">
                    Global
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-outline">
                    Demand Reach
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thesis: Open Ecosystem */}
      <section className="py-32 px-12 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
          <div className="w-full md:w-1/2">
            <div className="aspect-video bg-surface-container-highest relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-9xl opacity-20">
                  cloud_sync
                </span>
              </div>
              <img
                className="w-full h-full object-cover mix-blend-overlay"
                alt="Abstract macro shot of a blue and orange circuit board representing high-speed data transmission"
                src="/images/data-transmission.webp"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-8">
              THE OPEN ECOSYSTEM THESIS
            </h2>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-8 italic">
              &ldquo;Closed systems die in the frontier. Intelligence requires
              friction, collaboration, and rapid iteration.&rdquo;
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              PanditaAI isn&apos;t just a platform; it&apos;s a protocol for trading Kaushals. We
              believe the future of robotics shouldn&apos;t be controlled by a
              single factory. By opening our Kaushal-native infrastructure to
              developers worldwide, we create a compound effect of utility that
              no siloed company can match.
            </p>
          </div>
        </div>
      </section>

      {/* Global Talent / India Core */}
      <section className="py-20 bg-[#131313] px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            <h2 className="font-headline text-5xl font-black tracking-tighter mb-12">
              INDIA ORIGIN. <br />
              <span className="text-primary">GLOBAL SCALE.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-headline font-bold text-primary text-sm tracking-widest uppercase">
                  The Talent Reservoir
                </h4>
                <p className="text-on-surface-variant text-sm">
                  We draw from a demographic dividend unmatched in history.
                  PanditaAI is the conduit for Indian engineering excellence to
                  solve the labor shortage in the West and East alike.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-headline font-bold text-primary text-sm tracking-widest uppercase">
                  The Distribution Vision
                </h4>
                <p className="text-on-surface-variant text-sm">
                  Becoming the default layer for robot skill distribution means
                  every hardware OEM becomes a PanditaAI partner. We are the
                  &lsquo;Intel Inside&rsquo; for the Kaushal economy.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 bg-surface p-12 border-t-4 border-primary">
            <div className="space-y-12">
              <div>
                <span className="font-headline text-4xl font-black block">
                  85%
                </span>
                <span className="text-xs text-outline uppercase tracking-widest">
                  Efficiency Gain per Deployment
                </span>
              </div>
              <div>
                <span className="font-headline text-4xl font-black block">
                  24/7
                </span>
                <span className="text-xs text-outline uppercase tracking-widest">
                  Cross-Platform Sync
                </span>
              </div>
              <Link
                href="/timeline"
                className="block w-full border border-primary text-primary font-headline font-bold py-4 uppercase tracking-widest hover:bg-primary hover:text-on-primary-fixed transition-all text-center"
              >
                Explore the Roadmap
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final Manifesto Statement */}
      <section className="py-48 px-12 bg-surface text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none">
          <span className="font-headline font-black text-[40vw] leading-none select-none">
            PANDITAAI
          </span>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter mb-12">
            THE DEFAULT LAYER <br />
            FOR MOTION.
          </h2>
          <p className="text-2xl text-on-surface-variant font-light mb-16 leading-relaxed">
            By 2030, the question won&apos;t be &ldquo;What can your robot
            do?&rdquo; but &ldquo;How many Kaushals does it run?&rdquo; PanditaAI is
            standardizing the physical world, one Kaushal at a time.
          </p>
          <Link
            href="/interest"
            className="solar-flare text-on-primary-fixed px-12 py-5 font-headline font-black text-xl uppercase tracking-[0.2em] active:scale-95 transition-all inline-block"
          >
            Partner With The Future
          </Link>
        </div>
      </section>
    </>
  );
}
