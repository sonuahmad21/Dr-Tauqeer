import type { Metadata } from "next";
import { SeemanchalAtmosphere } from "@/components/background/seemanchal-atmosphere";
import { ShiplaMark } from "@/components/brand/shipla-mark";
import { FadeIn } from "@/components/ui/fade-in";
import { PageShell } from "@/components/ui/section-heading";
import {
  CORE_PURPOSE,
  FOUNDER,
  GROWTH_PATH,
  VISION_PHASES,
} from "@/features/vision/content";
import { VisionIcon } from "@/features/vision/icons";

export const metadata: Metadata = {
  title: "Profile Patency · Dr. MD Tauqeer Ahmad",
  description:
    "Founder profile and long-term vision path for SHIPLA — Seemanchal Health Infrastructure & Planetary Life Advancement by Dr. MD Tauqeer Ahmad.",
};

export default function FounderProfilePage() {
  return (
    <div className="relative">
      <SeemanchalAtmosphere />

      {/* Hero — brand, quote, EXIST → GOOD → GREAT */}
      <PageShell className="pb-12 pt-14 md:pt-20">
        <FadeIn>
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-5">
                <ShiplaMark size="xl" className="animate-float" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-soft">
                    Founder Profile · Patency
                  </p>
                  <h1 className="mt-2 font-display text-4xl leading-tight text-ivory md:text-5xl lg:text-6xl">
                    {FOUNDER.name}
                  </h1>
                  <p className="mt-2 text-sm text-emerald-soft">{FOUNDER.title}</p>
                  <p className="mt-1 text-sm text-ivory-dim">
                    {FOUNDER.org} · {FOUNDER.initiative} · Seemanchal
                  </p>
                </div>
              </div>

              <blockquote className="mt-10 max-w-2xl border-l-2 border-gold/70 pl-5 font-display text-3xl leading-snug text-gold-soft md:text-4xl">
                “{FOUNDER.quote}”
              </blockquote>
            </div>

            <p className="max-w-md text-base leading-relaxed text-ivory-muted lg:pb-2">
              {FOUNDER.vision}
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {GROWTH_PATH.map((step, index) => (
            <FadeIn key={step.id} delay={0.08 * index}>
              <div className="group relative overflow-hidden rounded-[1.75rem] border border-gold/25 bg-gradient-to-br from-forest/80 via-void-panel/80 to-void/90 p-6 shadow-glass">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/10 blur-2xl transition group-hover:bg-gold/20" />
                <div className="relative flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold-soft">
                    <VisionIcon name={step.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-ivory-dim">
                      Stage {index + 1}
                    </p>
                    <h2 className="font-display text-3xl tracking-[0.12em] text-ivory">
                      {step.label}
                    </h2>
                  </div>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-ivory-muted">
                  {step.copy}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </PageShell>

      {/* Vision path + Core purpose — poster two-column composition */}
      <PageShell className="pt-4">
        <div className="grid gap-10 xl:grid-cols-[1.15fr_0.85fr]">
          <FadeIn>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-soft">
                Our Long-Term Vision Path
              </p>
              <h2 className="mt-3 font-display text-4xl text-ivory md:text-5xl">
                Twelve phases from foundation to global standard.
              </h2>
              <p className="mt-4 max-w-xl text-ivory-muted">
                A sequenced path for Seemanchal — from financial base and clinics to medical city,
                frontier health, and world-class care.
              </p>

              <ol className="relative mt-10 space-y-0">
                <div
                  aria-hidden
                  className="absolute bottom-4 left-[1.35rem] top-4 w-px bg-gradient-to-b from-gold/70 via-emerald/50 to-gold/40"
                />
                {VISION_PHASES.map((item, index) => (
                  <li
                    key={item.phase}
                    className="relative grid grid-cols-[2.7rem_1fr] gap-4 py-3.5"
                  >
                    <span className="relative z-10 mt-0.5 grid h-11 w-11 place-items-center rounded-full border border-gold/45 bg-forest text-gold-soft shadow-gold">
                      <VisionIcon name={item.icon} className="h-4 w-4" />
                    </span>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-gold/30 hover:bg-white/[0.05]">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-soft">
                          Phase {String(item.phase).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-xl text-ivory">{item.title}</h3>
                      </div>
                      <p className="mt-1 text-sm text-ivory-muted">{item.copy}</p>
                      {index === VISION_PHASES.length - 1 ? null : (
                        <span className="sr-only">Continues to next phase</span>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <aside className="xl:sticky xl:top-28">
              <div className="overflow-hidden rounded-[2rem] border border-emerald/30 bg-gradient-to-b from-forest via-forest-deep to-void-soft p-7 shadow-glass md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft">
                  Our Core Purpose
                </p>
                <h2 className="mt-3 font-display text-3xl text-ivory md:text-4xl">
                  Why SHIPLA exists.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ivory-muted">
                  Healthcare, education, entrepreneurship, AI, community reform, and sustainable
                  regional development — rooted in Seemanchal.
                </p>

                <ul className="mt-8 space-y-4">
                  {CORE_PURPOSE.map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-emerald/40 bg-emerald/10 text-emerald-glow">
                        <VisionIcon name={item.icon} className="h-4 w-4" />
                      </span>
                      <div>
                        <h3 className="text-base font-medium text-ivory">{item.title}</h3>
                        <p className="mt-0.5 text-sm text-ivory-muted">{item.copy}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </FadeIn>
        </div>
      </PageShell>

      {/* Closing tagline — ONE VISION */}
      <PageShell className="pb-24 pt-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/30 bg-gradient-to-br from-forest/90 via-void-panel to-void p-8 md:p-12">
            <svg
              aria-hidden
              className="absolute left-0 right-0 top-6 h-10 w-full opacity-40"
              viewBox="0 0 800 40"
              preserveAspectRatio="none"
            >
              <path
                d="M0 20 H120 L140 8 L160 32 L180 12 L200 28 L220 20 H340 L360 6 L380 34 L400 10 L420 30 L440 20 H800"
                fill="none"
                stroke="#d4af37"
                strokeWidth="2"
                className="animate-pulse-soft"
              />
            </svg>

            <p className="relative mt-8 text-center text-xs uppercase tracking-[0.28em] text-gold-soft md:mt-10">
              {FOUNDER.tagline}
            </p>

            <div className="relative mt-10 grid gap-5 md:grid-cols-3">
              {FOUNDER.pillars.map((pillar) => (
                <div key={pillar.id} className="text-center md:text-left">
                  <span className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full border border-gold/35 bg-gold/10 text-gold-soft md:mx-0">
                    <VisionIcon name={pillar.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-2xl text-ivory">{pillar.label}</h3>
                  <p className="mt-2 text-sm text-ivory-muted">{pillar.detail}</p>
                </div>
              ))}
            </div>

            <div className="relative mt-10 h-px w-full bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
            <p className="relative mt-6 text-center text-sm text-ivory-dim">
              Profile Patency by {FOUNDER.name} · {FOUNDER.fullName}
            </p>
          </div>
        </FadeIn>
      </PageShell>
    </div>
  );
}
