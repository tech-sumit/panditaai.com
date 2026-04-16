"use client";

import Link from "next/link";

export default function TimelinePage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-12 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
              Roadmap_2026–2027
            </span>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-8">
              10 MONTHS
              <br />
              <span className="text-outline-variant/30">TO MARKETPLACE</span>
            </h1>
            <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed">
              From first prototype skill to open marketplace. Seed closes Sep 30 2026, and we ship the first public skills catalog before EOY 2027.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4 border-l border-outline-variant/20 pl-8 pb-4">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">
                rocket_launch
              </span>
              <span className="text-xs font-bold tracking-widest uppercase">
                Phase 01: Active
              </span>
            </div>
            <div className="h-[2px] w-full bg-surface-container-highest">
              <div
                className="h-full w-1/4 bg-primary"
                style={{ boxShadow: "0 0 15px rgba(255,145,89,0.5)" }}
              />
            </div>
            <span className="text-[10px] text-on-surface-variant tracking-widest uppercase">
              Current Velocity: Optimal
            </span>
          </div>
        </div>
      </section>

      {/* The Timeline: Phase Architecture */}
      <section className="px-12 space-y-32">
        {/* Phase 1: Foundational Stack */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4 sticky top-40 h-fit">
              <div className="bg-surface-container-low p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                  <span className="text-6xl font-black text-primary/10">
                    01
                  </span>
                </div>
                <span className="text-primary font-bold text-xs tracking-widest uppercase mb-2 block">
                  Phase One · Q2 2026
                </span>
                <h2 className="text-4xl font-bold tracking-tight mb-6">
                  Prototyping
                </h2>
                <ul className="space-y-4 text-sm text-on-surface-variant font-medium">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    Procure first humanoid + Jetson Orin
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    Motion-capture pipeline stood up
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    First skill trained: martial arts v0
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-8 space-y-12">
              <div className="relative w-full aspect-video overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Humanoid robot prototype standing centred in a motion-capture studio surrounded by tracking cameras"
                  src="/images/timeline-humanoid-prototype.webp"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-8 left-8 flex gap-2">
                  <span className="px-3 py-1 bg-primary text-on-primary-fixed text-[10px] font-bold tracking-widest uppercase">
                    Active
                  </span>
                  <span className="px-3 py-1 bg-surface-container-highest/80 backdrop-blur text-white text-[10px] font-bold tracking-widest uppercase">
                    Q2 2026
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-surface-container-high p-8">
                  <h3 className="text-xs font-bold text-primary tracking-widest uppercase mb-4">
                    Milestone: Seed Close
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    $1M seed on $5M cap, closing Sep 30 2026. Funds allocated to hardware (35%), R&amp;D (25%), founding team (25%), operations (15%).
                  </p>
                </div>
                <div className="bg-surface-container-high p-8">
                  <h3 className="text-xs font-bold text-primary tracking-widest uppercase mb-4">
                    Milestone: First Skill
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    End-to-end capture → Isaac Sim training → Jetson deployment demonstrated on a single humanoid.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 2: Marketplace Launch */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8 order-2 md:order-1 space-y-12">
              <div className="relative w-full aspect-video overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="100 identical humanoid robots arranged in a grid inside NVIDIA Isaac Sim, each wrapped in an amber wireframe training bound"
                  src="/images/sim-parallel-army.webp"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-8 left-8 flex gap-2">
                  <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold tracking-widest uppercase">
                    Planned
                  </span>
                  <span className="px-3 py-1 bg-surface-container-highest/80 backdrop-blur text-white text-[10px] font-bold tracking-widest uppercase">
                    Q4 2026 – Q2 2027
                  </span>
                </div>
              </div>
              <div className="bg-surface-container-low p-12 flex flex-col items-center text-center">
                <span className="text-[10px] font-bold tracking-[0.5em] text-primary uppercase mb-6">
                  Training Leverage
                </span>
                <h3 className="text-4xl font-bold tracking-tighter mb-4 italic">
                  1,000 × 1 HR
                </h3>
                <p className="text-on-surface-variant max-w-lg text-sm">
                  1,000 simulated robots training in parallel. 1 hour of NVIDIA Omniverse runtime = 1,000 physical hours of human-derived practice.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 order-1 md:order-2 sticky top-40 h-fit">
              <div className="bg-surface-container-low p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                  <span className="text-6xl font-black text-primary/10">
                    02
                  </span>
                </div>
                <span className="text-primary font-bold text-xs tracking-widest uppercase mb-2 block">
                  Phase Two · Q4 2026
                </span>
                <h2 className="text-4xl font-bold tracking-tight mb-6">
                  Beta Marketplace
                </h2>
                <ul className="space-y-4 text-sm text-on-surface-variant font-medium">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    3–5 published skills (martial arts, chef, walking)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    First paying pilot partner (robot OEM)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    Expert royalty model live
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 3: Hardware Deployment */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4 sticky top-40 h-fit">
              <div className="bg-surface-container-low p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                  <span className="text-6xl font-black text-primary/10">
                    03
                  </span>
                </div>
                <span className="text-primary font-bold text-xs tracking-widest uppercase mb-2 block">
                  Phase Three · Q2–Q4 2027
                </span>
                <h2 className="text-4xl font-bold tracking-tight mb-6">
                  Public Launch &amp; Scale
                </h2>
                <ul className="space-y-4 text-sm text-on-surface-variant font-medium">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    Public marketplace (Q2 2027)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    Community-submitted skills (Q4 2027)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    Fleet-license pricing tier for enterprises
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-8 space-y-12">
              <div className="relative w-full aspect-video overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Three different humanoid robots from different OEMs receiving the same skill file from an overhead registry"
                  src="/images/vision-open-ecosystem.webp"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-8 right-8 text-right">
                  <span className="block text-primary font-bold tracking-widest uppercase text-xs">
                    Strategic Objective
                  </span>
                  <span className="block text-3xl font-bold tracking-tight text-white mt-1">
                    Default Skill Layer for Humanoids
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="bg-surface-container-high/50 p-6">
                  <span className="text-primary font-black text-2xl">$38B</span>
                  <span className="block text-[9px] font-bold tracking-widest uppercase text-on-surface-variant">
                    TAM by 2030
                  </span>
                </div>
                <div className="bg-surface-container-high/50 p-6">
                  <span className="text-primary font-black text-2xl">$15B</span>
                  <span className="block text-[9px] font-bold tracking-widest uppercase text-on-surface-variant">
                    SAM (Skill Layer)
                  </span>
                </div>
                <div className="bg-surface-container-high/50 p-6">
                  <span className="text-primary font-black text-2xl">$3B</span>
                  <span className="block text-[9px] font-bold tracking-widest uppercase text-on-surface-variant">
                    SOM (5yr)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scale & Future */}
      <section className="px-12 mt-64">
        <div className="max-w-7xl mx-auto border border-primary/20 bg-surface-container-low p-16 relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
          <div className="relative z-10">
            <span className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-8 block">
              Projected Outcome_2028+
            </span>
            <h2 className="text-6xl font-bold tracking-tighter mb-8">
              THE SKILL LAYER FOR ANY ROBOT
            </h2>
            <p className="text-on-surface-variant text-xl max-w-3xl leading-relaxed mb-12">
              By 2028, PanditaAI becomes the default open catalog of human-derived skills for NVIDIA-powered humanoids — the neutral layer Figure, Boston Dynamics, and Unitree don&apos;t build themselves.
            </p>
            <div className="flex gap-8">
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-outline">
                  Business Model
                </span>
                <span className="text-2xl font-bold text-white mt-2">
                  Per-use + Platform fee
                </span>
              </div>
              <div className="w-[1px] h-12 bg-outline-variant/30" />
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-outline">
                  Market Position
                </span>
                <span className="text-2xl font-bold text-white mt-2">
                  Open Skill Standard
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
