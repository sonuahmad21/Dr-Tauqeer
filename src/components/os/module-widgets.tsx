import { GlassCard } from "@/components/ui/glass-card";
import type { Widget } from "@/features/os/nav";

export function WidgetGrid({ widgets }: { widgets: Widget[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {widgets.map((widget) => (
        <GlassCard key={widget.title} className="p-5" hover>
          <p className="text-xs uppercase tracking-[0.16em] text-ivory-dim">{widget.title}</p>
          <p className="mt-3 font-display text-3xl text-ivory">{widget.value}</p>
          <p className="mt-2 text-sm text-ivory-muted">{widget.detail}</p>
        </GlassCard>
      ))}
    </div>
  );
}

export function ModulePanel({
  title,
  items,
}: {
  title: string;
  items: Array<{ title: string; copy: string }>;
}) {
  return (
    <section className="mt-8">
      <h2 className="font-display text-3xl text-ivory">{title}</h2>
      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <GlassCard key={item.title} className="p-5" hover>
            <h3 className="text-lg font-medium text-ivory">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ivory-muted">{item.copy}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
