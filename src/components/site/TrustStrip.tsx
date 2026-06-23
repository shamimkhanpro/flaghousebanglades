import { Award, Factory, Truck, Sparkles } from "lucide-react";

const ITEMS = [
  { icon: Award, label: "Premium Fabric", text: "Heavy-duty knitted polyester & satin" },
  { icon: Sparkles, label: "Custom Sizes", text: "Any dimension, printed or embroidered" },
  { icon: Truck, label: "Nationwide Delivery", text: "Fast dispatch across Bangladesh" },
  { icon: Factory, label: "Corporate Ready", text: "Bulk capacity for large orders" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-secondary/60">
      <div className="container-x grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((i) => (
          <div key={i.label} className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
              <i.icon className="h-5 w-5" />
            </span>
            <div>
              <div className="font-display text-sm font-semibold uppercase tracking-wider text-ink">
                {i.label}
              </div>
              <div className="text-sm text-muted-foreground">{i.text}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
