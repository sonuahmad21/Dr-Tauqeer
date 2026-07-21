"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { LivingEarthBackground } from "@/components/background/living-earth-background";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { roleHome, useAuthStore } from "@/store/auth-store";
import { ROLE_META, USER_ROLES, type UserRole } from "@/types/roles";
import { cn } from "@/lib/utils";

const providers = ["Google", "Apple", "Microsoft", "Email", "OTP", "Magic Link"] as const;

export default function LoginPage() {
  const router = useRouter();
  const signIn = useAuthStore((s) => s.signIn);
  const [name, setName] = useState("Dr. MD Tauqeer Ahmad");
  const [email, setEmail] = useState("care@shipla.health");
  const [role, setRole] = useState<UserRole>("doctor");
  const [provider, setProvider] = useState<(typeof providers)[number]>("Email");
  const [status, setStatus] = useState("");

  const roleMeta = useMemo(() => ROLE_META[role], [role]);

  const onEnter = () => {
    signIn({ name, email, role });
    setStatus("Authenticated · routing into HealthOS");
    router.push(roleHome(role));
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center px-5 py-16">
      <LivingEarthBackground />
      <div className="pointer-events-none absolute inset-0 bg-aurora-beam" />

      <GlassCard className="glass-edge relative z-10 w-full max-w-xl p-7 md:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-soft">
          SHIPLA Access
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-ivory md:text-5xl">
          Enter HealthOS
        </h1>
        <p className="mt-3 text-sm text-ivory-muted">
          Premium, biometric-ready authentication with role-aware workspaces.
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {providers.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setProvider(item)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs transition",
                provider === item
                  ? "border-emerald/50 bg-emerald/15 text-emerald-glow"
                  : "border-white/10 bg-white/5 text-ivory-muted hover:border-white/25",
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-7 grid gap-4">
          <label className="grid gap-2 text-sm text-ivory-muted">
            Full name
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-11 rounded-2xl border border-white/10 bg-white/5 px-4 text-ivory outline-none ring-emerald/40 focus:ring-2"
            />
          </label>
          <label className="grid gap-2 text-sm text-ivory-muted">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 rounded-2xl border border-white/10 bg-white/5 px-4 text-ivory outline-none ring-emerald/40 focus:ring-2"
            />
          </label>
          <label className="grid gap-2 text-sm text-ivory-muted">
            Role
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as UserRole)}
              className="h-11 rounded-2xl border border-white/10 bg-void-panel px-4 text-ivory outline-none ring-emerald/40 focus:ring-2"
            >
              {USER_ROLES.map((item) => (
                <option key={item} value={item}>
                  {ROLE_META[item].label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-sm font-medium text-ivory">{roleMeta.label}</p>
          <p className="mt-1 text-sm text-ivory-muted">{roleMeta.description}</p>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Button size="lg" onClick={onEnter}>
            Continue with {provider}
          </Button>
          <Button
            size="lg"
            variant="ghost"
            onClick={() => {
              setStatus("Biometric challenge ready (Passkey / WebAuthn placeholder)");
            }}
          >
            Use biometrics
          </Button>
        </div>
        {status ? <p className="mt-4 text-sm text-emerald-soft">{status}</p> : null}
      </GlassCard>
    </div>
  );
}
