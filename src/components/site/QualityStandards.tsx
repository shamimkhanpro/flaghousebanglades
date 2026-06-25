import { Check } from "lucide-react";

const SERIES = [
  {
    name: "Standard Series",
    tagline: "Everyday institutional use",
    bar: "bg-brand-gold",
    dot: "bg-brand-gold",
    features: ["75D Knitted Polyester"],
  },
  {
    name: "Premium Series",
    tagline: "Corporate & long-term display",
    bar: "bg-brand-green",
    dot: "bg-brand-green",
    features: [
      "150D Knitted Polyester",
      "Heavy Canvas Heading",
      "Brass Grommets",
    ],
    featured: true,
  },
  {
    name: "Protocol Series",
    tagline: "Official protocol & presentation",
    bar: "bg-brand-red",
    dot: "bg-brand-red",
    features: ["Premium Satin", "Blackout Interlining", "Presentation Packaging"],
  },
];

export function QualityStandards() {
  return (
    <section id="quality" className="border-y border-border bg-secondary/60">
      <div className="container-x py-20">
        <div className="mb-12 max-w-2xl">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">
            Manufacturing Tiers
          </span>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-ink md:text-5xl">
            Quality Standards
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Choose the right flag series for your purpose, from everyday use to official protocol
            presentation.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {SERIES.map((s) => (
            <article
              key={s.name}
              className={`relative flex flex-col overflow-hidden rounded-xl border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${
                s.featured ? "border-brand-green shadow-md" : "border-border"
              }`}
            >
              <span className={`h-1 w-12 rounded-full bg-${s.accent}`} />
              <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-wide text-ink">
                {s.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.tagline}</p>
              <ul className="mt-6 space-y-3">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-ink/85">
                    <span className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-${s.accent} text-white`}>
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              {s.featured && (
                <span className="absolute right-5 top-5 rounded-full bg-brand-green px-3 py-1 font-display text-[10px] font-semibold uppercase tracking-widest text-white">
                  Most Chosen
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
