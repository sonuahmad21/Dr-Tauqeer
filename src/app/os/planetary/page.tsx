import { ModulePanel } from "@/components/os/module-widgets";

export default function PlanetaryModulePage() {
  return (
    <div>
      <h2 className="font-display text-4xl text-ivory">Planetary Health</h2>
      <p className="mt-3 max-w-2xl text-ivory-muted">
        Climate & health, environmental monitoring, One Health, water, air, nutrition, surveillance,
        disaster medicine, and green hospital carbon analytics.
      </p>
      <ModulePanel
        title="Earth systems"
        items={[
          { title: "Climate & Health", copy: "Heat, flood, and vector risk intelligence." },
          { title: "One Health", copy: "Human–animal–environment signals in one graph." },
          { title: "Disease Surveillance", copy: "Early warning for Seemanchal and partners." },
          { title: "Disaster Medicine", copy: "Surge planning and field response playbooks." },
          { title: "Sustainable Healthcare", copy: "Green operations and waste reduction." },
          { title: "Carbon Analytics", copy: "Facility emissions with reduction pathways." },
        ]}
      />
    </div>
  );
}
