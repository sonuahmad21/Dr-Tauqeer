import { ModulePanel, WidgetGrid } from "@/components/os/module-widgets";
import { ROLE_WIDGETS } from "@/features/os/nav";

export default function DoctorModulePage() {
  return (
    <div>
      <h2 className="font-display text-4xl text-ivory">Doctor Module</h2>
      <p className="mt-3 max-w-2xl text-ivory-muted">
        Schedule, queue, video consults, clinical notes, AI assistant, imaging, orders, teaching,
        and analytics — designed for calm clinical flow.
      </p>
      <div className="mt-8">
        <WidgetGrid widgets={ROLE_WIDGETS.doctor} />
      </div>
      <ModulePanel
        title="Clinical workspace"
        items={[
          {
            title: "Patient Queue",
            copy: "Triage-aware queue with acuity, wait time, and readiness signals.",
          },
          {
            title: "AI Clinical Assistant",
            copy: "Differential support, guideline recall, and risk flags.",
          },
          {
            title: "AI Scribe",
            copy: "Ambient documentation into structured clinical notes.",
          },
          {
            title: "Medical Imaging",
            copy: "Viewer-ready studies with AI radiology overlays.",
          },
          {
            title: "Orders",
            copy: "Labs, meds, referrals, and care pathways in one composer.",
          },
          {
            title: "Teaching",
            copy: "Attach cases to education tracks for students and residents.",
          },
        ]}
      />
    </div>
  );
}
