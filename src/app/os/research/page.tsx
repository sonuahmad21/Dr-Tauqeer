import { ModulePanel } from "@/components/os/module-widgets";

export default function ResearchModulePage() {
  return (
    <div>
      <h2 className="font-display text-4xl text-ivory">Research</h2>
      <p className="mt-3 max-w-2xl text-ivory-muted">
        Clinical trials, genomics, precision medicine, robotics, devices, biotechnology, and open
        science — built for institutes and international collaboration.
      </p>
      <ModulePanel
        title="Discovery mesh"
        items={[
          { title: "Clinical Trials", copy: "Protocol design, recruitment, and monitoring." },
          { title: "Genomics", copy: "Variant interpretation linked to care pathways." },
          { title: "Precision Medicine", copy: "Cohort insights to bedside decisions." },
          { title: "Medical Robotics", copy: "Simulation, telemetry, and safety analytics." },
          { title: "Open Science", copy: "Shared datasets with privacy-preserving access." },
          { title: "Innovation", copy: "Hubs for startups, NGOs, and university labs." },
        ]}
      />
    </div>
  );
}
