"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-40 brightness-50"
            alt="Cinematic shot of a robotic arm performing high-precision movements in a high-tech lab with glowing amber lighting and orange sparks"
            src="/images/hero-robotics-lab.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-surface-container-highest px-4 py-1 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold font-headline text-primary">
              Live Training Systems Active
            </span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black font-headline tracking-tighter leading-none mb-6 text-white uppercase italic">
            The Kaushal<br />(Skill) <span className="text-primary not-italic">Marketplace</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-on-surface-variant font-light tracking-wide mb-12">
            The open marketplace where physical AI skills trained in NVIDIA Isaac Sim are traded,
            deployed, and executed on robots. PanditaAI is expertise, delivered.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href="/platform"
              className="w-full md:w-auto bg-primary-container text-on-primary-fixed px-10 py-5 font-black uppercase tracking-[0.2em] text-sm hover:translate-y-[-2px] transition-transform"
            >
              Explore The Marketplace
            </Link>
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest font-headline text-white/50">
              <span>V. 0.8.4 Alpha</span>
              <span className="w-1 h-1 bg-outline-variant rounded-full" />
              <span>NVIDIA Inception Member</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-12 hidden md:flex flex-col gap-4">
          <div className="h-24 w-[1px] bg-gradient-to-t from-primary to-transparent" />
          <span
            className="text-[10px] tracking-widest uppercase text-primary/70 rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            Telemetry Scroll
          </span>
        </div>
      </header>

      <section className="bg-primary-container py-4 overflow-hidden whitespace-nowrap border-y border-primary">
        <div className="flex animate-marquee items-center gap-12">
          <span className="text-on-primary-fixed font-black text-sm uppercase tracking-[0.4em] font-headline">
            Seed Round Open // $2.5M Target // Physical Skills Marketplace // Deployment Ready
          </span>
          <span className="text-on-primary-fixed font-black text-sm uppercase tracking-[0.4em] font-headline">
            Seed Round Open // $2.5M Target // Physical Skills Marketplace // Deployment Ready
          </span>
          <span className="text-on-primary-fixed font-black text-sm uppercase tracking-[0.4em] whitespace-nowrap font-headline">
            Seed Round Open // $2.5M Target // Physical Skills Marketplace // Deployment Ready
          </span>
        </div>
      </section>

      <section className="py-32 bg-surface-container-low px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black font-headline uppercase tracking-tight mb-8">
                The End of <br /> <span className="text-primary">Hard-Coded</span> <br /> Robotics.
              </h2>
              <p className="text-on-surface-variant text-lg mb-12 leading-relaxed">
                Robots today are brittle. PanditaAI replaces rigid code with <b>Downloadable Physical Skills</b>. Each physical skill is a
                pre-trained neural module optimized for specific physical tasks, from warehouse picking to surgical
                assistance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-surface-container-high p-6 border-l-2 border-primary">
                  <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Sim-To-Real</h4>
                  <p className="text-xs text-on-surface-variant">
                    Zero-shot transfer from Isaac Sim to physical hardware.
                  </p>
                </div>
                <div className="bg-surface-container-high p-6 border-l-2 border-outline-variant">
                  <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">Immutable Packaging</h4>
                  <p className="text-xs text-on-surface-variant">
                    Containerized skills ready for instant edge deployment.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-surface-container-highest border border-outline-variant/10 flex items-center justify-center p-12">
                <img
                  className="w-full h-full object-contain mix-blend-screen"
                  alt="Highly detailed 3D blueprint of a futuristic bionic hand with orange holographic data points floating around it"
                  src="/images/bionic-hand.webp"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-primary-container p-4 text-on-primary-fixed font-black text-[10px] uppercase tracking-widest">
                Skill: Precision_Grip.v4
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-surface">
        <div className="container mx-auto">
          <div className="mb-20">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.5em] mb-4 block">
              Operation Flow
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-headline uppercase">The Core Pipeline</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-outline-variant/20">
            <div className="bg-surface p-8 group hover:bg-surface-container-low transition-colors duration-500">
              <div className="text-primary text-4xl font-black mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                01
              </div>
              <h3 className="text-xl font-bold font-headline uppercase mb-4">Train</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Massively parallel training in NVIDIA Isaac Sim environments with synthetic data generation.
              </p>
            </div>
            <div className="bg-surface p-8 group hover:bg-surface-container-low transition-colors duration-500">
              <div className="text-primary text-4xl font-black mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                02
              </div>
              <h3 className="text-xl font-bold font-headline uppercase mb-4">Validate</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                High-fidelity stress testing against randomized physics parameters to ensure robustness.
              </p>
            </div>
            <div className="bg-surface p-8 group hover:bg-surface-container-low transition-colors duration-500">
              <div className="text-primary text-4xl font-black mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                03
              </div>
              <h3 className="text-xl font-bold font-headline uppercase mb-4">Package</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Optimization for TensorRT and packaging into our proprietary SKL format for edge runtime.
              </p>
            </div>
            <div className="bg-surface p-8 group hover:bg-surface-container-low transition-colors duration-500">
              <div className="text-primary text-4xl font-black mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                04
              </div>
              <h3 className="text-xl font-bold font-headline uppercase mb-4">Publish</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                List on the PanditaAI Marketplace with verified performance benchmarks and hardware requirements.
              </p>
            </div>
            <div className="bg-surface p-8 group hover:bg-surface-container-low transition-colors duration-500">
              <div className="text-primary text-4xl font-black mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                05
              </div>
              <h3 className="text-xl font-bold font-headline uppercase mb-4">Deploy</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Over-the-air deployment to Jetson-powered robots with instant hot-swapping of skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-surface-container-low relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-video bg-surface-container-high border border-outline-variant/30 p-4 flex flex-col justify-end">
                  <span className="text-[10px] font-bold text-primary uppercase mb-1">Compute Hub</span>
                  <span className="text-sm font-bold uppercase font-headline">NVIDIA Jetson Orin</span>
                </div>
                <div className="aspect-video bg-surface-container-high border border-outline-variant/30 p-4 flex flex-col justify-end">
                  <span className="text-[10px] font-bold text-primary uppercase mb-1">Industrial Edge</span>
                  <span className="text-sm font-bold uppercase font-headline">NVIDIA IGX Platform</span>
                </div>
                <div className="col-span-2 aspect-[21/9] bg-surface-container-highest flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover grayscale opacity-50"
                    alt="Top-down view of a sophisticated green circuit board with glowing copper paths and microchips under neon orange accent light"
                    src="/images/jetson-orin-lineup.webp"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-black font-headline uppercase mb-8">
                Hardware Native Architecture
              </h2>
              <p className="text-on-surface-variant mb-8">
                Built specifically for the NVIDIA Edge stack. Our runtime leverages CUDA and TensorRT cores to achieve
                sub-millisecond latency in perception-to-action loops.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  Optimized for Jetson Orin AGX / NX
                </li>
                <li className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  Real-time ROS2 Integration
                </li>
                <li className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  IGX Functional Safety Compliance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-primary font-bold text-xs uppercase tracking-[0.5em] mb-4 block">The Context</span>
              <h2 className="text-5xl font-black font-headline uppercase italic">
                Embodied AI <br /> is the Next Frontier
              </h2>
            </div>
            <div className="text-right">
              <div className="text-6xl font-black font-headline text-white/10 mb-2">2025</div>
              <p className="text-xs uppercase tracking-widest font-bold text-primary">
                The Year of Simulation-to-Real
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-high p-10 border-t border-primary/20 hover:border-primary transition-all group">
              <span
                className="material-symbols-outlined text-4xl text-primary mb-8"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                precision_manufacturing
              </span>
              <h3 className="text-2xl font-bold font-headline uppercase mb-4">Scalability</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Traditional robotics companies spend 80% of their time on custom code. We reduce development cycles from
                months to days through modular skills.
              </p>
            </div>
            <div className="bg-surface-container-high p-10 border-t border-primary/20 hover:border-primary transition-all group">
              <span
                className="material-symbols-outlined text-4xl text-primary mb-8"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                hub
              </span>
              <h3 className="text-2xl font-bold font-headline uppercase mb-4">Interoperability</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Universal skill format allows a single trained behavior to work across diverse hardware form factors with
                minimal fine-tuning.
              </p>
            </div>
            <div className="bg-surface-container-high p-10 border-t border-primary/20 hover:border-primary transition-all group">
              <span
                className="material-symbols-outlined text-4xl text-primary mb-8"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                monitoring
              </span>
              <h3 className="text-2xl font-bold font-headline uppercase mb-4">Data Dominance</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Our marketplace creates a flywheel of synthetic and real-world data, continuously refining the precision
                of the entire skill catalog.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 px-6 bg-primary-container relative">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="text-[20rem] font-black font-headline tracking-tighter uppercase whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
            INVESTOR
          </div>
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-6xl md:text-8xl font-black font-headline uppercase text-on-primary-fixed mb-12 italic leading-none">
            Fuel the Physical <br /> Revolution.
          </h2>
          <p className="max-w-2xl mx-auto text-on-primary-fixed/80 text-xl font-medium mb-16">
            PanditaAI is raising a Seed round to scale the physical skills marketplace and launch our simulation-as-a-service backend.
            Join the leaderboard of Embodied AI infrastructure.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              href="/pitch-deck"
              className="bg-on-primary-fixed text-primary px-12 py-6 font-black uppercase tracking-[0.3em] text-lg"
            >
              Access Pitch Deck
            </Link>
            <Link
              href="/investor-connect"
              className="border-2 border-on-primary-fixed text-on-primary-fixed px-12 py-6 font-black uppercase tracking-[0.3em] text-lg hover:bg-on-primary-fixed hover:text-primary-container transition-all"
            >
              Schedule Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
