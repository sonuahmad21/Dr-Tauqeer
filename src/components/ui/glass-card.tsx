import { cn } from "@/lib/utils";
import type { HTMLAttributes, PropsWithChildren } from "react";

type GlassCardProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    hover?: boolean;
  }
>;

export function GlassCard({ children, className, hover = false, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-4xl border border-white/10 bg-glass-panel shadow-glass backdrop-blur-2xl",
        hover &&
          "transition duration-500 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-glow",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
