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
    default: "SHIPLA · Healing Today, Inspiring Tomorrow",
    template: "%s · SHIPLA",
  },
  description:
    "Seemanchal Health Infrastructure & Planetary Life Advancement — a non-profit healthcare, education, and innovation ecosystem by Dr. MD Tauqeer Ahmad / DMTA.",
  applicationName: "SHIPLA",
  keywords: [
    "SHIPLA",
    "HealthOS",
    "Seemanchal",
    "Planetary Health",
    "Non-profit",
    "DMTA",
    "Dr MD Tauqeer Ahmad",
  ],
  authors: [{ name: "DMTA" }],
  openGraph: {
    title: "SHIPLA · Healing Today, Inspiring Tomorrow",
    description:
      "One vision. One path. Limitless impact — healthcare and human development for Seemanchal.",
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
