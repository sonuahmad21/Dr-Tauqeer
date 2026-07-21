import { cn } from "@/lib/utils";
import type { HTMLAttributes, PropsWithChildren } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-soft">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-ivory md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ivory-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function PageShell({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  return (
    <section className={cn("relative mx-auto w-full max-w-7xl px-5 py-16 md:px-8", className)} {...props}>
      {children}
    </section>
  );
}
