import Link from "next/link";
import GeneralInterestForm from "@/components/ui/GeneralInterestForm";

export default function InterestPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="px-12 mb-24 grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 lg:col-span-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-headline text-xs tracking-[0.3em] uppercase text-primary">
              Concept Phase · Early Community Opening
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter leading-none mb-8">
            SHAPE THE <br />{" "}
            <span className="text-primary">SKILL LAYER.</span>
          </h1>
          <p className="max-w-2xl text-on-surface-variant font-body text-lg leading-relaxed">
            PanditaAI is building the open marketplace for robotic skills.
            Whether you&apos;re a human expert with a craft to capture, a robot
            OEM bringing hardware online, a developer who wants to build on the
            platform, or an operator hunting for early pilots — record your
            interest and we&apos;ll route you to the right conversation.
          </p>
          <p className="max-w-2xl text-on-surface-variant/60 font-body text-sm leading-relaxed mt-6">
            Investor? Head to{" "}
            <Link
              className="text-primary hover:underline"
              href="/investor-connect"
            >
              /investor-connect
            </Link>{" "}
            instead — that flow has the full round parameters and data room.
          </p>
        </div>
        <div className="hidden lg:block col-span-4 text-right">
          <div className="inline-block p-6 bg-surface-container-low border-l-2 border-primary">
            <div className="font-headline text-[10px] tracking-widest text-primary mb-1 uppercase">
              Typical Reply
            </div>
            <div className="font-headline text-xl font-bold tracking-widest uppercase">
              Within 48 Hours
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <div className="w-1 h-1 bg-primary"></div>
              <div className="w-1 h-1 bg-primary"></div>
              <div className="w-1 h-1 bg-outline-variant"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Personas */}
      <section className="px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Expert */}
          <div className="group relative aspect-[4/5] bg-surface-container-low overflow-hidden transition-all hover:bg-surface-container-high p-8 flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <span className="material-symbols-outlined text-6xl">
                waving_hand
              </span>
            </div>
            <div>
              <div className="font-headline text-xs tracking-widest text-primary mb-2 uppercase">
                Persona 01
              </div>
              <h3 className="font-headline text-2xl font-bold uppercase leading-tight">
                Skill
                <br />
                Experts
              </h3>
            </div>
            <div className="font-body text-sm text-on-surface-variant">
              Martial artists, chefs, craftspeople, athletes, surgeons — anyone
              with a physical craft worth capturing. Royalties every time a
              robot runs your skill.
            </div>
          </div>

          {/* OEM */}
          <div className="group relative aspect-[4/5] bg-surface-container-low overflow-hidden transition-all hover:bg-surface-container-high p-8 flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <span className="material-symbols-outlined text-6xl">
                precision_manufacturing
              </span>
            </div>
            <div>
              <div className="font-headline text-xs tracking-widest text-primary mb-2 uppercase">
                Persona 02
              </div>
              <h3 className="font-headline text-2xl font-bold uppercase leading-tight">
                Robot
                <br />
                OEMs
              </h3>
            </div>
            <div className="font-body text-sm text-on-surface-variant">
              Humanoid and manipulator builders who want a plug-and-play skill
              catalog instead of writing every behavior from scratch.
            </div>
          </div>

          {/* Developer */}
          <div className="group relative aspect-[4/5] bg-surface-container-low overflow-hidden transition-all hover:bg-surface-container-high p-8 flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <span className="material-symbols-outlined text-6xl">
                terminal
              </span>
            </div>
            <div>
              <div className="font-headline text-xs tracking-widest text-primary mb-2 uppercase">
                Persona 03
              </div>
              <h3 className="font-headline text-2xl font-bold uppercase leading-tight">
                Developers
                <br />
                &amp; Labs
              </h3>
            </div>
            <div className="font-body text-sm text-on-surface-variant">
              Build training pipelines, simulation tooling, and deployment
              agents on top of the PanditaAI SDK. Isaac Sim / ROS 2 native.
            </div>
          </div>

          {/* Pilot */}
          <div className="group relative aspect-[4/5] bg-surface-container-low overflow-hidden transition-all hover:bg-surface-container-high p-8 flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <span className="material-symbols-outlined text-6xl">
                factory
              </span>
            </div>
            <div>
              <div className="font-headline text-xs tracking-widest text-primary mb-2 uppercase">
                Persona 04
              </div>
              <h3 className="font-headline text-2xl font-bold uppercase leading-tight">
                Pilot
                <br />
                Customers
              </h3>
            </div>
            <div className="font-body text-sm text-on-surface-variant">
              Logistics, hospitality, manufacturing, healthcare. Bring us a
              repetitive physical task and we&apos;ll build the first skill for
              it with you.
            </div>
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="px-12 grid grid-cols-12 gap-12">
        <div className="col-span-12 lg:col-span-5">
          <div className="sticky top-32">
            <h2 className="font-headline text-4xl font-bold uppercase tracking-tight mb-6">
              Record <br /> Your Interest
            </h2>
            <p className="text-on-surface-variant mb-12">
              A couple of fields, one honest paragraph about what you&apos;re
              working on, and we&apos;ll write back personally — not an
              auto-responder.
            </p>
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <span className="font-headline text-primary font-bold">01</span>
                <div>
                  <h4 className="font-headline text-xs font-bold uppercase tracking-widest mb-1">
                    Tell us who you are
                  </h4>
                  <p className="text-xs text-on-surface-variant uppercase">
                    Name, email, org, how to place you
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="font-headline text-outline font-bold">02</span>
                <div>
                  <h4 className="font-headline text-xs font-bold uppercase tracking-widest mb-1 text-outline">
                    What you&apos;re here for
                  </h4>
                  <p className="text-xs text-on-surface-variant/50 uppercase">
                    The craft, hardware, or use case
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="font-headline text-outline font-bold">03</span>
                <div>
                  <h4 className="font-headline text-xs font-bold uppercase tracking-widest mb-1 text-outline">
                    We reply personally
                  </h4>
                  <p className="text-xs text-on-surface-variant/50 uppercase">
                    Usually same day · always within 48 h
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-outline-variant/15">
              <div className="font-headline text-[10px] tracking-widest text-primary mb-2 uppercase">
                Direct line
              </div>
              <a
                className="font-headline text-base text-white hover:text-primary transition-colors"
                href="mailto:hello@panditaai.com"
              >
                hello@panditaai.com
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <GeneralInterestForm />
        </div>
      </section>

      {/* What you're joining */}
      <section className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-1 px-12">
        <div className="relative overflow-hidden aspect-video bg-surface-container-low group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover brightness-90 group-hover:brightness-110 transition-all duration-700 scale-105 group-hover:scale-100"
            alt="Three different humanoid robots from different OEMs receiving the same skill file from an overhead registry"
            src="/images/vision-open-ecosystem.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
          <div className="absolute bottom-8 left-8">
            <div className="font-headline text-xs tracking-widest text-primary mb-2 uppercase">
              What you&apos;re joining
            </div>
            <h3 className="font-headline text-2xl font-bold uppercase">
              An Open Skill Catalog
            </h3>
          </div>
        </div>
        <div className="bg-surface-container-low p-12 flex flex-col justify-between aspect-video">
          <h3 className="font-headline text-3xl font-bold uppercase tracking-tight">
            How your interest routes
          </h3>
          <div>
            <div className="font-headline text-[10px] text-primary tracking-widest uppercase mb-4">
              After you submit
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] uppercase tracking-widest">
                <span className="text-on-surface-variant">Skill Experts</span>
                <span>MoCap intake · NDA · royalty terms</span>
              </div>
              <div className="w-full h-[1px] bg-outline-variant/20"></div>
              <div className="flex justify-between text-[10px] uppercase tracking-widest">
                <span className="text-on-surface-variant">Robot OEMs</span>
                <span>SDK preview · integration call</span>
              </div>
              <div className="w-full h-[1px] bg-outline-variant/20"></div>
              <div className="flex justify-between text-[10px] uppercase tracking-widest">
                <span className="text-on-surface-variant">Developers</span>
                <span>Early-access SDK &amp; Discord invite</span>
              </div>
              <div className="w-full h-[1px] bg-outline-variant/20"></div>
              <div className="flex justify-between text-[10px] uppercase tracking-widest">
                <span className="text-on-surface-variant">Pilot Customers</span>
                <span>Use-case scoping · quote</span>
              </div>
            </div>
            <div className="mt-6">
              <Link
                className="font-headline text-[10px] text-primary tracking-widest uppercase hover:underline"
                href="/concept"
              >
                Read the concept →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
