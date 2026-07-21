import { ModulePanel } from "@/components/os/module-widgets";
import { GlassCard } from "@/components/ui/glass-card";

export default function AdminModulePage() {
  return (
    <div>
      <h2 className="font-display text-4xl text-ivory">Administrator</h2>
      <p className="mt-3 max-w-2xl text-ivory-muted">
        OAuth, JWT, RBAC, 2FA, audit logs, encryption, device management, and privacy-by-design
        controls for HealthOS governance.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          ["Auth", "OAuth · JWT · Passkeys · 2FA"],
          ["Access", "RBAC · role dashboards · scopes"],
          ["Trust", "Audit · encryption · device posture"],
        ].map(([title, copy]) => (
          <GlassCard key={title} className="p-5">
            <h3 className="font-display text-2xl text-ivory">{title}</h3>
            <p className="mt-2 text-sm text-ivory-muted">{copy}</p>
          </GlassCard>
        ))}
      </div>

      <ModulePanel
        title="Platform controls"
        items={[
          { title: "Audit Logs", copy: "Immutable trails across clinical and admin actions." },
          { title: "Device Management", copy: "Trusted device inventory and revocation." },
          { title: "Developer Console", copy: "APIs, webhooks, sandboxes, and extensions." },
          { title: "Compliance Posture", copy: "HIPAA/GDPR-aware architecture checklists." },
        ]}
      />
    </div>
  );
}
