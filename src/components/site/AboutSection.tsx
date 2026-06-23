import { Check } from "lucide-react";
import aboutImg from "@/assets/about-craft.jpg";

const POINTS = [
  "In-house manufacturing — full control over fabric, print and finish",
  "Strict color matching to Pantone standards",
  "Sample approval before every bulk production run",
  "Trusted by corporations, embassies and event organizers",
];

export function AboutSection() {
  return (
    <section id="about" className="container-x py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="absolute -inset-3 -z-10 rounded-2xl bg-gradient-to-br from-brand-green/15 to-brand-gold/15" />
          <img
            src={aboutImg}
            alt="Flag House Bangladesh craftsmanship"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-xl object-cover shadow-xl"
          />
        </div>
        <div>
          <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">
            About Flag House Bangladesh
          </span>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-ink md:text-5xl">
            Crafted with pride.<br />Built to last.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Flag House Bangladesh manufactures premium flags for businesses, government, schools and
            events across the country. Every flag we ship is made by skilled hands, on quality
            fabric, with colors that stay true.
          </p>
          <ul className="mt-6 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-ink/85">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-base">{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a
              href="#inquiry"
              className="inline-flex items-center justify-center rounded-md bg-brand-green px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-widest text-white shadow-md transition-all hover:bg-brand-green-dark"
            >
              Start Your Order
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
