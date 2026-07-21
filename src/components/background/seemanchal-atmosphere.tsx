"use client";

/**
 * Seemanchal atmosphere — soft mountain light and pine depth for the vision board.
 * Complements Living Earth without replacing it.
 */
export function SeemanchalAtmosphere() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,175,55,0.16),transparent_55%)]" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-emerald/10 blur-3xl" />
      <div className="absolute -right-16 top-40 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <svg
        className="absolute inset-x-0 bottom-0 h-48 w-full opacity-40 md:h-64"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#003322"
          d="M0,224 L180,160 L360,200 L540,120 L720,180 L900,100 L1080,160 L1260,90 L1440,140 L1440,320 L0,320 Z"
          opacity="0.55"
        />
        <path
          fill="#0d5c45"
          d="M0,260 L200,210 L400,240 L620,180 L840,230 L1060,170 L1240,220 L1440,190 L1440,320 L0,320 Z"
          opacity="0.45"
        />
        <path
          fill="#001a12"
          d="M0,290 L240,250 L480,280 L720,240 L960,270 L1200,245 L1440,275 L1440,320 L0,320 Z"
          opacity="0.7"
        />
      </svg>
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-void to-transparent" />
    </div>
  );
}
