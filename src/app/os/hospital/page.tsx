import { ModulePanel, WidgetGrid } from "@/components/os/module-widgets";
import { ROLE_WIDGETS } from "@/features/os/nav";

export default function HospitalModulePage() {
  return (
    <div>
      <h2 className="font-display text-4xl text-ivory">Hospital Module</h2>
      <p className="mt-3 max-w-2xl text-ivory-muted">
        Departments, beds, inventory, billing, HR, ambulance, OT, ICU, devices, and command
        analytics — operations without the look of legacy HMS.
      </p>
      <div className="mt-8">
        <WidgetGrid widgets={ROLE_WIDGETS.hospital} />
      </div>
      <ModulePanel
        title="Operations fabric"
        items={[
          { title: "Departments", copy: "Living org map with capacity and staffing heat." },
          { title: "Inventory", copy: "Medicines, devices, and consumables with predictive restock." },
          { title: "Billing & Finance", copy: "Transparent ledgers, claims, and revenue intelligence." },
          { title: "OT & ICU", copy: "Theatre boards and critical care telemetry." },
          { title: "Ambulance", copy: "Dispatch graph integrated with emergency services." },
          { title: "Devices", copy: "IoMT registry, uptime, and calibration status." },
        ]}
      />
    </div>
  );
}
