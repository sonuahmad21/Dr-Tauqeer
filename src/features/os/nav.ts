export type OsNavItem = {
  href: string;
  label: string;
};

export const OS_NAV: OsNavItem[] = [
  { href: "/os", label: "Command" },
  { href: "/os/patient", label: "Patient" },
  { href: "/os/doctor", label: "Doctor" },
  { href: "/os/hospital", label: "Hospital" },
  { href: "/os/ai", label: "AI Fabric" },
  { href: "/os/research", label: "Research" },
  { href: "/os/education", label: "Education" },
  { href: "/os/planetary", label: "Planetary" },
  { href: "/os/space", label: "Space" },
  { href: "/os/admin", label: "Admin" },
];

export type Widget = {
  title: string;
  value: string;
  detail: string;
};

export const ROLE_WIDGETS: Record<string, Widget[]> = {
  patient: [
    { title: "Next visit", value: "Thu 10:30", detail: "Telemedicine · Dr. Ahmad" },
    { title: "Health score", value: "86", detail: "Wearables + labs synced" },
    { title: "Wallet", value: "Active", detail: "Insurance + prescriptions" },
    { title: "AI Doctor", value: "Ready", detail: "Ask symptoms or guidance" },
  ],
  doctor: [
    { title: "Today", value: "14", detail: "Appointments in queue" },
    { title: "Video", value: "3 live", detail: "Consult rooms open" },
    { title: "AI Scribe", value: "On", detail: "Notes drafting in real time" },
    { title: "Imaging", value: "7", detail: "Studies awaiting review" },
  ],
  hospital: [
    { title: "Beds", value: "82%", detail: "Occupancy across wards" },
    { title: "OT", value: "4 active", detail: "Theatres in session" },
    { title: "ICU", value: "11", detail: "Critical care patients" },
    { title: "Ambulance", value: "2 en route", detail: "Emergency grid online" },
  ],
  default: [
    { title: "System", value: "Nominal", detail: "All HealthOS clusters healthy" },
    { title: "Regions", value: "Seemanchal", detail: "Expanding planetary mesh" },
    { title: "AI Fabric", value: "Online", detail: "12 clinical models warm" },
    { title: "Security", value: "Hardened", detail: "RBAC + audit streaming" },
  ],
};
