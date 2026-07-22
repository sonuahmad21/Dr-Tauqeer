import Link from "next/link";
import { ShiplaMark } from "@/components/brand/shipla-mark";
import { FOUNDER } from "@/features/vision/content";

export function MarketingFooter() {
  return (
    <footer className="border-t border-white/10 bg-void-soft/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-[1.5fr_1fr_1fr] md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <ShiplaMark size="sm" />
            <p className="font-display text-3xl tracking-[0.08em] text-ivory">SHIPLA</p>
          </div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory-muted">
            {FOUNDER.fullName} by {FOUNDER.name} — {FOUNDER.org}. {FOUNDER.motto}.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-gold-soft">{FOUNDER.tagline}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-soft">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-ivory-muted">
            <li>
              <Link href="/#vision">Vision</Link>
            </li>
            <li>
              <Link href="/#vision-path">Vision Path</Link>
            </li>
            <li>
              <Link href="/#purpose">Core Purpose</Link>
            </li>
            <li>
              <Link href="/profile">Founder Profile</Link>
            </li>
            <li>
              <Link href="/login">Enter Dashboard</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-soft">Pillars</p>
          <ul className="mt-4 space-y-2 text-sm text-ivory-muted">
            {FOUNDER.pillars.map((pillar) => (
              <li key={pillar.id}>{pillar.label}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 px-5 py-5 text-center text-xs text-ivory-dim md:px-8">
        © {new Date().getFullYear()} SHIPLA by DMTA · {FOUNDER.legalForm} · Profile Patency by{" "}
        {FOUNDER.name}
      </div>
    </footer>
  );
}
