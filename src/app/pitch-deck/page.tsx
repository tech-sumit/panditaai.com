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
            <span className="font-label uppercase tracking-[0.3em] text-primary text-sm font-bold">Seed Pitch · SAFE</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-headline font-black leading-tight tracking-tighter mb-8 text-white">
            HUMAN SKILLS, <br /> <span className="text-primary">DELIVERED.</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed font-light mb-12">
            Capturing human expertise. Training robots in NVIDIA Omniverse. The open marketplace of physical skills for humanoid robots.
          </p>
          <div className="flex gap-6">
            <div className="p-6 bg-surface-container-low border-l-4 border-primary">
              <div className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-1">Target Raise</div>
              <div className="text-3xl font-headline font-bold text-white">$1.0M</div>
            </div>
            <div className="p-6 bg-surface-container-low border-l-4 border-outline-variant">
              <div className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-1">Valuation Cap</div>
              <div className="text-3xl font-headline font-bold text-white">$5M</div>
            </div>
            <div className="p-6 bg-surface-container-low border-l-4 border-outline-variant">
              <div className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-1">Closing</div>
              <div className="text-3xl font-headline font-bold text-white">Sep 30 2026</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem: The Friction */}
      <section className="py-32 px-12 bg-surface-container-low">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <h2 className="text-5xl font-headline font-bold text-white mb-8 tracking-tight">SKILLS DIE <br />WITH EXPERTS.</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Humanoid robots ship faster every year. They arrive with no skills. Meanwhile, human experts spend decades mastering techniques that disappear with them.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary mt-1">error</span>
                <div>
                  <h4 className="font-headline font-bold text-white uppercase text-sm tracking-widest">Expertise Dies with the Expert</h4>
                  <p className="text-sm text-on-surface-variant">Chef, martial artist, gardener skills take years to train and are rarely captured.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary mt-1">error</span>
                <div>
                  <h4 className="font-headline font-bold text-white uppercase text-sm tracking-widest">Every OEM Reinvents</h4>
                  <p className="text-sm text-on-surface-variant">Figure, Unitree, Boston Dynamics each train from scratch. No shared skill layer.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 gap-4">
            <div className="bg-surface-container-high p-8 flex flex-col justify-end aspect-square">
              <div className="text-6xl font-headline font-black text-primary mb-4">$38B</div>
              <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Humanoid Robotics TAM by 2030</p>
            </div>
            <div className="bg-surface p-8 border border-outline-variant/10 flex flex-col justify-end aspect-square">
              <div className="text-6xl font-headline font-black text-white mb-4">$15B</div>
              <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Serviceable Skill-Layer SAM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform: The Architecture */}
      <section className="py-32 px-12 bg-surface">
        <div className="text-center mb-24">
          <h2 className="text-xs font-label uppercase tracking-[0.5em] text-primary font-bold mb-4">The Solution</h2>
          <h3 className="text-5xl md:text-6xl font-headline font-black text-white uppercase">CAPTURE · SIMULATE · DEPLOY</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <div className="bg-surface-container-low p-12 hover:bg-surface-container-high transition-colors group">
            <span className="material-symbols-outlined text-4xl text-primary mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>sensors</span>
            <h4 className="text-2xl font-headline font-bold text-white mb-4 uppercase">Capture Expertise</h4>
            <p className="text-on-surface-variant leading-relaxed">
              VR teleoperation and motion capture sessions with human experts — martial artists, chefs, craftsmen. Their timing, force, and judgment becomes the reference.
            </p>
          </div>
          <div className="bg-surface-container-low p-12 hover:bg-surface-container-high transition-colors group border-x border-outline-variant/10">
            <span className="material-symbols-outlined text-4xl text-primary mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
            <h4 className="text-2xl font-headline font-bold text-white mb-4 uppercase">Train 1,000× in Sim</h4>
            <p className="text-on-surface-variant leading-relaxed">
              NVIDIA Isaac Sim in Omniverse runs 1,000 robots in parallel. One hour of sim = 1,000 physical hours of practice. Randomized physics ensures sim-to-real transfer.
            </p>
          </div>
          <div className="bg-surface-container-low p-12 hover:bg-surface-container-high transition-colors group">
            <span className="material-symbols-outlined text-4xl text-primary mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>settings_input_antenna</span>
            <h4 className="text-2xl font-headline font-bold text-white mb-4 uppercase">Deploy OTA</h4>
            <p className="text-on-surface-variant leading-relaxed">
              TensorRT-optimized skill binaries ship to any humanoid running NVIDIA Jetson Orin or IGX. Sub-5ms inference, hot-swappable at runtime.
            </p>
          </div>
        </div>
      </section>

      {/* Product: Visual Proof */}
      <section className="py-32 px-12">
        <div className="bg-surface-container-highest flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-16">
            <div className="inline-block bg-primary text-on-primary-fixed px-3 py-1 text-xs font-headline font-bold uppercase tracking-widest mb-6">Prototype</div>
            <h2 className="text-5xl font-headline font-black text-white mb-8 tracking-tighter uppercase">LAUNCH SKILL CATALOG</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-primary font-headline font-black">01</span>
                <span className="text-white font-medium">Martial Arts — human ~10yr / sim ~48hr / transfer ~2hr.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-headline font-black">02</span>
                <span className="text-white font-medium">Chef Knife Skills — human ~3yr / sim ~24hr / transfer ~1hr.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-headline font-black">03</span>
                <span className="text-white font-medium">Walking, Dancing, Gardening — early backlog.</span>
              </li>
            </ul>
            <Link href="/investor-connect" className="mt-12 inline-block border border-primary text-primary px-10 py-4 font-headline font-bold text-sm uppercase tracking-[0.2em] hover:bg-primary hover:text-on-primary-fixed transition-all">Request Full Deck</Link>
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

      {/* Team: Father & Son */}
      <section className="py-32 px-12 bg-surface-container-low">
        <h2 className="text-xs font-label uppercase tracking-[0.5em] text-primary font-bold mb-16 text-center">Founding Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="group">
            <div className="aspect-square bg-surface mb-6 relative overflow-hidden flex items-center justify-center">
              <span className="material-symbols-outlined text-8xl text-primary/40">person</span>
            </div>
            <h4 className="text-2xl font-headline font-bold text-white uppercase">Sumit Agrawal</h4>
            <p className="text-xs font-label text-primary uppercase tracking-widest mb-4">CEO &amp; Co-Founder</p>
            <p className="text-sm text-on-surface-variant font-light leading-relaxed">
              8+ years across AI, Web3, and cloud-native infrastructure. Operator of the MCP/WebMCP tooling ecosystem with over $1.2B AUM across his portfolio. Leads product, engineering, and capital strategy.
            </p>
          </div>
          <div className="group">
            <div className="aspect-square bg-surface mb-6 relative overflow-hidden flex items-center justify-center">
              <span className="material-symbols-outlined text-8xl text-primary/40">build</span>
            </div>
            <h4 className="text-2xl font-headline font-bold text-white uppercase">Shailendra Agrawal</h4>
            <p className="text-xs font-label text-primary uppercase tracking-widest mb-4">President &amp; Co-Founder</p>
            <p className="text-sm text-on-surface-variant font-light leading-relaxed">
              Electrician, mechanic, and hardware specialist with a lifelong passion for humanoid robotics. Owns physical build, hardware integration, and motion-capture studio operations.
            </p>
          </div>
        </div>
      </section>

      {/* The Raise: Transactional Data */}
      <section className="py-32 px-12 relative">
        <div className="max-w-4xl mx-auto border border-primary/20 bg-surface-container-high p-16">
          <div className="flex justify-between items-start mb-16">
            <div>
              <h2 className="text-4xl font-headline font-black text-white uppercase tracking-tighter mb-2">The Raise</h2>
              <p className="text-on-surface-variant text-sm font-label tracking-widest uppercase">Seed · SAFE · Closing Sep 30 2026</p>
            </div>
            <div className="text-right">
              <div className="text-6xl font-headline font-black text-primary">$1M</div>
              <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant">$5M Valuation Cap</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h4 className="text-xs font-label uppercase tracking-widest text-primary mb-4">Use of Funds</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-white font-medium uppercase text-sm">Humanoid Hardware &amp; MoCap Studio</span>
                  <span className="text-on-surface-variant text-xs">35%</span>
                </div>
                <div className="w-full h-1 bg-surface-variant">
                  <div className="bg-primary h-full w-[35%]"></div>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-white font-medium uppercase text-sm">R&amp;D / Sim Compute</span>
                  <span className="text-on-surface-variant text-xs">25%</span>
                </div>
                <div className="w-full h-1 bg-surface-variant">
                  <div className="bg-primary h-full w-[25%]"></div>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-white font-medium uppercase text-sm">Founding Team</span>
                  <span className="text-on-surface-variant text-xs">25%</span>
                </div>
                <div className="w-full h-1 bg-surface-variant">
                  <div className="bg-primary h-full w-[25%]"></div>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-white font-medium uppercase text-sm">Operations &amp; Legal</span>
                  <span className="text-on-surface-variant text-xs">15%</span>
                </div>
                <div className="w-full h-1 bg-surface-variant">
                  <div className="bg-primary h-full w-[15%]"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-on-surface-variant text-sm italic mb-6 leading-relaxed">
                &ldquo;Humanoid hardware is shipping. The open skill layer is missing. PanditaAI is building it — and earning royalties back to the human experts whose expertise makes it possible.&rdquo;
              </p>
              <div className="flex flex-col gap-2">
                <div className="text-xs font-label uppercase text-white font-bold tracking-widest">Min Ticket: $50,000 · Angels &amp; Micro-Funds Welcome</div>
                <div className="text-xs font-label uppercase text-on-surface-variant tracking-widest">Contact: sumit@panditaai.com</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/investor-connect" className="bg-primary text-on-primary-fixed w-full py-6 font-headline font-black text-lg uppercase tracking-[0.4em] active:scale-95 transition-transform text-center">Connect with Sumit</Link>
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
