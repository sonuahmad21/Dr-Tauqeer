import { ModulePanel } from "@/components/os/module-widgets";

export default function SpaceModulePage() {
  return (
    <div>
      <h2 className="font-display text-4xl text-ivory">Space Medicine</h2>
      <p className="mt-3 max-w-2xl text-ivory-muted">
        Space physiology, astronaut health, remote diagnostics, satellite health, extreme
        environments, microgravity research, and future habitats.
      </p>
      <ModulePanel
        title="Beyond Earth"
        items={[
          { title: "Space Physiology", copy: "Adaptation models for microgravity and radiation." },
          { title: "Astronaut Health", copy: "Longitudinal crew medical systems." },
          { title: "Remote Diagnostics", copy: "Latency-aware clinical workflows." },
          { title: "Satellite Health", copy: "Orbital data for terrestrial public health." },
          { title: "Extreme Environments", copy: "Lessons for deserts, mountains, and disasters." },
          { title: "Future Habitats", copy: "Closed-loop care for off-world settlements." },
        ]}
      />
    </div>
  );
}
