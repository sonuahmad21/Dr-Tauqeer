import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@shipla/ui/components/theme-provider";
import "@shipla/ui/globals.css";

export const metadata: Metadata = {
  title: {
    default: "SHIPLA",
    template: "%s · SHIPLA",
  },
  description:
    "Seemanchal Health Infrastructure & Planetary Life Advancement — project foundation.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7faf8" },
    { media: "(prefers-color-scheme: dark)", color: "#050807" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
