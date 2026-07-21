import { LivingEarthBackground } from "@/components/background/living-earth-background";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { MarketingHeader } from "@/components/marketing/marketing-header";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <LivingEarthBackground />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-aurora-beam" />
      <MarketingHeader />
      <main>{children}</main>
      <MarketingFooter />
    </div>
  );
}
