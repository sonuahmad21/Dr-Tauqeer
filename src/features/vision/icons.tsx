import {
  Activity,
  BarChart3,
  Brain,
  Briefcase,
  Building2,
  FlaskConical,
  Globe2,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  Home,
  Hospital,
  Landmark,
  Leaf,
  Network,
  Rocket,
  Share2,
  Sprout,
  Star,
  Users,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import type { VisionIconName } from "@/features/vision/content";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<VisionIconName, LucideIcon> = {
  sprout: Sprout,
  chart: BarChart3,
  star: Star,
  "heart-pulse": HeartPulse,
  graduation: GraduationCap,
  briefcase: Briefcase,
  brain: Brain,
  users: Users,
  leaf: Leaf,
  globe: Globe2,
  home: Home,
  building: Building2,
  warehouse: Warehouse,
  clinic: Activity,
  flask: FlaskConical,
  hospital: Hospital,
  network: Network,
  city: Landmark,
  skyline: Building2,
  rocket: Rocket,
  "heart-handshake": HeartHandshake,
};

export function VisionIcon({
  name,
  className,
}: {
  name: VisionIconName;
  className?: string;
}) {
  const Icon = ICON_MAP[name] ?? Share2;
  return <Icon aria-hidden className={cn("h-5 w-5", className)} strokeWidth={1.6} />;
}
