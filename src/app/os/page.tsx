"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { WidgetGrid } from "@/components/os/module-widgets";
import { ROLE_WIDGETS } from "@/features/os/nav";
import { permissionsFor } from "@/lib/rbac";
import { useAuthStore } from "@/store/auth-store";
import { ROLE_META } from "@/types/roles";

export default function OsHomePage() {
  const user = useAuthStore((s) => s.user);
  const role = user?.role ?? "guest";
  const widgets =
    ROLE_WIDGETS[role] ??
    ROLE_WIDGETS.default;
  const permissions = permissionsFor(role);

  return (
    <div className="space-y-8">
      <GlassCard className="p-7 md:p-9">
        <p className="text-xs uppercase tracking-[0.2em] text-gold-soft">Welcome</p>
        <h2 className="mt-3 font-display text-4xl text-ivory md:text-5xl">
          {user ? `Good day, ${user.name}` : "Explore as Guest"}
        </h2>
        <p className="mt-3 max-w-2xl text-ivory-muted">
          {ROLE_META[role].description} This is your role-aware HealthOS surface — spatial,
          private, and ready to scale from Seemanchal to planetary operations.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={ROLE_META[role].home}>
            <Button>Open primary workspace</Button>
          </Link>
          <Link href="/os/ai">
            <Button variant="ghost">Launch AI Fabric</Button>
          </Link>
        </div>
      </GlassCard>

      <WidgetGrid widgets={widgets} />

      <GlassCard className="p-6">
        <h3 className="font-display text-2xl text-ivory">Active permissions</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {permissions.map((permission) => (
            <span
              key={permission}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-ivory-muted"
            >
              {permission}
            </span>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
