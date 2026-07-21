export const USER_ROLES = [
  "guest",
  "citizen",
  "patient",
  "doctor",
  "nurse",
  "medical_student",
  "researcher",
  "professor",
  "hospital",
  "clinic",
  "laboratory",
  "pharmacy",
  "university",
  "public_health",
  "emergency",
  "administrator",
  "developer",
] as const;

export type UserRole = (typeof USER_ROLES)[number];

export type RoleMeta = {
  id: UserRole;
  label: string;
  description: string;
  home: string;
};

export const ROLE_META: Record<UserRole, RoleMeta> = {
  guest: {
    id: "guest",
    label: "Guest",
    description: "Explore public knowledge and planetary health signals.",
    home: "/os",
  },
  citizen: {
    id: "citizen",
    label: "Citizen",
    description: "Community wellness, prevention, and civic health tools.",
    home: "/os",
  },
  patient: {
    id: "patient",
    label: "Patient",
    description: "Care timeline, telemedicine, wallet, and AI Doctor.",
    home: "/os/patient",
  },
  doctor: {
    id: "doctor",
    label: "Doctor",
    description: "Schedule, queue, clinical AI, and teaching suite.",
    home: "/os/doctor",
  },
  nurse: {
    id: "nurse",
    label: "Nurse",
    description: "Ward flow, vitals, medication rounds, and triage.",
    home: "/os/doctor",
  },
  medical_student: {
    id: "medical_student",
    label: "Medical Student",
    description: "Simulation labs, AI tutor, and clinical learning paths.",
    home: "/os/education",
  },
  researcher: {
    id: "researcher",
    label: "Researcher",
    description: "Trials, genomics, open science, and AI research.",
    home: "/os/research",
  },
  professor: {
    id: "professor",
    label: "Professor",
    description: "Curriculum, cohorts, assessment, and mentorship.",
    home: "/os/education",
  },
  hospital: {
    id: "hospital",
    label: "Hospital",
    description: "Beds, OT, ICU, inventory, finance, and analytics.",
    home: "/os/hospital",
  },
  clinic: {
    id: "clinic",
    label: "Clinic",
    description: "Outpatient operations and community care networks.",
    home: "/os/hospital",
  },
  laboratory: {
    id: "laboratory",
    label: "Laboratory",
    description: "Diagnostics workflows and AI pathology pipelines.",
    home: "/os/ai",
  },
  pharmacy: {
    id: "pharmacy",
    label: "Pharmacy",
    description: "Dispensing, inventory, and medicine logistics.",
    home: "/os/hospital",
  },
  university: {
    id: "university",
    label: "University",
    description: "Medical college systems and digital classrooms.",
    home: "/os/education",
  },
  public_health: {
    id: "public_health",
    label: "Public Health",
    description: "Surveillance, campaigns, and population intelligence.",
    home: "/os/planetary",
  },
  emergency: {
    id: "emergency",
    label: "Emergency",
    description: "Dispatch, disaster medicine, and rapid response.",
    home: "/os/hospital",
  },
  administrator: {
    id: "administrator",
    label: "Administrator",
    description: "Governance, audit, access control, and system health.",
    home: "/os/admin",
  },
  developer: {
    id: "developer",
    label: "Developer",
    description: "APIs, sandboxes, integrations, and HealthOS extensions.",
    home: "/os/admin",
  },
};

export type SessionUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};
