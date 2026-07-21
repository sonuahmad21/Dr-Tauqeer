import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "#050807",
          soft: "#0a100e",
          panel: "#0f1714",
        },
        forest: {
          DEFAULT: "#003322",
          deep: "#001a12",
          mist: "#0d5c45",
        },
        emerald: {
          DEFAULT: "#10b981",
          soft: "#34d399",
          glow: "#6ee7b7",
        },
        ocean: {
          DEFAULT: "#0ea5e9",
          deep: "#0284c7",
          soft: "#7dd3fc",
        },
        gold: {
          DEFAULT: "#d4af37",
          soft: "#f0d78c",
          deep: "#a8841f",
        },
        ivory: {
          DEFAULT: "#f7faf8",
          muted: "#c9d5cf",
          dim: "#8fa399",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass: "0 24px 80px rgba(0, 0, 0, 0.45)",
        glow: "0 0 40px rgba(16, 185, 129, 0.25)",
        gold: "0 0 36px rgba(212, 175, 55, 0.28)",
      },
      backgroundImage: {
        "aurora-beam":
          "radial-gradient(ellipse at 20% 10%, rgba(16,185,129,0.28), transparent 45%), radial-gradient(ellipse at 80% 0%, rgba(14,165,233,0.22), transparent 40%), radial-gradient(ellipse at 50% 80%, rgba(212,175,55,0.12), transparent 50%)",
        "glass-panel":
          "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
