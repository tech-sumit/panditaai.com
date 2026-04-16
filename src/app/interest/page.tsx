"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_CONTACT_API_URL || "";

export default function InterestPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch(`${API_URL}/api/interest`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-12 mb-24 grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 lg:col-span-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-headline text-xs tracking-[0.3em] uppercase text-primary">
              Inbound Portal Open
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter leading-none mb-8">
            ACCELERATING <br />{" "}
            <span className="text-primary">PHYSICAL INTELLIGENCE.</span>
          </h1>
          <p className="max-w-xl text-on-surface-variant font-body text-lg leading-relaxed">
            PanditaAI is building the foundational marketplace for trading Kaushals — physical
            AI skills for the next generation of robotics. We are seeking
            partners to deploy, develop, and redefine the physical world.
          </p>
        </div>
        <div className="hidden lg:block col-span-4 text-right">
          <div className="inline-block p-6 bg-surface-container-low border-l-2 border-primary">
            <div className="font-headline text-[10px] tracking-widest text-primary mb-1 uppercase">
              Current Phase
            </div>
            <div className="font-headline text-xl font-bold tracking-widest uppercase">
              System Alpha V.2
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <div className="w-1 h-1 bg-primary"></div>
              <div className="w-1 h-1 bg-outline-variant"></div>
              <div className="w-1 h-1 bg-outline-variant"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Segmented Pathways (Bento Style) */}
      <section className="px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Pathway 1: Robotics Co */}
          <div className="group relative aspect-[4/5] bg-surface-container-low overflow-hidden cursor-pointer transition-all hover:bg-surface-container-high p-8 flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <span className="material-symbols-outlined text-6xl">
                precision_manufacturing
              </span>
            </div>
            <div>
              <div className="font-headline text-xs tracking-widest text-primary mb-2 uppercase">
                Pathway 01
              </div>
              <h3 className="font-headline text-2xl font-bold uppercase leading-tight">
                Robotics
                <br />
                Companies
              </h3>
            </div>
            <div className="font-body text-sm text-on-surface-variant">
              Deploy PanditaAI&apos;s end-to-end Kaushal delivery and sensory fusion
              stack on your hardware.
            </div>
          </div>

          {/* Pathway 2: Developer */}
          <div className="group relative aspect-[4/5] bg-surface-container-low overflow-hidden cursor-pointer transition-all hover:bg-surface-container-high p-8 flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <span className="material-symbols-outlined text-6xl">
                terminal
              </span>
            </div>
            <div>
              <div className="font-headline text-xs tracking-widest text-primary mb-2 uppercase">
                Pathway 02
              </div>
              <h3 className="font-headline text-2xl font-bold uppercase leading-tight">
                Independent
                <br />
                Developers
              </h3>
            </div>
            <div className="font-body text-sm text-on-surface-variant">
              Access our SDK to build autonomous behaviors and simulation
              environments.
            </div>
          </div>

          {/* Pathway 3: Research Lab */}
          <div className="group relative aspect-[4/5] bg-surface-container-low overflow-hidden cursor-pointer transition-all hover:bg-surface-container-high p-8 flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <span className="material-symbols-outlined text-6xl">
                science
              </span>
            </div>
            <div>
              <div className="font-headline text-xs tracking-widest text-primary mb-2 uppercase">
                Pathway 03
              </div>
              <h3 className="font-headline text-2xl font-bold uppercase leading-tight">
                Research
                <br />
                Labs
              </h3>
            </div>
            <div className="font-body text-sm text-on-surface-variant">
              Collaborate on large-scale transformer models for physical
              actuation and spatial reasoning.
            </div>
          </div>

          {/* Pathway 4: Pilot Customer */}
          <div className="group relative aspect-[4/5] bg-surface-container-low overflow-hidden cursor-pointer transition-all hover:bg-surface-container-high p-8 flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <span className="material-symbols-outlined text-6xl">
                factory
              </span>
            </div>
            <div>
              <div className="font-headline text-xs tracking-widest text-primary mb-2 uppercase">
                Pathway 04
              </div>
              <h3 className="font-headline text-2xl font-bold uppercase leading-tight">
                Pilot
                <br />
                Customers
              </h3>
            </div>
            <div className="font-body text-sm text-on-surface-variant">
              Early-access deployment for logistics, manufacturing, and extreme
              environment facilities.
            </div>
          </div>
        </div>
      </section>

      {/* Interest Capture Form */}
      <section className="px-12 grid grid-cols-12 gap-12">
        <div className="col-span-12 lg:col-span-5">
          <div className="sticky top-32">
            <h2 className="font-headline text-4xl font-bold uppercase tracking-tight mb-6">
              Technical <br /> Intake Manifest
            </h2>
            <p className="text-on-surface-variant mb-12">
              Complete the technical diagnostic below. Our systems architecture
              team reviews all submissions within 48 operational hours.
            </p>
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <span className="font-headline text-primary font-bold">01</span>
                <div>
                  <h4 className="font-headline text-xs font-bold uppercase tracking-widest mb-1">
                    Identity Verification
                  </h4>
                  <p className="text-xs text-on-surface-variant uppercase">
                    Basic contact and organizational background
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="font-headline text-outline font-bold">02</span>
                <div>
                  <h4 className="font-headline text-xs font-bold uppercase tracking-widest mb-1 text-outline">
                    Stack Specification
                  </h4>
                  <p className="text-xs text-on-surface-variant/50 uppercase">
                    Hardware, OS, and simulation environment data
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="font-headline text-outline font-bold">03</span>
                <div>
                  <h4 className="font-headline text-xs font-bold uppercase tracking-widest mb-1 text-outline">
                    Intent Profile
                  </h4>
                  <p className="text-xs text-on-surface-variant/50 uppercase">
                    Deployment scale and collaboration goals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="space-y-12 bg-surface-container-low p-12 border-l border-outline-variant/15"
          >
            {/* Section 1: Contact */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label
                    htmlFor="legal-name"
                    className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors"
                  >
                    Legal Name
                  </label>
                  <input
                    id="legal-name"
                    name="legalName"
                    type="text"
                    placeholder="SURNAME, GIVEN"
                    className="w-full bg-surface-container-highest border-none focus:ring-0 border-b-2 border-transparent focus:border-primary px-4 py-3 font-body text-white placeholder-white/20"
                  />
                </div>
                <div className="group">
                  <label
                    htmlFor="organization"
                    className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors"
                  >
                    Organization
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    placeholder="ENTITY NAME"
                    className="w-full bg-surface-container-highest border-none focus:ring-0 border-b-2 border-transparent focus:border-primary px-4 py-3 font-body text-white placeholder-white/20"
                  />
                </div>
              </div>
              <div className="group">
                <label
                  htmlFor="email"
                  className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors"
                >
                  Secure Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="USER@DOMAIN.TLD"
                  className="w-full bg-surface-container-highest border-none focus:ring-0 border-b-2 border-transparent focus:border-primary px-4 py-3 font-body text-white placeholder-white/20"
                />
              </div>
            </div>

            {/* Section 2: Technical Questions */}
            <div className="pt-8 border-t border-outline-variant/20 space-y-8">
              <div className="group">
                <label
                  htmlFor="hardware-stack"
                  className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-4 group-focus-within:text-primary transition-colors"
                >
                  Current Hardware Stack / Actuator Specs
                </label>
                <textarea
                  id="hardware-stack"
                  name="hardwareStack"
                  rows={3}
                  placeholder="Details on degrees of freedom, torque sensors, compute capacity..."
                  className="w-full bg-surface-container-highest border-none focus:ring-0 border-b-2 border-transparent focus:border-primary px-4 py-3 font-body text-white placeholder-white/20"
                />
              </div>
              <div>
                <label className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-6">
                  Primary Simulation Environment
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <label className="cursor-pointer">
                    <input
                      className="hidden peer"
                      name="sim"
                      type="radio"
                      value="isaac-sim"
                    />
                    <div className="py-3 text-center border border-outline-variant/30 font-headline text-[10px] uppercase tracking-widest peer-checked:bg-primary peer-checked:text-on-primary-fixed peer-checked:border-primary hover:border-primary transition-all">
                      Isaac Sim
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input
                      className="hidden peer"
                      name="sim"
                      type="radio"
                      value="mujoco"
                    />
                    <div className="py-3 text-center border border-outline-variant/30 font-headline text-[10px] uppercase tracking-widest peer-checked:bg-primary peer-checked:text-on-primary-fixed peer-checked:border-primary hover:border-primary transition-all">
                      MuJoCo
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input
                      className="hidden peer"
                      name="sim"
                      type="radio"
                      value="gazebo"
                    />
                    <div className="py-3 text-center border border-outline-variant/30 font-headline text-[10px] uppercase tracking-widest peer-checked:bg-primary peer-checked:text-on-primary-fixed peer-checked:border-primary hover:border-primary transition-all">
                      Gazebo
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input
                      className="hidden peer"
                      name="sim"
                      type="radio"
                      value="custom"
                    />
                    <div className="py-3 text-center border border-outline-variant/30 font-headline text-[10px] uppercase tracking-widest peer-checked:bg-primary peer-checked:text-on-primary-fixed peer-checked:border-primary hover:border-primary transition-all">
                      Custom
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Section 3: High-Trust Signal */}
            <div className="pt-8 border-t border-outline-variant/20 space-y-6">
              <div className="flex items-start gap-4">
                <input
                  className="mt-1 bg-surface-container-highest border-outline-variant text-primary focus:ring-0"
                  id="nda"
                  name="nda"
                  type="checkbox"
                />
                <label
                  className="text-xs text-on-surface-variant font-body leading-relaxed"
                  htmlFor="nda"
                >
                  I request a Mutual Non-Disclosure Agreement (mNDA) prior to
                  disclosing proprietary hardware specifications or pilot site
                  locations.
                </label>
              </div>
              <button
                className="w-full bg-primary-container text-on-primary-fixed font-headline font-bold uppercase py-6 tracking-[0.3em] active:scale-[0.98] transition-transform flex justify-center items-center gap-4 disabled:opacity-50"
                type="submit"
                disabled={status === "sending" || status === "sent"}
              >
                {status === "sending" ? "TRANSMITTING..." : status === "sent" ? "RECEIVED" : "TRANSMIT INTEREST"}
                <span className="material-symbols-outlined text-sm">
                  {status === "sent" ? "check_circle" : "send"}
                </span>
              </button>
              {status === "error" && (
                <p className="text-[10px] text-center text-error uppercase tracking-widest">
                  Transmission failed. Please retry.
                </p>
              )}
              <p className="text-[10px] text-center text-on-surface-variant uppercase tracking-widest opacity-50">
                Encryption Status: AES-256 Enabled
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* System Telemetry & Hardware Integration */}
      <section className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-1 px-12">
        <div className="bg-surface-container-low p-12 flex flex-col justify-between aspect-video">
          <h3 className="font-headline text-3xl font-bold uppercase tracking-tight">
            System Telemetry
          </h3>
          <div>
            <div className="font-headline text-[10px] text-primary tracking-widest uppercase mb-4">
              Real-time Global Sync
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] uppercase tracking-widest">
                <span className="text-on-surface-variant">Active Nodes</span>
                <span>1,402</span>
              </div>
              <div className="w-full h-[1px] bg-outline-variant/20"></div>
              <div className="flex justify-between text-[10px] uppercase tracking-widest">
                <span className="text-on-surface-variant">Neural Latency</span>
                <span>14.2 MS</span>
              </div>
              <div className="w-full h-[1px] bg-outline-variant/20"></div>
              <div className="flex justify-between text-[10px] uppercase tracking-widest">
                <span className="text-on-surface-variant">Training Compute</span>
                <span>82.4 PFLOPS</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden aspect-video bg-surface-container-low group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700 scale-110 group-hover:scale-100"
            alt="Cinematic close-up of high-precision robotic arm joints with glowing orange internal lights in a dark futuristic laboratory"
            src="/images/interest-robotic-joints.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
          <div className="absolute bottom-8 left-8">
            <div className="font-headline text-xs tracking-widest text-primary mb-2 uppercase">
              Hardware Integration
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
