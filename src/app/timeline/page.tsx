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
              System Path_2024-2026
            </span>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-8">
              EXECUTION
              <br />
              <span className="text-outline-variant/30">LIFECYCLE</span>
            </h1>
            <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed">
              A definitive roadmap for Physical AI deployment. From neural
              architecture simulation to global hardware integration, we are
              building the substrate of modern industry.
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
                  Phase One
                </span>
                <h2 className="text-4xl font-bold tracking-tight mb-6">
                  Foundational Stack
                </h2>
                <ul className="space-y-4 text-sm text-on-surface-variant font-medium">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    Neural Sim-Engine V1.0
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    Proprietary Dataset Mining
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    Latency Benchmark Optimization
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-8 space-y-12">
              <div className="relative w-full aspect-video overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Close-up of a high-tech motherboard with glowing blue and orange circuits in a dark laboratory setting"
                  src="/images/timeline-motherboard.webp"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-8 left-8 flex gap-2">
                  <span className="px-3 py-1 bg-primary text-on-primary-fixed text-[10px] font-bold tracking-widest uppercase">
                    Completed
                  </span>
                  <span className="px-3 py-1 bg-surface-container-highest/80 backdrop-blur text-white text-[10px] font-bold tracking-widest uppercase">
                    Q1 2024
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-surface-container-high p-8">
                  <h3 className="text-xs font-bold text-primary tracking-widest uppercase mb-4">
                    Milestone: Seed Close
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Secured $4.2M in pre-seed funding from frontier-tech
                    specialized partners. Core engineering team stabilized.
                  </p>
                </div>
                <div className="bg-surface-container-high p-8">
                  <h3 className="text-xs font-bold text-primary tracking-widest uppercase mb-4">
                    Milestone: Alpha Test
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Achieved sub-10ms inference speeds in simulated environments
                    for multi-modal robotic control.
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
                  alt="High-resolution digital interface showing complex data nodes and neural network pathways in glowing orange and white"
                  src="/images/timeline-neural.webp"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-8 left-8 flex gap-2">
                  <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold tracking-widest uppercase">
                    In Development
                  </span>
                  <span className="px-3 py-1 bg-surface-container-highest/80 backdrop-blur text-white text-[10px] font-bold tracking-widest uppercase">
                    Q3 2024 - Q1 2025
                  </span>
                </div>
              </div>
              <div className="bg-surface-container-low p-12 flex flex-col items-center text-center">
                <span className="text-[10px] font-bold tracking-[0.5em] text-primary uppercase mb-6">
                  Simulation Benchmark
                </span>
                <h3 className="text-4xl font-bold tracking-tighter mb-4 italic">
                  1,000,000+ OPS
                </h3>
                <p className="text-on-surface-variant max-w-lg text-sm">
                  Targeting massive parallel training within our virtual
                  substrate to accelerate robot learning by 100x compared to
                  real-world data collection.
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
                  Phase Two
                </span>
                <h2 className="text-4xl font-bold tracking-tight mb-6">
                  Marketplace Launch
                </h2>
                <ul className="space-y-4 text-sm text-on-surface-variant font-medium">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    Model Weights Distribution Hub
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    Developer SDK Beta Release
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    Simulation-to-Reality Bridge
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
                  Phase Three
                </span>
                <h2 className="text-4xl font-bold tracking-tight mb-6">
                  Hardware Deployment
                </h2>
                <ul className="space-y-4 text-sm text-on-surface-variant font-medium">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    First-Party Edge Compute Node
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    Logistics Fleet Integration
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    Zero-Config Calibration Engine
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-8 space-y-12">
              <div className="relative w-full aspect-video overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Industrial robotic arm working on a sophisticated carbon fiber structure with bright spotlighting and sparks"
                  src="/images/timeline-industrial.webp"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-8 right-8 text-right">
                  <span className="block text-primary font-bold tracking-widest uppercase text-xs">
                    Strategic Objective
                  </span>
                  <span className="block text-3xl font-bold tracking-tight text-white mt-1">
                    Autonomous Ground Control
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="bg-surface-container-high/50 p-6">
                  <span className="text-primary font-black text-2xl">48</span>
                  <span className="block text-[9px] font-bold tracking-widest uppercase text-on-surface-variant">
                    Global Hubs
                  </span>
                </div>
                <div className="bg-surface-container-high/50 p-6">
                  <span className="text-primary font-black text-2xl">500k</span>
                  <span className="block text-[9px] font-bold tracking-widest uppercase text-on-surface-variant">
                    Connected Units
                  </span>
                </div>
                <div className="bg-surface-container-high/50 p-6">
                  <span className="text-primary font-black text-2xl">0.4s</span>
                  <span className="block text-[9px] font-bold tracking-widest uppercase text-on-surface-variant">
                    Avg. Latency
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
              Projected Outcome_2026+
            </span>
            <h2 className="text-6xl font-bold tracking-tighter mb-8">
              GLOBAL PHYSICAL SCALE
            </h2>
            <p className="text-on-surface-variant text-xl max-w-3xl leading-relaxed mb-12">
              By EOY 2026, PanditaAI will function as the orchestration layer
              for a decentralized physical skill trading network. We
              transition from a development platform to the global marketplace for
              physical AI skills.
            </p>
            <div className="flex gap-8">
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-outline">
                  Target Outcome
                </span>
                <span className="text-2xl font-bold text-white mt-2">
                  Industrial Dominance
                </span>
              </div>
              <div className="w-[1px] h-12 bg-outline-variant/30" />
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-outline">
                  Market Position
                </span>
                <span className="text-2xl font-bold text-white mt-2">
                  Standard Protocol
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
