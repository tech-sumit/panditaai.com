"use client";

import { FormEvent, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_CONTACT_API_URL || "";

export default function AboutPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
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
    <div className="relative pt-32">
      {/* Hero */}
      <section className="px-12 mb-24 grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 md:col-span-8">
          <div className="inline-block bg-primary/10 px-3 py-1 border-l-2 border-primary mb-6">
            <span className="text-primary font-headline text-xs tracking-[0.2em] font-bold uppercase">
              System: About // Mission
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-black tracking-tighter leading-none mb-8">
            BUILT IN{" "}
            <span className="text-primary text-glow italic">PUNE</span>.{" "}
            DEPLOYED EVERYWHERE.
          </h1>
          <p className="text-on-surface-variant text-xl leading-relaxed max-w-2xl font-light">
            PanditaAI is an operating unit of Shailka Systems Pvt. Ltd., headquartered in Pune, India. We are a father-and-son founding team building the open marketplace of physical skills for humanoid robots.
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 flex justify-end">
          <div className="text-right border-r-2 border-primary-container pr-6">
            <div className="text-primary text-4xl font-headline font-black">
              01 // IDENTITY
            </div>
            <div className="text-white/40 text-xs tracking-widest uppercase mt-2">
              Protocol Establishment
            </div>
          </div>
        </div>
      </section>

      {/* The Pandit.AI Nexus */}
      <section className="grid grid-cols-1 md:grid-cols-2 bg-surface-container-low">
        <div className="p-12 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-outline-variant/10">
          <h2 className="text-3xl font-headline font-bold tracking-widest uppercase mb-8">
            THE FOUNDING STORY
          </h2>
          <div className="space-y-6 text-on-surface-variant font-body">
            <p>
              Sumit Agrawal — 8+ years across AI, Web3, and cloud-native systems, operator of the MCP/WebMCP tooling ecosystem with over $1.2B AUM across his portfolio — teamed up with his father, Shailendra Agrawal, an electrician and mechanical specialist with a lifelong fascination for humanoid hardware.
            </p>
            <p>
              The observation: humanoid robots are shipping, but they arrive without skills. Every OEM is re-training from scratch. Meanwhile, human experts — chefs, martial artists, gardeners — hold expertise that can only be preserved if someone captures it. PanditaAI is that bridge.
            </p>
          </div>
          <div className="mt-12 flex gap-4">
            <div className="w-16 h-1 bg-primary"></div>
            <div className="w-4 h-1 bg-outline-variant/30"></div>
            <div className="w-4 h-1 bg-outline-variant/30"></div>
          </div>
        </div>
        <div className="h-[600px] relative">
          <img
            alt="The PanditaAI workshop in Pune, India: a humanoid prototype on a workbench with NVIDIA Jetson dev boards, oscilloscope and tools"
            className="w-full h-full object-cover opacity-80"
            src="/images/about-pune-lab.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-transparent to-transparent"></div>
        </div>
      </section>

      {/* Core Directives */}
      <section className="p-12 md:p-24 space-y-24">
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-8">
          <h2 className="text-5xl font-headline font-black tracking-tight uppercase">
            Core <span className="text-primary">Directives</span>
          </h2>
          <div className="h-px flex-grow bg-outline-variant/20 mx-8 hidden md:block"></div>
          <span className="font-headline text-sm tracking-widest text-on-surface-variant">
            OPERATIONAL STANDARDS 2024.v1
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="group border border-outline-variant/15 p-8 hover:bg-surface-container-high transition-all duration-300">
            <div className="text-primary mb-6">
              <span className="material-symbols-outlined scale-150">
                person
              </span>
            </div>
            <h3 className="text-xl font-headline font-bold mb-4">
              SUMIT AGRAWAL · CEO
            </h3>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed">
              8+ years across AI, Web3, and cloud-native infrastructure. Operator of the MCP/WebMCP tooling ecosystem with over $1.2B AUM across his portfolio. Leads product, engineering, and capital strategy.
            </p>
          </div>
          <div className="group border border-outline-variant/15 p-8 hover:bg-surface-container-high transition-all duration-300 bg-primary/5">
            <div className="text-primary mb-6">
              <span className="material-symbols-outlined scale-150">bolt</span>
            </div>
            <h3 className="text-xl font-headline font-bold mb-4">
              THE MISSION
            </h3>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed">
              Capture human expertise before it disappears, and make it downloadable to any NVIDIA-compatible humanoid. An open skill layer for the physical economy.
            </p>
          </div>
          <div className="group border border-outline-variant/15 p-8 hover:bg-surface-container-high transition-all duration-300">
            <div className="text-primary mb-6">
              <span className="material-symbols-outlined scale-150">build</span>
            </div>
            <h3 className="text-xl font-headline font-bold mb-4">
              SHAILENDRA AGRAWAL · PRESIDENT
            </h3>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed">
              Electrician, mechanic, and hardware specialist. Lifelong passion for humanoid robotics. Owns the physical build, hardware integration, and motion-capture studio operations.
            </p>
          </div>
        </div>
      </section>

      {/* System FAQ */}
      <section className="bg-surface-container-low px-12 md:px-24 py-32">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl font-headline font-black tracking-widest uppercase">
              System FAQ
            </h2>
            <div className="h-[2px] flex-grow bg-primary"></div>
            <span className="text-primary font-headline text-xs font-bold tracking-widest">
              QUERY_PORT_8080
            </span>
          </div>
          <div className="space-y-4">
            <div className="bg-surface-container-high p-8 group cursor-pointer border-l-4 border-transparent hover:border-primary transition-all">
              <div className="flex justify-between items-center">
                <h4 className="font-headline font-bold text-lg uppercase tracking-wider">
                  What constitutes a &ldquo;Physical Skill&rdquo; in the PanditaAI
                  framework?
                </h4>
                <span className="material-symbols-outlined text-primary group-hover:rotate-45 transition-transform">
                  add
                </span>
              </div>
              <p className="mt-6 text-on-surface-variant font-body text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-60 transition-all duration-500">
                A physical skill is a TensorRT-optimized policy trained in NVIDIA Isaac Sim from expert human demonstration. Sizes range from 500MB to 2GB. Once licensed, a skill deploys OTA to a robot&apos;s Jetson Orin / IGX compute and runs at sub-5ms inference.
              </p>
            </div>
            <div className="bg-surface-container-high p-8 group cursor-pointer border-l-4 border-transparent hover:border-primary transition-all">
              <div className="flex justify-between items-center">
                <h4 className="font-headline font-bold text-lg uppercase tracking-wider">
                  Which hardware platforms are currently supported?
                </h4>
                <span className="material-symbols-outlined text-primary group-hover:rotate-45 transition-transform">
                  add
                </span>
              </div>
              <p className="mt-6 text-on-surface-variant font-body text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-60 transition-all duration-500">
                Our deployment target is any humanoid running NVIDIA Jetson Orin or IGX. We&apos;re launching with Unitree-class humanoids as the reference platform and expanding to additional OEMs as pilots ship.
              </p>
            </div>
            <div className="bg-surface-container-high p-8 group cursor-pointer border-l-4 border-transparent hover:border-primary transition-all">
              <div className="flex justify-between items-center">
                <h4 className="font-headline font-bold text-lg uppercase tracking-wider">
                  How does PanditaAI handle edge-case safety?
                </h4>
                <span className="material-symbols-outlined text-primary group-hover:rotate-45 transition-transform">
                  add
                </span>
              </div>
              <p className="mt-6 text-on-surface-variant font-body text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-60 transition-all duration-500">
                Every skill is validated against randomized physics and friction parameters in Isaac Sim before publishing. Operators can enforce torque, speed, and workspace limits at runtime on Jetson / IGX through the skill manifest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Establish Contact + System Nodes */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
        <div className="p-12 md:p-24 bg-surface border-r border-outline-variant/10">
          <div className="mb-12">
            <h2 className="text-5xl font-headline font-black uppercase mb-4">
              Establish <span className="text-primary">Contact</span>
            </h2>
            <p className="text-on-surface-variant tracking-wide font-light">
              Secure transmission line for partnerships and technical inquiries.
            </p>
          </div>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                htmlFor="identity-name"
                className="font-headline text-xs font-bold tracking-widest text-primary uppercase"
              >
                Identity_Name
              </label>
              <input
                id="identity-name"
                name="identityName"
                className="w-full bg-surface-container-highest border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 text-white p-4 font-body"
                placeholder="Full designation"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="encrypted-email"
                className="font-headline text-xs font-bold tracking-widest text-primary uppercase"
              >
                Encrypted_Email
              </label>
              <input
                id="encrypted-email"
                name="encryptedEmail"
                className="w-full bg-surface-container-highest border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 text-white p-4 font-body"
                placeholder="active_node@domain.com"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="transmission-packet"
                className="font-headline text-xs font-bold tracking-widest text-primary uppercase"
              >
                Transmission_Packet
              </label>
              <textarea
                id="transmission-packet"
                name="transmissionPacket"
                className="w-full bg-surface-container-highest border-0 border-b-2 border-outline-variant/30 focus:border-primary focus:ring-0 text-white p-4 font-body"
                placeholder="Enter query parameters..."
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary-container text-on-primary-fixed py-4 font-headline font-black uppercase tracking-[0.3em] active:scale-[0.98] transition-all disabled:opacity-50"
              disabled={status === "sending" || status === "sent"}
            >
              {status === "sending" ? "Transmitting..." : status === "sent" ? "Transmission Sent" : "Send Transmission"}
            </button>
            {status === "error" && (
              <p className="text-[10px] text-center text-error uppercase tracking-widest mt-2">
                Transmission failed. Please retry.
              </p>
            )}
          </form>
        </div>
        <div className="relative bg-surface-container-low p-12 md:p-24 flex flex-col justify-between">
          <div>
            <h3 className="font-headline text-2xl font-bold uppercase tracking-widest mb-12">
              SYSTEM NODES
            </h3>
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-primary">
                  location_on
                </span>
                <div>
                  <h4 className="font-headline font-bold text-xs tracking-widest uppercase mb-2">
                    HQ · Shailka Systems Pvt. Ltd.
                  </h4>
                  <p className="text-on-surface-variant font-mono text-sm uppercase">
                    HD 072, WeWORK Futura, Magarpatta
                    <br />
                    Hadapsar, Pune — 411028, MH, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-primary">
                  alternate_email
                </span>
                <div>
                  <h4 className="font-headline font-bold text-xs tracking-widest uppercase mb-2">
                    Direct Line
                  </h4>
                  <p className="text-on-surface-variant font-mono text-sm">
                    sumit@panditaai.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-primary">
                  terminal
                </span>
                <div>
                  <h4 className="font-headline font-bold text-xs tracking-widest uppercase mb-2">
                    Network Access
                  </h4>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="https://x.com/tech_sumit"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Sumit on X"
                      className="w-10 h-10 border border-outline-variant/30 flex items-center justify-center hover:border-primary transition-colors"
                    >
                      <svg
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://github.com/tech-sumit"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="tech-sumit on GitHub"
                      className="w-10 h-10 border border-outline-variant/30 flex items-center justify-center hover:border-primary transition-colors"
                    >
                      <svg
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-64 mt-12 bg-surface-container-highest flex items-center justify-center relative group overflow-hidden">
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,107,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.15) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest via-transparent to-transparent" />
            <div className="relative z-10 text-center">
              <div className="relative w-4 h-4 mx-auto mb-4">
                <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-70" />
                <span className="absolute inset-1 bg-primary rounded-full" />
              </div>
              <span className="font-headline font-bold text-xs tracking-widest text-primary uppercase">
                Pune · HQ Node
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
