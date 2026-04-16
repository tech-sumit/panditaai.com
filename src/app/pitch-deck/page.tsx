"use client";

import Link from "next/link";

export default function PitchDeckPage() {
  return (
    <div className="relative pt-24">
      {/* Hero Section: The Hook */}
      <section className="min-h-screen flex flex-col justify-center px-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
          <img
            className="w-full h-full object-cover grayscale contrast-125"
            alt="Cinematic shot of a humanoid robotic hand interacting with a neural network holographic interface in a dark, high-tech laboratory setting."
            src="/images/pitch-hero.webp"
          />
        </div>
        <div className="relative z-10 max-w-5xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-primary"></span>
            <span className="font-label uppercase tracking-[0.3em] text-primary text-sm font-bold">Series A Pitch Deck</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-headline font-black leading-tight tracking-tighter mb-8 text-white">
            PHYSICAL <br /> <span className="text-primary">AUTONOMY</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed font-light mb-12">
            Bridging the gap between Large Language Models and physical kinetic intelligence. We are building the nervous system for the next generation of industrial robotics.
          </p>
          <div className="flex gap-6">
            <div className="p-6 bg-surface-container-low border-l-4 border-primary">
              <div className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-1">Target Raise</div>
              <div className="text-3xl font-headline font-bold text-white">$45.0M</div>
            </div>
            <div className="p-6 bg-surface-container-low border-l-4 border-outline-variant">
              <div className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-1">Valuation Cap</div>
              <div className="text-3xl font-headline font-bold text-white">$280M</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem: The Friction */}
      <section className="py-32 px-12 bg-surface-container-low">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <h2 className="text-5xl font-headline font-bold text-white mb-8 tracking-tight">THE KINETIC <br />BOTTLENECK</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              AI has mastered pixels and text, but it remains trapped in digital silos. Current physical automation is rigid, pre-programmed, and brittle.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary mt-1">error</span>
                <div>
                  <h4 className="font-headline font-bold text-white uppercase text-sm tracking-widest">Lack of Adaptation</h4>
                  <p className="text-sm text-on-surface-variant">Robots cannot handle unstructured environments without custom code.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary mt-1">error</span>
                <div>
                  <h4 className="font-headline font-bold text-white uppercase text-sm tracking-widest">High Latency</h4>
                  <p className="text-sm text-on-surface-variant">Cloud-dependent AI fails in high-stakes physical maneuvers.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 gap-4">
            <div className="bg-surface-container-high p-8 flex flex-col justify-end aspect-square">
              <div className="text-6xl font-headline font-black text-primary mb-4">92%</div>
              <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Manual Labor in Unstructured Logistics</p>
            </div>
            <div className="bg-surface p-8 border border-outline-variant/10 flex flex-col justify-end aspect-square">
              <div className="text-6xl font-headline font-black text-white mb-4">$4.2T</div>
              <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Global Loss Due to Supply Chain Friction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform: The Architecture */}
      <section className="py-32 px-12 bg-surface">
        <div className="text-center mb-24">
          <h2 className="text-xs font-label uppercase tracking-[0.5em] text-primary font-bold mb-4">The Solution</h2>
          <h3 className="text-5xl md:text-6xl font-headline font-black text-white uppercase">NEURAL KINETIC ENGINE</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <div className="bg-surface-container-low p-12 hover:bg-surface-container-high transition-colors group">
            <span className="material-symbols-outlined text-4xl text-primary mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>sensors</span>
            <h4 className="text-2xl font-headline font-bold text-white mb-4 uppercase">Edge Perception</h4>
            <p className="text-on-surface-variant leading-relaxed">
              Proprietary sensor fusion mapping reality in 20ms latency. No cloud, just raw silicon speed.
            </p>
          </div>
          <div className="bg-surface-container-low p-12 hover:bg-surface-container-high transition-colors group border-x border-outline-variant/10">
            <span className="material-symbols-outlined text-4xl text-primary mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
            <h4 className="text-2xl font-headline font-bold text-white mb-4 uppercase">Kinetic Transformer</h4>
            <p className="text-on-surface-variant leading-relaxed">
              A foundational model trained on physical movement, translating intent into precision torque.
            </p>
          </div>
          <div className="bg-surface-container-low p-12 hover:bg-surface-container-high transition-colors group">
            <span className="material-symbols-outlined text-4xl text-primary mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>settings_input_antenna</span>
            <h4 className="text-2xl font-headline font-bold text-white mb-4 uppercase">Unified API</h4>
            <p className="text-on-surface-variant leading-relaxed">
              Deploy complex physical tasks to any hardware substrate with a single line of Python.
            </p>
          </div>
        </div>
      </section>

      {/* Product: Visual Proof */}
      <section className="py-32 px-12">
        <div className="bg-surface-container-highest flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-16">
            <div className="inline-block bg-primary text-on-primary-fixed px-3 py-1 text-xs font-headline font-bold uppercase tracking-widest mb-6">Live Beta</div>
            <h2 className="text-5xl font-headline font-black text-white mb-8 tracking-tighter uppercase">PANDITAAI OS v1.0</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-primary font-headline font-black">01</span>
                <span className="text-white font-medium">Real-time object manipulation in high-noise environments.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-headline font-black">02</span>
                <span className="text-white font-medium">Autonomous pathfinding with zero-shot learning.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-headline font-black">03</span>
                <span className="text-white font-medium">Native integration with legacy industrial hardware.</span>
              </li>
            </ul>
            <button className="mt-12 border border-primary text-primary px-10 py-4 font-headline font-bold text-sm uppercase tracking-[0.2em] hover:bg-primary hover:text-on-primary-fixed transition-all">Request Demo Access</button>
          </div>
          <div className="md:w-1/2 h-full min-h-[500px] relative">
            <img
              className="w-full h-full object-cover grayscale"
              alt="Detailed close-up of a sophisticated robotic arm with carbon fiber textures performing a delicate precision assembly task in a dimly lit factory."
              src="/images/pitch-robotic-arm.webp"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          </div>
        </div>
      </section>

      {/* Team: The Operators */}
      <section className="py-32 px-12 bg-surface-container-low">
        <h2 className="text-xs font-label uppercase tracking-[0.5em] text-primary font-bold mb-16 text-center">Executive Command</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="group">
            <div className="aspect-square bg-surface mb-6 relative overflow-hidden">
              <img
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                alt="Professional headshot of a visionary male CEO with a tech-background, wearing a dark minimal outfit, studio lighting with high contrast."
                src="/images/team-ceo.webp"
              />
            </div>
            <h4 className="text-xl font-headline font-bold text-white uppercase">Dr. Aryan Kaushal</h4>
            <p className="text-xs font-label text-primary uppercase tracking-widest mb-2">CEO &amp; Founder</p>
            <p className="text-sm text-on-surface-variant font-light">Ex-SpaceX, PhD Robotics MIT. Architect of Mars-Rover kinetic systems.</p>
          </div>
          <div className="group">
            <div className="aspect-square bg-surface mb-6 relative overflow-hidden">
              <img
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                alt="Portrait of a female CTO, technical lead, wearing glasses and a simple black sweater, confident posture, neutral cinematic background."
                src="/images/team-cto.webp"
              />
            </div>
            <h4 className="text-xl font-headline font-bold text-white uppercase">Elena Vance</h4>
            <p className="text-xs font-label text-primary uppercase tracking-widest mb-2">Chief of Engineering</p>
            <p className="text-sm text-on-surface-variant font-light">Lead DeepMind Vision Team. Author of &apos;The Physical Transformer&apos;.</p>
          </div>
          <div className="group">
            <div className="aspect-square bg-surface mb-6 relative overflow-hidden">
              <img
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                alt="Portrait of a male COO, business strategist, sharp suit, modern office background with soft bokeh, professional and focused."
                src="/images/team-coo.webp"
              />
            </div>
            <h4 className="text-xl font-headline font-bold text-white uppercase">Marcus Thorne</h4>
            <p className="text-xs font-label text-primary uppercase tracking-widest mb-2">Chief Operations</p>
            <p className="text-sm text-on-surface-variant font-light">Former VP Operations Tesla. Scaled Giga Nevada from ground up.</p>
          </div>
          <div className="group">
            <div className="aspect-square bg-surface mb-6 relative overflow-hidden">
              <img
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                alt="Portrait of a female AI Research lead, minimal modern attire, bright eyes, intelligent expression, cinematic lighting."
                src="/images/team-ai.webp"
              />
            </div>
            <h4 className="text-xl font-headline font-bold text-white uppercase">Sarah Chen</h4>
            <p className="text-xs font-label text-primary uppercase tracking-widest mb-2">Head of AI</p>
            <p className="text-sm text-on-surface-variant font-light">Stanford AI Lab. Specialized in Reinforcement Learning for Kinetics.</p>
          </div>
        </div>
      </section>

      {/* The Raise: Transactional Data */}
      <section className="py-32 px-12 relative">
        <div className="max-w-4xl mx-auto border border-primary/20 bg-surface-container-high p-16">
          <div className="flex justify-between items-start mb-16">
            <div>
              <h2 className="text-4xl font-headline font-black text-white uppercase tracking-tighter mb-2">The Raise</h2>
              <p className="text-on-surface-variant text-sm font-label tracking-widest uppercase">Series A | Q4 2024</p>
            </div>
            <div className="text-right">
              <div className="text-6xl font-headline font-black text-primary">$45M</div>
              <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Allocated Total</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h4 className="text-xs font-label uppercase tracking-widest text-primary mb-4">Use of Funds</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-white font-medium uppercase text-sm">R&amp;D &amp; Compute</span>
                  <span className="text-on-surface-variant text-xs">40%</span>
                </div>
                <div className="w-full h-1 bg-surface-variant">
                  <div className="bg-primary h-full w-[40%]"></div>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-white font-medium uppercase text-sm">GTM &amp; Sales</span>
                  <span className="text-on-surface-variant text-xs">30%</span>
                </div>
                <div className="w-full h-1 bg-surface-variant">
                  <div className="bg-primary h-full w-[30%]"></div>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-white font-medium uppercase text-sm">Manufacturing</span>
                  <span className="text-on-surface-variant text-xs">20%</span>
                </div>
                <div className="w-full h-1 bg-surface-variant">
                  <div className="bg-primary h-full w-[20%]"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-on-surface-variant text-sm italic mb-6 leading-relaxed">
                &ldquo;PanditaAI is not just building robots; they are building the marketplace for physical skills — the tradeable abilities that allow robots to master the physical universe. This is the last frontier of AI.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-container"></div>
                <div className="text-xs font-label uppercase text-white font-bold tracking-widest">Lead Investor: Matrix Frontiers</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-primary text-on-primary-fixed w-full py-6 font-headline font-black text-lg uppercase tracking-[0.4em] active:scale-95 transition-transform">Access Investor Data Room</button>
          </div>
        </div>
      </section>

      {/* Side Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40 hidden lg:flex">
        <div className="w-1 h-8 bg-primary"></div>
        <div className="w-1 h-8 bg-surface-container-highest"></div>
        <div className="w-1 h-8 bg-surface-container-highest"></div>
        <div className="w-1 h-8 bg-surface-container-highest"></div>
        <div className="w-1 h-8 bg-surface-container-highest"></div>
      </div>
    </div>
  );
}
