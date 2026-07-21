import { ModulePanel } from "@/components/os/module-widgets";

export default function EducationModulePage() {
  return (
    <div>
      <h2 className="font-display text-4xl text-ivory">Education</h2>
      <p className="mt-3 max-w-2xl text-ivory-muted">
        Medical universities, nursing programs, simulation labs, digital libraries, examinations,
        certification, virtual classrooms, and AI tutors.
      </p>
      <ModulePanel
        title="Learning OS"
        items={[
          { title: "Medical University", copy: "Programs, cohorts, and faculty workspaces." },
          { title: "Simulation Labs", copy: "Case-based drills with performance analytics." },
          { title: "Digital Library", copy: "Curated evidence and multimedia learning." },
          { title: "Examinations", copy: "Secure assessment with competency mapping." },
          { title: "Virtual Classroom", copy: "Live and async teaching with presence tools." },
          { title: "AI Tutor", copy: "Adaptive coaching for students and residents." },
        ]}
      />
    </div>
  );
}
