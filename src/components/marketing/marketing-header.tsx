"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShiplaMark } from "@/components/brand/shipla-mark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#vision", label: "Vision" },
  { href: "/#growth", label: "Growth" },
  { href: "/#vision-path", label: "Path" },
  { href: "/#purpose", label: "Purpose" },
  { href: "/profile", label: "Founder" },
];

export function MarketingHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-void/55 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <ShiplaMark size="sm" />
          <span className="leading-none">
            <span className="block font-display text-xl tracking-[0.08em] text-ivory">SHIPLA</span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-ivory-dim">
              Healing · Inspiring
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => {
            const active = link.href === "/profile" && pathname === "/profile";
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm text-ivory-muted transition hover:text-ivory",
                  active && "text-gold-soft",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/login">
            <Button size="sm">Enter Dashboard</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
