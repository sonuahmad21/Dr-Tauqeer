import Link from "next/link";
import { ShiplaMark } from "@/components/brand/shipla-mark";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { PageShell, SectionHeading } from "@/components/ui/section-heading";
import {
  CORE_PURPOSE,
  FOUNDER,
  GROWTH_PATH,
  VISION_PHASES,
} from "@/features/vision/content";
import { VisionIcon } from "@/features/vision/icons";

export default function LandingPage() {
  return (
    <>
      {/* Hero — one composition: brand, motto, sentence, CTAs, living earth */}
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-28 md:justify-center md:pb-24 md:pt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(212,175,55,0.14),transparent_50%),radial-gradient(ellipse_at_80%_70%,rgba(16,185,129,0.12),transparent_45%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[42vh] bg-gradient-to-t from-void via-void/70 to-transparent"
        />

        <PageShell className="relative z-10 py-0">
          <FadeIn>
            <div className="max-w-5xl">
              <div className="mb-8 flex items-center gap-4 md:mb-10">
                <ShiplaMark size="lg" className="animate-float" />
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-soft">
                  {FOUNDER.org} · {FOUNDER.legalForm}
                </p>
              </div>

              <h1 className="font-display text-[clamp(4.2rem,14vw,9.5rem)] leading-[0.86] tracking-[-0.045em] text-ivory">
                SHIPLA
              </h1>

              <p className="mt-6 max-w-xl font-display text-2xl leading-snug text-gold-soft md:text-3xl lg:text-4xl">
                {FOUNDER.motto}
              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ivory-muted md:text-lg">
                {FOUNDER.fullName} — a self-sustaining healthcare, education, and innovation
                ecosystem rooted in Seemanchal.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/login">
                  <Button size="lg">Enter Dashboard</Button>
                </Link>
                <a href="#vision">
                  <Button size="lg" variant="ghost">
                    Explore the Vision
                  </Button>
                </a>
              </div>
            </div>
          </FadeIn>
        </PageShell>
      </section>

      {/* Vision — one job */}
      <PageShell id="vision" className="scroll-mt-24">
        <FadeIn>
          <SectionHeading
            eyebrow="Our Vision"
            title="Transform Seemanchal into a living healthcare ecosystem."
            description={FOUNDER.vision}
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-3">
            {FOUNDER.pillars.map((pillar) => (
              <div key={pillar.id} className="relative">
                <span className="mb-4 grid h-12 w-12 place-items-center rounded-full border border-gold/35 bg-gold/10 text-gold-soft">
                  <VisionIcon name={pillar.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display text-2xl text-ivory md:text-3xl">{pillar.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory-muted">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </PageShell>

      {/* EXIST → GOOD → GREAT — journey, not cards */}
      <PageShell id="growth" className="scroll-mt-24">
        <FadeIn>
          <SectionHeading
            eyebrow="How we grow"
            title="Exist first. Then good. Then great."
            description={`“${FOUNDER.quote}”`}
          />
        </FadeIn>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent md:block"
          />
          <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
            {GROWTH_PATH.map((step, index) => (
              <FadeIn key={step.id} delay={0.08 * index}>
                <li className="relative">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid h-14 w-14 place-items-center rounded-full border border-gold/45 bg-forest text-gold-soft shadow-gold">
                      <VisionIcon name={step.icon} className="h-6 w-6" />
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-ivory-dim">
                      Stage {index + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-4xl tracking-[0.14em] text-ivory md:text-5xl">
                    {step.label}
                  </h3>
                  <p className="mt-4 max-w-sm text-base leading-relaxed text-ivory-muted">
                    {step.copy}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </PageShell>

      {/* 12 phases — timeline journey */}
      <PageShell id="vision-path" className="scroll-mt-24">
        <FadeIn>
          <SectionHeading
            eyebrow="Long-term vision path"
            title="Twelve phases. One unstoppable journey."
            description="From residence and clinics to medical city, frontier health, and global-standard care — sequenced for Seemanchal."
          />
        </FadeIn>

        <FadeIn delay={0.08}>
          <ol className="relative mt-12 space-y-0">
            <div
              aria-hidden
              className="absolute bottom-4 left-[1.35rem] top-4 w-px bg-gradient-to-b from-gold/70 via-emerald/45 to-gold/35"
            />
            {VISION_PHASES.map((item) => (
              <li
                key={item.phase}
                className="relative grid grid-cols-[2.7rem_1fr] items-start gap-4 py-3.5 md:grid-cols-[2.7rem_minmax(0,12rem)_1fr] md:gap-6"
              >
                <span className="relative z-10 mt-0.5 grid h-11 w-11 place-items-center rounded-full border border-gold/45 bg-forest text-gold-soft">
                  <VisionIcon name={item.icon} className="h-4 w-4" />
                </span>
                <div className="pt-2 md:pt-2.5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-soft">
                    Phase {String(item.phase).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 font-display text-xl text-ivory md:text-2xl">{item.title}</h3>
                </div>
                <p className="col-start-2 pt-0 text-sm leading-relaxed text-ivory-muted md:col-start-3 md:pt-3 md:text-base">
                  {item.copy}
                </p>
              </li>
            ))}
          </ol>
        </FadeIn>

        <div className="mt-10">
          <Link href="/profile">
            <Button variant="ghost">Open founder vision board</Button>
          </Link>
        </div>
      </PageShell>

      {/* Core purpose — editorial list */}
      <PageShell id="purpose" className="scroll-mt-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <FadeIn>
            <SectionHeading
              eyebrow="Our core purpose"
              title="Why SHIPLA exists."
              description="Healthcare, education, entrepreneurship, AI, community reform, and sustainable regional development — rooted in Seemanchal."
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <ul className="space-y-0 divide-y divide-white/10 border-y border-white/10">
              {CORE_PURPOSE.map((item) => (
                <li key={item.title} className="flex gap-4 py-5">
                  <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-emerald/40 bg-emerald/10 text-emerald-glow">
                    <VisionIcon name={item.icon} className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-ivory md:text-2xl">{item.title}</h3>
                    <p className="mt-1 text-sm text-ivory-muted md:text-base">{item.copy}</p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </PageShell>

      {/* Closing — brand + CTA */}
      <PageShell id="contact" className="pb-24 pt-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/25 bg-gradient-to-br from-forest/90 via-void-panel to-void px-8 py-12 md:px-14 md:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-emerald/10 blur-3xl"
            />

            <p className="relative text-center text-xs uppercase tracking-[0.28em] text-gold-soft">
              {FOUNDER.tagline}
            </p>
            <h2 className="relative mx-auto mt-6 max-w-3xl text-center font-display text-4xl leading-tight text-ivory md:text-6xl">
              {FOUNDER.motto}
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-center text-ivory-muted">
              Enter the SHIPLA dashboard — or walk the full founder vision path with{" "}
              {FOUNDER.name}.
            </p>

            <div className="relative mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="/login">
                <Button size="lg" variant="gold">
                  Enter the SHIPLA Dashboard
                </Button>
              </Link>
              <Link href="/profile">
                <Button size="lg" variant="ghost">
                  Founder Profile
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </PageShell>
    </>
  );
}
