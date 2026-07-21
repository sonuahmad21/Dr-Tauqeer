"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#features", label: "Features" },
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#research", label: "Research" },
  { href: "#planetary", label: "Planetary" },
  { href: "#contact", label: "Contact" },
];

export function MarketingHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-void/55 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-emerald via-ocean to-gold shadow-glow">
            <span className="absolute inset-[28%] rounded-full bg-void" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl tracking-[0.08em] text-ivory">SHIPLA</span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-ivory-dim">
              HealthOS · DMTA
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={pathname === "/" ? link.href : `/${link.href}`}
              className={cn(
                "text-sm text-ivory-muted transition hover:text-ivory",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Enter OS
            </Button>
          </Link>
          <Link href="/login" className="hidden sm:block">
            <Button size="sm">Launch HealthOS</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
