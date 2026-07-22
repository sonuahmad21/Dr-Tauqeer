export const FOUNDER = {
  name: "Dr. MD Tauqeer Ahmad",
  org: "DMTA",
  title: "Founder · Physician · HealthOS Architect",
  initiative: "SHIPLA",
  fullName:
    "Seemanchal Health Infrastructure & Planetary Life Advancement",
  motto: "Healing Today, Inspiring Tomorrow",
  quote: "Just make it exist first. You can make it good later.",
  vision:
    "To build a self-sustaining healthcare, education, and innovation ecosystem that transforms Seemanchal through compassionate care, economic empowerment, technology, and human development.",
  tagline: "ONE VISION. ONE PATH. LIMITLESS IMPACT.",
  legalForm: "Non-profit organisation",
  pillars: [
    {
      id: "healing",
      label: "Healing Lives",
      detail: "Compassionate clinical care for every family.",
      icon: "heart-handshake",
    },
    {
      id: "serving",
      label: "Serving People",
      detail: "Community-first access across Seemanchal.",
      icon: "users",
    },
    {
      id: "growing",
      label: "Growing Together",
      detail: "Shared prosperity through health and skills.",
      icon: "sprout",
    },
  ],
} as const;

export const GROWTH_PATH = [
  {
    id: "exist",
    label: "EXIST",
    copy: "Start small. Make it real. Let it exist.",
    icon: "sprout",
  },
  {
    id: "good",
    label: "GOOD",
    copy: "Improve every day. Build systems. Make it reliable.",
    icon: "chart",
  },
  {
    id: "great",
    label: "GREAT",
    copy: "Inspire many. Create lasting impact. Make it legendary.",
    icon: "star",
  },
] as const;

export const CORE_PURPOSE = [
  {
    title: "Affordable Healthcare Access",
    copy: "Quality care for every individual.",
    icon: "heart-pulse",
  },
  {
    title: "Education & Skill Development",
    copy: "Empowering minds. Building a better future.",
    icon: "graduation",
  },
  {
    title: "Job Creation & Entrepreneurship",
    copy: "Creating opportunities. Building self-reliance.",
    icon: "briefcase",
  },
  {
    title: "AI-Driven Medical Innovation",
    copy: "Smarter solutions. Better outcomes.",
    icon: "brain",
  },
  {
    title: "Community Welfare & Reforms",
    copy: "Stronger families. Stronger society.",
    icon: "users",
  },
  {
    title: "Sustainable Regional Development",
    copy: "Growing together. Preserving tomorrow.",
    icon: "leaf",
  },
  {
    title: "Global-Standard Healthcare from Seemanchal",
    copy: "Local roots. Global impact.",
    icon: "globe",
  },
] as const;

export const VISION_PHASES = [
  {
    phase: 1,
    title: "Residence & Financial Base",
    copy: "Strong foundation. Stable beginning.",
    icon: "home",
  },
  {
    phase: 2,
    title: "Commercial Rental Hub",
    copy: "Revenue generation. Sustainable growth.",
    icon: "building",
  },
  {
    phase: 3,
    title: "Godown & Logistics Network",
    copy: "Infrastructure strength. Supply chain backbone.",
    icon: "warehouse",
  },
  {
    phase: 4,
    title: "AI-Assisted Clinics",
    copy: "Accessible care. Smart & efficient.",
    icon: "clinic",
  },
  {
    phase: 5,
    title: "Diagnostics & Health Data Systems",
    copy: "Accurate diagnostics. Data-driven health.",
    icon: "flask",
  },
  {
    phase: 6,
    title: "Smart Hospital",
    copy: "Advanced treatment. Patient-first care.",
    icon: "hospital",
  },
  {
    phase: 7,
    title: "Academic & Training Institutes",
    copy: "Educate. Train. Empower future leaders.",
    icon: "graduation",
  },
  {
    phase: 8,
    title: "Healthcare Franchise Network",
    copy: "Expand reach. Multiply impact.",
    icon: "network",
  },
  {
    phase: 9,
    title: "Regional Medical City",
    copy: "World-class care. Right here.",
    icon: "city",
  },
  {
    phase: 10,
    title: "Reform Mission",
    copy: "Rebuild lives. Stronger communities.",
    icon: "skyline",
  },
  {
    phase: 11,
    title: "Space Medicine & Frontier Health",
    copy: "Pioneering the future. Beyond boundaries.",
    icon: "rocket",
  },
  {
    phase: 12,
    title: "Global-Standard Healthcare from Seemanchal",
    copy: "Local roots. Global impact.",
    icon: "globe",
  },
] as const;

export type VisionIconName =
  | (typeof GROWTH_PATH)[number]["icon"]
  | (typeof CORE_PURPOSE)[number]["icon"]
  | (typeof VISION_PHASES)[number]["icon"]
  | (typeof FOUNDER.pillars)[number]["icon"];
