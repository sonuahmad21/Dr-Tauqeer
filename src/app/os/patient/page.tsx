import { ModulePanel, WidgetGrid } from "@/components/os/module-widgets";
import { ROLE_WIDGETS } from "@/features/os/nav";

export default function PatientModulePage() {
  return (
    <div>
      <h2 className="font-display text-4xl text-ivory">Patient Module</h2>
      <p className="mt-3 max-w-2xl text-ivory-muted">
        Appointments, telemedicine, timeline, prescriptions, wallet, wearables, vaccination, and
        emergency — one continuous care identity.
      </p>
      <div className="mt-8">
        <WidgetGrid widgets={ROLE_WIDGETS.patient} />
      </div>
      <ModulePanel
        title="Care continuum"
        items={[
          {
            title: "Appointments",
            copy: "Book, reschedule, and track in-person or virtual visits.",
          },
          {
            title: "Health Timeline",
            copy: "Longitudinal history across labs, imaging, vitals, and notes.",
          },
          {
            title: "Telemedicine",
            copy: "Secure video rooms with AI pre-visit summaries.",
          },
          {
            title: "Prescriptions",
            copy: "E-prescribe fulfillment, refills, and pharmacy routing.",
          },
          {
            title: "Health Wallet",
            copy: "Encrypted documents, insurance, and payment rails.",
          },
          {
            title: "Emergency",
            copy: "One-tap escalation with location and critical profile share.",
          },
        ]}
      />
    </div>
  );
}
