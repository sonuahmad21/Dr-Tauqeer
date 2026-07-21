import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { Providers } from "@/components/layout/providers";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "SHIPLA HealthOS",
    template: "%s · SHIPLA",
  },
  description:
    "Seemanchal Health Infrastructure & Planetary Life Advancement — an AI-powered Healthcare Operating System by Dr. MD Tauqeer Ahmad / DMTA.",
  applicationName: "SHIPLA",
  keywords: [
    "SHIPLA",
    "HealthOS",
    "Seemanchal",
    "Planetary Health",
    "AI Doctor",
    "DMTA",
    "Dr MD Tauqeer Ahmad",
  ],
  authors: [{ name: "DMTA" }],
  openGraph: {
    title: "SHIPLA HealthOS",
    description:
      "The operating system for human and planetary health — Seemanchal to the stars.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050807",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-void font-sans text-ivory antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
