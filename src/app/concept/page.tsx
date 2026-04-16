"use client";

import Link from "next/link";

export default function ConceptPage() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col justify-center px-12 pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="A cinematic wide shot of a futuristic robotics lab with dark atmospheric lighting, orange laser grids, and mechanical arms in the background."
            className="w-full h-full object-cover opacity-20 grayscale brightness-50"
            src="/images/concept-hero.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-5xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[2px] bg-primary" />
            <span className="font-headline tracking-[0.3em] uppercase text-primary text-sm font-bold">
              Category Evolution
            </span>
          </div>
          <h1 className="font-headline text-7xl md:text-9xl font-bold leading-tight tracking-tighter mb-8">
            PHYSICAL <br />
            <span className="text-primary">AI SKILLS.</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
            We are transitioning from static automation to dynamic physical
            intelligence. PanditaAI defines the blueprint for modular,
            transferable, and deployable Kaushals — robotic expertise you can trade.
          </p>
        </div>
        <div className="absolute bottom-12 right-12 flex flex-col items-end gap-2">
          <div className="text-primary font-headline text-xs tracking-widest uppercase">
            System Status
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-headline text-sm font-bold tracking-widest">
              ORBITAL COMMAND ACTIVE
            </span>
          </div>
        </div>
      </header>

      {/* The Fragmentation Crisis */}
      <section className="py-32 px-12 bg-surface-container-low">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <h2 className="font-headline text-5xl font-bold tracking-tight">
              THE FRAGMENTATION <br />
              CRISIS.
            </h2>
            <div className="space-y-6 text-on-surface-variant font-body leading-relaxed text-lg">
              <p>
                Current robotics development is trapped in &quot;silos of
                specificity.&quot; A skill learned by a Boston Dynamics Spot
                cannot be easily shared with an Agility Robotics Digit. Code is
                proprietary, environments are closed, and learning is
                non-transferable.
              </p>
              <p>
                This fragmentation forces every hardware manufacturer to
                reinvent the wheel, slowing down the global adoption of
                general-purpose robotics.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="p-8 bg-surface border-l-4 border-error/50">
                <div className="text-error font-headline text-3xl font-bold mb-2">
                  94%
                </div>
                <div className="text-xs font-headline uppercase tracking-widest text-on-surface-variant">
                  Proprietary Lock-in
                </div>
              </div>
              <div className="p-8 bg-surface border-l-4 border-error/50">
                <div className="text-error font-headline text-3xl font-bold mb-2">
                  18mo
                </div>
                <div className="text-xs font-headline uppercase tracking-widest text-on-surface-variant">
                  Avg Skill Port Time
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img
              alt="Abstract macro shot of futuristic electronic circuits with glowing orange lines and sharp geometric shadows to represent fragmented technology."
              className="w-full grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
              src="/images/fragmented-circuits.webp"
            />
            <div className="absolute top-8 right-8 p-4 bg-surface-container-high/80 backdrop-blur-md">
              <span className="material-symbols-outlined text-primary mb-2 block">
                warning
              </span>
              <div className="font-headline text-xs tracking-widest uppercase">
                System Inefficiency
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is a Physical AI Skill? */}
      <section className="py-32 px-12">
        <div className="text-center mb-24">
          <h2 className="font-headline text-5xl font-bold tracking-tight mb-6">
            WHAT IS A KAUSHAL?
          </h2>
          <div className="w-24 h-[2px] bg-primary mx-auto mb-12" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <div className="bg-surface-container-low p-12 border border-outline-variant/10 hover:bg-surface-container-high transition-colors">
            <div className="text-primary mb-8">
              <span className="material-symbols-outlined text-5xl">
                psychology
              </span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4 tracking-wide uppercase">
              NEURAL WEIGHTS
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              The distilled intelligence trained through millions of
              reinforcement learning iterations within the Isaac Sim universe.
            </p>
          </div>
          <div className="bg-surface-container-low p-12 border border-outline-variant/10 hover:bg-surface-container-high transition-colors">
            <div className="text-primary mb-8">
              <span className="material-symbols-outlined text-5xl">
                settings_input_component
              </span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4 tracking-wide uppercase">
              CONTROL STACK
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              The hardware-agnostic API that maps neural intentions to
              high-fidelity motor controls and sensor feedback loops.
            </p>
          </div>
          <div className="bg-surface-container-low p-12 border border-outline-variant/10 hover:bg-surface-container-high transition-colors">
            <div className="text-primary mb-8">
              <span className="material-symbols-outlined text-5xl">
                token
              </span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4 tracking-wide uppercase">
              ENV METADATA
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              The defining parameters of physical constraints, friction
              coefficients, and spatial limits the skill was optimized for.
            </p>
          </div>
        </div>
      </section>

      {/* The Training Forge - Isaac Sim Bento Grid */}
      <section className="py-32 px-12 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">
              THE TRAINING FORGE.
            </h2>
            <p className="text-on-surface-variant font-body">
              Leveraging NVIDIA Isaac Sim for hyper-accelerated learning.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6 h-auto md:h-[600px]">
            {/* Large Feature */}
            <div className="col-span-12 md:col-span-8 bg-surface-container-low relative overflow-hidden flex flex-col justify-end p-12">
              <img
                alt="Digital twin representation of a robotic arm in a simulated blue-tinted warehouse environment with data overlays."
                className="absolute inset-0 w-full h-full object-cover opacity-30 hover:scale-105 transition-transform duration-[2000ms]"
                src="/images/sim-warehouse.webp"
              />
              <div className="relative z-10">
                <div className="font-headline text-primary text-xs tracking-widest uppercase mb-4">
                  Phase 01
                </div>
                <h3 className="font-headline text-4xl font-bold mb-4 uppercase">
                  Sim-First Synthesis
                </h3>
                <p className="text-on-surface-variant max-w-lg">
                  Millions of parallel robot instances learning a single task
                  across 1,000+ varying environmental permutations in minutes.
                </p>
              </div>
            </div>
            {/* Small Feature 1 */}
            <div className="col-span-12 md:col-span-4 bg-surface-container-high p-10 flex flex-col justify-between">
              <span className="material-symbols-outlined text-primary text-4xl">
                view_in_ar
              </span>
              <div>
                <div className="font-headline text-primary text-xs tracking-widest uppercase mb-2">
                  Phase 02
                </div>
                <h3 className="font-headline text-2xl font-bold mb-2 uppercase">
                  PhysX Validation
                </h3>
                <p className="text-on-surface-variant text-sm">
                  Stress-testing the skill against extreme physical scenarios to
                  ensure safety and reliability.
                </p>
              </div>
            </div>
            {/* Small Feature 2 */}
            <div className="col-span-12 md:col-span-4 bg-surface-container-high p-10 flex flex-col justify-between">
              <span className="material-symbols-outlined text-primary text-4xl">
                data_thresholding
              </span>
              <div>
                <div className="font-headline text-primary text-xs tracking-widest uppercase mb-2">
                  Phase 03
                </div>
                <h3 className="font-headline text-2xl font-bold mb-2 uppercase">
                  Telemetry Distillation
                </h3>
                <p className="text-on-surface-variant text-sm">
                  Compressing multi-terabyte training runs into lightweight,
                  executable AI skill modules.
                </p>
              </div>
            </div>
            {/* Medium Feature */}
            <div className="col-span-12 md:col-span-8 bg-primary/90 flex flex-col justify-center p-12">
              <h3 className="font-headline text-on-primary-fixed text-4xl font-black mb-4 uppercase italic">
                Zero-Shot Deployment
              </h3>
              <p className="text-on-primary-fixed/80 text-lg leading-tight">
                The ultimate goal: A skill that works on hardware the first time
                it&apos;s turned on, because the simulation was perfect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sim-to-Real Transfer */}
      <section className="py-32 px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative p-8 border border-outline-variant/20 bg-surface-container-low">
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center border-b border-outline-variant/20 pb-4">
                  <span className="font-headline text-xs text-primary">
                    LAYER_01: GAIT_NEURAL_NET
                  </span>
                  <span className="text-[10px] text-white/30 font-mono">
                    HASH: 77-AX-09
                  </span>
                </div>
                <div className="h-48 flex items-end gap-2 px-4">
                  <div className="flex-1 bg-primary/20 h-[60%]" />
                  <div className="flex-1 bg-primary/40 h-[80%]" />
                  <div className="flex-1 bg-primary h-[40%]" />
                  <div className="flex-1 bg-primary/60 h-[90%]" />
                  <div className="flex-1 bg-primary/30 h-[55%]" />
                  <div className="flex-1 bg-primary/50 h-[75%]" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-surface-container-highest text-xs font-mono text-white/50">
                    SENSOR_FUSION_SYNC: ACTIVE
                  </div>
                  <div className="p-4 bg-surface-container-highest text-xs font-mono text-white/50">
                    LATENCY_COMP: 2ms
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-headline text-5xl font-bold tracking-tight mb-8">
              SIM-TO-REAL <br />
              TRANSFER.
            </h2>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
              Bridging the &quot;Reality Gap&quot; is our core technical
              achievement. PanditaAI&apos;s adapter layers use Domain
              Randomization to ensure that skills trained in perfect silicon
              math survive the messy noise of the real world.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-primary font-headline font-bold">
                <span className="material-symbols-outlined">check_circle</span>
                <span className="uppercase tracking-widest text-sm">
                  Dynamic Friction Compensation
                </span>
              </li>
              <li className="flex items-center gap-4 text-primary font-headline font-bold">
                <span className="material-symbols-outlined">check_circle</span>
                <span className="uppercase tracking-widest text-sm">
                  Visual Noise Masking
                </span>
              </li>
              <li className="flex items-center gap-4 text-primary font-headline font-bold">
                <span className="material-symbols-outlined">check_circle</span>
                <span className="uppercase tracking-widest text-sm">
                  Actuator Lag Modeling
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Skill Marketplace */}
      <section className="py-32 px-12 bg-surface-container-low border-y border-outline-variant/10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="font-headline text-5xl font-bold tracking-tight uppercase mb-6 italic">
            The Kaushal Marketplace.
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            A global repository of physical intelligence. Developers build and
            train; operators purchase and deploy.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* Step 1 */}
          <div className="flex-1 max-w-sm p-1 bg-gradient-to-br from-primary/30 to-transparent">
            <div className="bg-surface h-full p-10">
              <div className="font-headline text-6xl font-black text-outline-variant/20 mb-4">
                01
              </div>
              <h4 className="font-headline text-xl font-bold mb-4 uppercase">
                Train &amp; Package
              </h4>
              <p className="text-on-surface-variant text-sm">
                Upload your Isaac Sim environment and agent weights to the
                PanditaAI compiler.
              </p>
            </div>
          </div>
          {/* Arrow */}
          <div className="hidden md:flex items-center text-primary/20">
            <span className="material-symbols-outlined text-4xl">
              arrow_forward
            </span>
          </div>
          {/* Step 2 */}
          <div className="flex-1 max-w-sm p-1 bg-gradient-to-br from-primary/30 to-transparent">
            <div className="bg-surface h-full p-10">
              <div className="font-headline text-6xl font-black text-outline-variant/20 mb-4">
                02
              </div>
              <h4 className="font-headline text-xl font-bold mb-4 uppercase">
                Benchmark
              </h4>
              <p className="text-on-surface-variant text-sm">
                We run your Kaushal against the &quot;PanditaAI Standard&quot; to
                assign a reliability rating.
              </p>
            </div>
          </div>
          {/* Arrow */}
          <div className="hidden md:flex items-center text-primary/20">
            <span className="material-symbols-outlined text-4xl">
              arrow_forward
            </span>
          </div>
          {/* Step 3 */}
          <div className="flex-1 max-w-sm p-1 bg-gradient-to-br from-primary/30 to-transparent">
            <div className="bg-surface h-full p-10">
              <div className="font-headline text-6xl font-black text-outline-variant/20 mb-4">
                03
              </div>
              <h4 className="font-headline text-xl font-bold mb-4 uppercase">
                Deploy
              </h4>
              <p className="text-on-surface-variant text-sm">
                End-users license the skill for specific hardware fleets with
                one-click injection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Build the Future of Motion CTA */}
      <section className="py-40 px-12 text-center">
        <h2 className="font-headline text-6xl md:text-8xl font-black tracking-tighter mb-12 uppercase italic">
          BUILD THE FUTURE <br />
          OF MOTION.
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="bg-primary-container text-on-primary-fixed font-headline font-bold uppercase text-lg px-12 py-5 tracking-[0.2em] hover:scale-105 duration-300">
            Start Training
          </button>
          <button className="border-2 border-outline-variant/30 text-white font-headline font-bold uppercase text-lg px-12 py-5 tracking-[0.2em] hover:bg-white/5 duration-300">
            Read the Whitepaper
          </button>
        </div>
      </section>
    </>
  );
}
