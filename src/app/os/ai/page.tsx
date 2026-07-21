import { ModulePanel } from "@/components/os/module-widgets";
import { GlassCard } from "@/components/ui/glass-card";

export default function AiModulePage() {
  return (
    <div>
      <h2 className="font-display text-4xl text-ivory">AI Fabric</h2>
      <p className="mt-3 max-w-2xl text-ivory-muted">
        AI Doctor, modality specialists, research copilots, and medical knowledge — one governed
        intelligence layer.
      </p>

      <GlassCard className="mt-8 p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.18em] text-emerald-soft">AI Doctor</p>
        <h3 className="mt-3 font-display text-3xl text-ivory">Ask with clinical context</h3>
        <div className="mt-5 rounded-3xl border border-white/10 bg-void/40 p-4 text-sm text-ivory-muted">
          “Summarize today’s queue risks and draft a follow-up plan for hypertensive patients in
          Araria outreach.”
        </div>
        <p className="mt-3 text-xs text-ivory-dim">
          Demo prompt surface — model routing, audit, and safety layers are architected for
          production.
        </p>
      </GlassCard>

      <ModulePanel
        title="Specialist models"
        items={[
          { title: "AI Radiology", copy: "Detection, prioritization, and report assistance." },
          { title: "AI Pathology", copy: "Slide intelligence and lab decision support." },
          { title: "AI Dermatology", copy: "Image triage with referral recommendations." },
          { title: "AI ECG", copy: "Rhythm and ischemia decision support." },
          { title: "AI Mental Health", copy: "Screening, escalation, and longitudinal support." },
          { title: "AI Nutrition", copy: "Personalized plans linked to labs and culture." },
          { title: "Voice AI", copy: "Hands-free clinical capture and command." },
          { title: "Medical Search", copy: "Evidence-ranked knowledge across SHIPLA corpora." },
        ]}
      />
    </div>
  );
}
