import { MessageCircle, Car, Shirt, Flag, Eye, Wind } from "lucide-react";
import { SITE } from "@/lib/site";

const ITEMS = [
  { icon: Car, label: "Car Window Flags" },
  { icon: Shirt, label: "Fan Scarves" },
  { icon: Flag, label: "Body Flags" },
  { icon: Eye, label: "Mirror Covers" },
  { icon: Wind, label: "Bonnet Covers" },
];

const waLink = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hello Flag House Bangladesh, I'd like to ask about the upcoming Fan & Vehicle Collection.",
)}`;

export function FanVehicleCollection() {
  return (
    <section id="fan-vehicle" className="container-x py-20">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-brand-green/5 via-background to-brand-gold/10 p-8 md:p-12">
        <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-3 py-1 font-display text-[10px] font-semibold uppercase tracking-widest text-brand-red">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-red" />
              Coming Soon
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-ink md:text-5xl">
              Fan &amp; Vehicle Collection
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Celebrate national pride on the road, at events and during special occasions with our
              upcoming fan and vehicle flag collection.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {ITEMS.map((i) => (
            <div
              key={i.label}
              className="group relative flex flex-col items-center gap-3 rounded-xl border border-dashed border-border bg-card/60 p-5 text-center shadow-sm transition-all hover:border-brand-gold hover:bg-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold">
                <i.icon className="h-5 w-5" />
              </span>
              <span className="font-display text-sm font-semibold uppercase tracking-wider text-ink">
                {i.label}
              </span>
              <span className="rounded-full bg-ink/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-ink/60">
                Soon
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-start">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3 font-display text-xs font-semibold uppercase tracking-widest text-white shadow-sm transition-all hover:bg-[#1ebe57] hover:shadow-md"
          >
            <MessageCircle className="h-4 w-4" />
            Ask About Upcoming Collection
          </a>
        </div>
      </div>
    </section>
  );
}
