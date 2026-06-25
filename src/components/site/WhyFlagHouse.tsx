import { Check } from "lucide-react";

const POINTS = [
  "Official Bangladesh Flag Proportions",
  "Consistent Color Standards",
  "Premium Fabrics",
  "Imported Hardware",
  "Institutional Supply Capability",
  "Nationwide Delivery",
];

export function WhyFlagHouse() {
  return (
    <section id="why-us" className="border-y border-border bg-brand-green-dark/[0.03]">
      <div className="container-x py-20">
        <div className="mb-10 max-w-2xl">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">
            Built on Standards
          </span>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-ink md:text-5xl">
            Why Flag House Bangladesh
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Every flag is produced with attention to official proportions, color consistency, fabric
            quality and long-term durability for professional and institutional use.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((p) => (
            <div
              key={p}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                <Check className="h-4 w-4" />
              </span>
              <span className="font-display text-sm font-semibold uppercase tracking-wider text-ink">
                {p}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
