import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { GlassCard } from "@/components/ui/glass-card";
import { PageShell, SectionHeading } from "@/components/ui/section-heading";

const features = [
  {
    title: "AI Doctor",
    copy: "Conversational clinical intelligence with triage, guidance, and continuous learning.",
  },
  {
    title: "Care Graph",
    copy: "Patients, clinicians, hospitals, and public health connected as one living system.",
  },
  {
    title: "Health Wallet",
    copy: "Encrypted records, prescriptions, insurance, and wearable streams in one identity.",
  },
  {
    title: "Spatial Clinical UI",
    copy: "VisionOS-inspired workspaces that feel calm, precise, and human.",
  },
];

const ecosystem = [
  "Patients",
  "Doctors",
  "Nurses",
  "Hospitals",
  "Universities",
  "Research Labs",
  "NGOs",
  "Governments",
  "Emergency",
  "Innovation Hubs",
];

const research = [
  "Clinical Trials",
  "Genomics",
  "Precision Medicine",
  "Medical Robotics",
  "Biotechnology",
  "Open Science",
];

const aiModules = [
  "Radiology",
  "Pathology",
  "Dermatology",
  "ECG",
  "Mental Health",
  "Nutrition",
  "Scribe",
  "Voice AI",
];

export default function LandingPage() {
  return (
    <>
      <PageShell className="flex min-h-[88vh] flex-col justify-center py-20 md:py-28">
        <FadeIn>
          <div className="max-w-5xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-gold-soft">
              Seemanchal · Planetary · Future Care
            </p>
            <h1 className="font-display text-[clamp(3.4rem,11vw,8rem)] leading-[0.9] tracking-[-0.04em] text-ivory">
              SHIPLA
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ivory-muted md:text-xl">
              Seemanchal Health Infrastructure & Planetary Life Advancement — an AI-powered
              Healthcare Operating System for life, science, and civilization.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/login">
                <Button size="lg">Enter HealthOS</Button>
              </Link>
              <a href="#features">
                <Button size="lg" variant="ghost">
                  Explore the system
                </Button>
              </a>
            </div>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            ["HealthOS", "Not a hospital website — a complete operating layer for care."],
            ["Living Earth", "Nature, aurora, intelligence — the visual language of life."],
            ["DMTA", "Led by Dr. MD Tauqeer Ahmad for Seemanchal and planetary futures."],
          ].map(([title, copy]) => (
            <GlassCard key={title} className="glass-edge p-6" hover>
              <h3 className="font-display text-2xl text-ivory">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory-muted">{copy}</p>
            </GlassCard>
          ))}
        </div>
      </PageShell>

      <PageShell id="features">
        <SectionHeading
          eyebrow="Capabilities"
          title="Designed like a future headquarters for care."
          description="Every surface prioritizes clarity, privacy, and calm intelligence — inspired by Apple, Linear, NASA, and living systems."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {features.map((item) => (
            <GlassCard key={item.title} className="p-7" hover>
              <h3 className="font-display text-3xl text-ivory">{item.title}</h3>
              <p className="mt-3 text-ivory-muted">{item.copy}</p>
            </GlassCard>
          ))}
        </div>
      </PageShell>

      <PageShell id="ai">
        <SectionHeading
          eyebrow="AI Doctor"
          title="Clinical intelligence across modalities."
          description="Radiology, pathology, ECG, mental health, nutrition, scribe, and medical search — one AI fabric."
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {aiModules.map((module) => (
            <span
              key={module}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-ivory-muted"
            >
              AI {module}
            </span>
          ))}
        </div>
      </PageShell>

      <PageShell id="ecosystem">
        <SectionHeading
          eyebrow="Ecosystem"
          title="One platform. Many worlds of care."
          description="From citizens and clinics to universities, governments, and international collaboration."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5">
          {ecosystem.map((item) => (
            <GlassCard key={item} className="px-4 py-5 text-center text-sm text-ivory">
              {item}
            </GlassCard>
          ))}
        </div>
      </PageShell>

      <PageShell id="research">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <SectionHeading
            eyebrow="Research & Innovation"
            title="Science that compounds."
            description="Trials, genomics, robotics, devices, and open science under one research mesh."
          />
          <ul className="space-y-3">
            {research.map((item) => (
              <li
                key={item}
                className="border-b border-white/10 pb-3 font-display text-2xl text-ivory md:text-3xl"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </PageShell>

      <PageShell id="education">
        <SectionHeading
          eyebrow="Education"
          title="Medical learning as a living curriculum."
          description="Universities, simulation labs, digital libraries, certification, and AI tutors."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {["Simulation Labs", "Virtual Classroom", "AI Tutor"].map((item) => (
            <GlassCard key={item} className="p-6" hover>
              <h3 className="font-display text-2xl">{item}</h3>
              <p className="mt-3 text-sm text-ivory-muted">
                Immersive training paths for clinicians, nurses, and researchers across Seemanchal
                and global partners.
              </p>
            </GlassCard>
          ))}
        </div>
      </PageShell>

      <PageShell id="city">
        <GlassCard className="overflow-hidden p-8 md:p-12">
          <SectionHeading
            eyebrow="Medical City"
            title="Smart medical cities for Seemanchal and beyond."
            description="Infrastructure, logistics, emergency grids, green hospitals, and digital twins — orchestrated as one HealthOS."
          />
        </GlassCard>
      </PageShell>

      <PageShell id="planetary">
        <SectionHeading
          eyebrow="Planetary Health"
          title="Climate, water, air, and One Health."
          description="Disease surveillance, disaster medicine, sustainable care, and carbon analytics for living systems."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {["Climate & Health", "Water", "Air", "Green Hospitals"].map((item) => (
            <GlassCard key={item} className="p-5 text-ivory">
              {item}
            </GlassCard>
          ))}
        </div>
      </PageShell>

      <PageShell id="space">
        <SectionHeading
          eyebrow="Space Medicine"
          title="Care beyond Earth."
          description="Astronaut health, remote diagnostics, microgravity research, and future habitat medicine."
        />
      </PageShell>

      <PageShell id="contact" className="pb-24">
        <GlassCard className="flex flex-col items-start justify-between gap-8 p-8 md:flex-row md:items-center md:p-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold-soft">Begin</p>
            <h2 className="mt-3 font-display text-4xl text-ivory md:text-5xl">
              Enter the HealthOS.
            </h2>
            <p className="mt-3 max-w-xl text-ivory-muted">
              Role-aware dashboards for patients, clinicians, hospitals, research, and planetary
              stewardship.
            </p>
          </div>
          <Link href="/login">
            <Button size="lg" variant="gold">
              Launch SHIPLA
            </Button>
          </Link>
        </GlassCard>
      </PageShell>
    </>
  );
}
