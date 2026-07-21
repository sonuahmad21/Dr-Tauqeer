import Link from "next/link";

export function MarketingFooter() {
  return (
    <footer className="border-t border-white/10 bg-void-soft/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-display text-3xl tracking-[0.08em] text-ivory">SHIPLA</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory-muted">
            Seemanchal Health Infrastructure & Planetary Life Advancement by Dr. MD Tauqeer
            Ahmad — DMTA. A Healthcare Operating System for life on Earth and beyond.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-soft">Platform</p>
          <ul className="mt-4 space-y-2 text-sm text-ivory-muted">
            <li>
              <Link href="/login">Enter HealthOS</Link>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#ecosystem">Ecosystem</a>
            </li>
            <li>
              <a href="#research">Research</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-soft">Future</p>
          <ul className="mt-4 space-y-2 text-sm text-ivory-muted">
            <li>
              <a href="#planetary">Planetary Health</a>
            </li>
            <li>
              <a href="#space">Space Medicine</a>
            </li>
            <li>
              <a href="#city">Medical City</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 px-5 py-5 text-center text-xs text-ivory-dim md:px-8">
        © {new Date().getFullYear()} SHIPLA by DMTA · Version 1.0 · Built for the future of care
      </div>
    </footer>
  );
}
