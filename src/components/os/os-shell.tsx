"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { PropsWithChildren } from "react";
import { LivingEarthBackground } from "@/components/background/living-earth-background";
import { Button } from "@/components/ui/button";
import { OS_NAV } from "@/features/os/nav";
import { cn, initials } from "@/lib/utils";
import { useAuthStore } from "@/store/auth-store";
import { ROLE_META } from "@/types/roles";

export function OsShell({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const signOut = useAuthStore((s) => s.signOut);

  return (
    <div className="relative min-h-screen">
      <LivingEarthBackground />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-aurora-beam opacity-80" />

      <div className="mx-auto grid min-h-screen max-w-[1600px] lg:grid-cols-[260px_1fr]">
        <aside className="border-b border-white/10 bg-void/50 p-5 backdrop-blur-2xl lg:border-b-0 lg:border-r">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-emerald via-ocean to-gold">
              <span className="h-4 w-4 rounded-full bg-void" />
            </span>
            <span>
              <span className="block font-display text-lg tracking-[0.08em]">SHIPLA</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-ivory-dim">
                HealthOS
              </span>
            </span>
          </Link>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-emerald/20 font-display text-sm text-emerald-glow">
                {initials(user?.name ?? "Guest")}
              </span>
              <div>
                <p className="text-sm font-medium text-ivory">{user?.name ?? "Guest Explorer"}</p>
                <p className="text-xs text-ivory-dim">
                  {user ? ROLE_META[user.role].label : "Guest"}
                </p>
              </div>
            </div>
          </div>

          <nav className="mt-6 grid gap-1">
            {OS_NAV.map((item) => {
              const active =
                item.href === "/os" ? pathname === "/os" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-2xl px-3 py-2.5 text-sm transition",
                    active
                      ? "bg-emerald/15 text-emerald-glow"
                      : "text-ivory-muted hover:bg-white/5 hover:text-ivory",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 flex flex-col gap-2">
            <Button
              variant="ghost"
              onClick={() => {
                signOut();
                router.push("/login");
              }}
            >
              Sign out
            </Button>
            <Link href="/">
              <Button variant="ghost" className="w-full">
                Public surface
              </Button>
            </Link>
          </div>
        </aside>

        <div className="min-w-0">
          <header className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-5 md:px-8">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-soft">
                Digital headquarters
              </p>
              <h1 className="font-display text-2xl text-ivory md:text-3xl">SHIPLA Command</h1>
            </div>
            <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-ivory-muted md:block">
              Privacy by design · RBAC · Audit-ready
            </div>
          </header>
          <main className="px-5 py-8 md:px-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
