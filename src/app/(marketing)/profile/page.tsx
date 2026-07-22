import type { Metadata } from "next";
import { ShiplaMark } from "@/components/brand/shipla-mark";
import { GlassCard } from "@/components/ui/glass-card";
import { PageShell, SectionHeading } from "@/components/ui/section-heading";
import {
  CORE_PURPOSE,
  FOUNDER,
  GROWTH_PATH,
  VISION_PHASES,
} from "@/features/vision/content";

export const metadata: Metadata = {
  title: "Profile Patency · Dr. MD Tauqeer Ahmad",
  description:
    "Founder profile and long-term vision path for SHIPLA — Seemanchal Health Infrastructure & Planetary Life Advancement by Dr. MD Tauqeer Ahmad.",
};

export default function FounderProfilePage() {
  return (
    <>
      <PageShell className="pb-10 pt-16 md:pt-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <GlassCard className="glass-edge overflow-hidden p-8 md:p-10">
            <div className="flex items-start gap-5">
              <ShiplaMark size="lg" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft">
                  Founder Profile · Patency
                </p>
                <h1 className="mt-3 font-display text-4xl leading-tight text-ivory md:text-5xl">
                  {FOUNDER.name}
                </h1>
                <p className="mt-2 text-sm text-emerald-soft">{FOUNDER.title}</p>
                <p className="mt-1 text-sm text-ivory-dim">
                  {FOUNDER.org} · {FOUNDER.initiative}
                </p>
              </div>
            </div>

            <blockquote className="mt-8 border-l-2 border-gold/60 pl-4 font-display text-2xl leading-snug text-gold-soft md:text-3xl">
              “{FOUNDER.quote}”
            </blockquote>

            <p className="mt-6 text-base leading-relaxed text-ivory-muted">{FOUNDER.vision}</p>
          </GlassCard>

          <div>
            <SectionHeading
              eyebrow="Growth Philosophy"
              title="Exist. Good. Great."
              description="The SHIPLA path begins by making it real — then compounding reliability into legendary impact."
            />
            <div className="mt-8 grid gap-4">
              {GROWTH_PATH.map((step, index) => (
                <GlassCard key={step.id} className="flex items-start gap-4 p-5" hover>
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-gold/10 font-display text-lg text-gold-soft">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl tracking-[0.08em] text-ivory">
                      {step.label}
                    </h3>
                    <p className="mt-1 text-sm text-ivory-muted">{step.copy}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </PageShell>

      <PageShell>
        <SectionHeading
          eyebrow="Long-Term Vision Path"
          title="Twelve phases from foundation to global standard."
          description="A sequenced path for Seemanchal — from financial base and clinics to medical city, frontier health, and world-class care."
        />
        <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {VISION_PHASES.map((item) => (
            <GlassCard key={item.phase} className="p-5" hover>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
                Phase {String(item.phase).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-xl text-ivory">{item.title}</h3>
              <p className="mt-2 text-sm text-ivory-muted">{item.copy}</p>
            </GlassCard>
          ))}
        </div>
      </PageShell>

      <PageShell>
        <SectionHeading
          eyebrow="Core Purpose"
          title="Why SHIPLA exists."
          description="Healthcare, education, entrepreneurship, AI, community reform, and sustainable regional development — rooted in Seemanchal."
        />
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {CORE_PURPOSE.map((item, index) => (
            <GlassCard key={item.title} className="flex gap-4 p-5" hover>
              <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-emerald/40 bg-emerald/10 text-sm text-emerald-glow">
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-medium text-ivory">{item.title}</h3>
                <p className="mt-1 text-sm text-ivory-muted">{item.copy}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </PageShell>

      <PageShell className="pb-24">
        <GlassCard className="overflow-hidden p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.24em] text-gold-soft">{FOUNDER.tagline}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {FOUNDER.pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="font-display text-2xl text-ivory">{pillar.label}</h3>
                <p className="mt-2 text-sm text-ivory-muted">{pillar.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
          <p className="mt-6 text-sm text-ivory-dim">
            Profile Patency by {FOUNDER.name} · {FOUNDER.fullName}
          </p>
        </GlassCard>
      </PageShell>
    </>
  );
}
