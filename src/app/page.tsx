"use client";

import Link from "next/link";
import { useState } from "react";
import SkillWordCycle, { SKILL_WORDS } from "@/components/ui/SkillWordCycle";

export default function HomePage() {
  const [skillIndex, setSkillIndex] = useState(0);
  return (
    <>
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-50 brightness-75"
            alt="Human martial artist in motion-capture suit with a humanoid robot mirroring the identical strike pose — skill transfer concept"
            src="/images/hero-mocap-mirror.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-surface-container-highest px-4 py-1 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold font-headline text-primary">
              Concept Phase · Prototyping 2026
            </span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black font-headline tracking-tighter leading-[1.05] mb-6 text-white uppercase italic">
            The <SkillWordCycle onChange={setSkillIndex} />
            <br />
            <span className="text-primary not-italic">Marketplace</span>
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-6 text-sm font-medium tracking-wide">
            {SKILL_WORDS.map((entry, i) => {
              const active = i === skillIndex;
              return (
                <span key={entry.lang} className="flex items-center gap-5">
                  <span
                    className={`transition-colors duration-300 ${
                      active ? "text-primary" : "text-white/25"
                    }`}
                  >
                    <span
                      className={entry.fontClass ?? ""}
                      dir={entry.dir ?? "ltr"}
                    >
                      {entry.word}
                    </span>{" "}
                    <span
                      className={`text-xs transition-colors duration-300 ${
                        active ? "text-primary/70" : "text-white/15"
                      }`}
                    >
                      ({entry.lang})
                    </span>
                  </span>
                  {i < SKILL_WORDS.length - 1 && (
                    <span className="text-white/10">·</span>
                  )}
                </span>
              );
            })}
          </div>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-on-surface-variant font-light tracking-wide mb-12">
            Capturing human expertise. Training robots in NVIDIA Omniverse. An open marketplace of physical AI skills — martial arts, cooking, walking, dancing, gardening — deployable to any humanoid robot.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href="/concept"
              className="w-full md:w-auto bg-primary-container text-on-primary-fixed px-10 py-5 font-black uppercase tracking-[0.2em] text-sm hover:translate-y-[-2px] transition-transform"
            >
              See How It Works
            </Link>
            <Link
              href="/pitch-deck"
              className="w-full md:w-auto border border-outline-variant/30 text-white px-10 py-5 font-black uppercase tracking-[0.2em] text-sm hover:border-primary hover:text-primary transition-colors"
            >
              Read the Pitch
            </Link>
          </div>
          <div className="mt-10 flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest font-headline text-white/40">
            <span>Pre-Revenue</span>
            <span className="w-1 h-1 bg-outline-variant rounded-full" />
            <span>NVIDIA Inception Applicant</span>
            <span className="w-1 h-1 bg-outline-variant rounded-full" />
            <span>Seed Open</span>
          </div>
        </div>
        <div className="absolute bottom-10 left-12 hidden md:flex flex-col gap-4">
          <div className="h-24 w-[1px] bg-gradient-to-t from-primary to-transparent" />
          <span
            className="text-[10px] tracking-widest uppercase text-primary/70 rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
        </div>
      </header>

      <section className="bg-primary-container py-4 overflow-hidden whitespace-nowrap border-y border-primary">
        <div className="flex animate-marquee items-center gap-12">
          <span className="text-on-primary-fixed font-black text-sm uppercase tracking-[0.4em] font-headline">
            Seed Round Open // $1M Target // $5M Cap // Closing Sep 30 2026 // NVIDIA Inception
          </span>
          <span className="text-on-primary-fixed font-black text-sm uppercase tracking-[0.4em] font-headline">
            Seed Round Open // $1M Target // $5M Cap // Closing Sep 30 2026 // NVIDIA Inception
          </span>
          <span className="text-on-primary-fixed font-black text-sm uppercase tracking-[0.4em] whitespace-nowrap font-headline">
            Seed Round Open // $1M Target // $5M Cap // Closing Sep 30 2026 // NVIDIA Inception
          </span>
        </div>
      </section>

      <section className="py-32 bg-surface-container-low px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black font-headline uppercase tracking-tight mb-8">
                Teaching Robots <br /> <span className="text-primary">Human</span> <br /> Skills.
              </h2>
              <p className="text-on-surface-variant text-lg mb-12 leading-relaxed">
                Software replicates instantly. Human skills don&apos;t. A master chef&apos;s knife work, a martial artist&apos;s precision, a gardener&apos;s touch — these die with the expert. PanditaAI captures expertise and teaches it to robots using NVIDIA Isaac Sim in Omniverse.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-surface-container-high p-6 border-l-2 border-primary">
                  <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-2">1000x Training</h4>
                  <p className="text-xs text-on-surface-variant">
                    1,000 simulated robots train in parallel. 1 hour of sim = 1,000 physical hours of learning.
                  </p>
                </div>
                <div className="bg-surface-container-high p-6 border-l-2 border-outline-variant">
                  <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">Open Marketplace</h4>
                  <p className="text-xs text-on-surface-variant">
                    License human-captured skills to any robot, any form factor, any manufacturer.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-surface-container-highest border border-outline-variant/10 flex items-center justify-center overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Human expert in VR motion capture suit recording martial arts skill for robot training"
                  src="/images/pipeline-capture.png"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-primary-container p-4 text-on-primary-fixed font-black text-[10px] uppercase tracking-widest">
                Skill: Martial_Arts.v2
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
          <div className="pipeline-rail grid grid-cols-1 md:grid-cols-5 gap-px bg-outline-variant/20">
            <div className="bg-surface p-8 group hover:bg-surface-container-low transition-colors duration-500">
              <div className="text-primary text-4xl font-black mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                01
              </div>
              <h3 className="text-xl font-bold font-headline uppercase mb-4">Capture</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Record motion from human experts — martial artists, chefs, dancers, gardeners — via VR teleoperation and motion capture.
              </p>
            </div>
            <div className="bg-surface p-8 group hover:bg-surface-container-low transition-colors duration-500">
              <div className="text-primary text-4xl font-black mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                02
              </div>
              <h3 className="text-xl font-bold font-headline uppercase mb-4">Simulate</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                1,000 robots train in parallel inside NVIDIA Omniverse using Isaac Sim. 1 hour of sim = 1,000 physical hours.
              </p>
            </div>
            <div className="bg-surface p-8 group hover:bg-surface-container-low transition-colors duration-500">
              <div className="text-primary text-4xl font-black mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                03
              </div>
              <h3 className="text-xl font-bold font-headline uppercase mb-4">Validate</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Stress-test across randomized physics, friction, and edge cases to ensure sim-to-real transfer.
              </p>
            </div>
            <div className="bg-surface p-8 group hover:bg-surface-container-low transition-colors duration-500">
              <div className="text-primary text-4xl font-black mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                04
              </div>
              <h3 className="text-xl font-bold font-headline uppercase mb-4">Publish</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                List on the PanditaAI Marketplace with performance benchmarks. Experts earn royalties on every deployment.
              </p>
            </div>
            <div className="bg-surface p-8 group hover:bg-surface-container-low transition-colors duration-500">
              <div className="text-primary text-4xl font-black mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                05
              </div>
              <h3 className="text-xl font-bold font-headline uppercase mb-4">Deploy</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                OTA delivery to robots on NVIDIA Jetson Orin / IGX. Sub-5ms inference via TensorRT.
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
                <div className="col-span-2 aspect-[21/9] bg-surface-container-highest flex items-center justify-center overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="NVIDIA Jetson AGX Orin module mounted inside a humanoid robot's carbon-fibre compute bay"
                    src="/images/jetson-in-humanoid.webp"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-black font-headline uppercase mb-8">
                NVIDIA Native Architecture
              </h2>
              <p className="text-on-surface-variant mb-8">
                Built on the NVIDIA edge stack. Skills trained in NVIDIA Omniverse using Isaac Sim deploy natively to Jetson Orin and IGX hardware, with TensorRT delivering sub-5ms inference on any compatible humanoid.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  NVIDIA Inception Applicant
                </li>
                <li className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  Jetson Orin AGX / NX + IGX Deployment Targets
                </li>
                <li className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  Isaac Sim + Omniverse Training Pipeline
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
              <span className="text-primary font-bold text-xs uppercase tracking-[0.5em] mb-4 block">Skill Catalog</span>
              <h2 className="text-5xl font-black font-headline uppercase italic">
                Human Skills <br /> Made Downloadable
              </h2>
            </div>
            <div className="text-right">
              <div className="text-6xl font-black font-headline text-white/10 mb-2">1000x</div>
              <p className="text-xs uppercase tracking-widest font-bold text-primary">
                Parallel Sim Speedup
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="skill-card bg-surface-container-high p-10 border-t border-primary/20 hover:border-primary/80 group">
              <span
                className="material-symbols-outlined text-4xl text-primary mb-8"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                sports_martial_arts
              </span>
              <h3 className="text-2xl font-bold font-headline uppercase mb-4">Martial Arts</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Human training ~10 years. Robot training in sim ~48 hours. Transfer to a new humanoid ~2 hours.
              </p>
            </div>
            <div className="skill-card bg-surface-container-high p-10 border-t border-primary/20 hover:border-primary/80 group">
              <span
                className="material-symbols-outlined text-4xl text-primary mb-8"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                cooking
              </span>
              <h3 className="text-2xl font-bold font-headline uppercase mb-4">Chef Knife Skills</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Human training ~3 years. Robot training in sim ~24 hours. Transfer to a new humanoid ~1 hour.
              </p>
            </div>
            <div className="skill-card bg-surface-container-high p-10 border-t border-primary/20 hover:border-primary/80 group">
              <span
                className="material-symbols-outlined text-4xl text-primary mb-8"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                yard
              </span>
              <h3 className="text-2xl font-bold font-headline uppercase mb-4">Walking · Dancing · Gardening</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Expanding catalog of human expertise. Skill file sizes ~500MB–2GB, deployable OTA to any compatible robot.
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
            PanditaAI is raising a $1M Seed round ($5M valuation cap, closing Sep 30 2026) to procure humanoid hardware, build the motion-capture pipeline, and train the first wave of human-derived robot skills.
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
