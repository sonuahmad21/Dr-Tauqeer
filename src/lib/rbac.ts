import type { UserRole } from "@/types/roles";

export type Permission =
  | "view:public"
  | "view:patient"
  | "manage:appointments"
  | "manage:clinical"
  | "manage:hospital"
  | "use:ai"
  | "view:research"
  | "view:education"
  | "view:planetary"
  | "view:space"
  | "admin:system";

const BASE: Permission[] = ["view:public", "view:planetary"];

const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  guest: BASE,
  citizen: [...BASE, "view:education"],
  patient: [...BASE, "view:patient", "manage:appointments", "use:ai"],
  doctor: [...BASE, "view:patient", "manage:clinical", "use:ai", "view:research", "view:education"],
  nurse: [...BASE, "view:patient", "manage:clinical", "use:ai"],
  medical_student: [...BASE, "view:education", "use:ai", "view:research"],
  researcher: [...BASE, "view:research", "use:ai", "view:space"],
  professor: [...BASE, "view:education", "view:research", "use:ai"],
  hospital: [...BASE, "manage:hospital", "view:patient", "use:ai"],
  clinic: [...BASE, "manage:hospital", "view:patient", "manage:appointments"],
  laboratory: [...BASE, "use:ai", "manage:clinical"],
  pharmacy: [...BASE, "manage:hospital", "view:patient"],
  university: [...BASE, "view:education", "view:research"],
  public_health: [...BASE, "view:planetary", "view:research", "view:space"],
  emergency: [...BASE, "manage:hospital", "manage:clinical", "use:ai"],
  administrator: [
    ...BASE,
    "view:patient",
    "manage:appointments",
    "manage:clinical",
    "manage:hospital",
    "use:ai",
    "view:research",
    "view:education",
    "view:space",
    "admin:system",
  ],
  developer: [
    ...BASE,
    "use:ai",
    "view:research",
    "view:education",
    "view:space",
    "admin:system",
  ],
};

export function can(role: UserRole, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role].includes(permission);
}

export function permissionsFor(role: UserRole): Permission[] {
  return ROLE_PERMISSIONS[role];
}
