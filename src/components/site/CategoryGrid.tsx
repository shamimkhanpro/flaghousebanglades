import { useState } from "react";
import { Sparkles } from "lucide-react";
import { CATEGORIES } from "@/lib/categories";
import { ComingSoonDialog } from "./ComingSoonDialog";

export function CategoryGrid({ heading = true }: { heading?: boolean }) {
  const [openFor, setOpenFor] = useState<string | null>(null);

  return (
    <section className="container-x py-20" id="products">
      {heading && (
        <div className="mb-12 max-w-2xl">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">
            Our Range
          </span>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-ink md:text-5xl">
            Products
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            From official national flags to fully custom corporate identities — manufactured to
            order, finished by hand.
          </p>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((c) => (
          <article
            key={c.slug}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-brand-red/95 px-2.5 py-1 font-display text-[10px] font-semibold uppercase tracking-widest text-white shadow-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                Coming Soon
              </span>
              <div className="absolute bottom-4 left-5">
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                  {c.name}
                </h3>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">{c.description}</p>
              <button
                type="button"
                onClick={() => setOpenFor(c.name)}
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-md bg-brand-green px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-widest text-white shadow-sm transition-all hover:bg-brand-green/90 hover:shadow-md"
              >
                <Sparkles className="h-4 w-4" />
                Inquiry — Coming Soon
              </button>
            </div>
            <span className="pointer-events-none absolute inset-x-5 bottom-0 h-0.5 origin-left scale-x-0 bg-brand-red transition-transform duration-300 group-hover:scale-x-100" />
          </article>
        ))}
      </div>

      <ComingSoonDialog
        open={openFor !== null}
        onOpenChange={(o) => !o && setOpenFor(null)}
        productName={openFor ?? undefined}
      />
    </section>
  );
}
