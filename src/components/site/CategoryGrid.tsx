import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/lib/categories";

export function CategoryGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section className="container-x py-20" id="categories">
      {heading && (
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">
              Our Range
            </span>
            <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-ink md:text-5xl">
              Product Categories
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              From official national flags to fully custom corporate identities — manufactured to
              order, finished by hand.
            </p>
          </div>
          <Link
            to="/categories"
            className="inline-flex items-center gap-1 font-display text-sm font-semibold uppercase tracking-widest text-brand-green hover:text-brand-red"
          >
            View all <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((c, i) => (
          <article
            key={c.slug}
            className={`group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${
              i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
            }`}
          >
            <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                  {c.name}
                </h3>
              </div>
            </div>
            <div className="flex items-start justify-between gap-4 p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">{c.description}</p>
              <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-brand-green transition-all group-hover:bg-brand-red group-hover:text-white">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
            <span className="pointer-events-none absolute inset-x-5 bottom-0 h-0.5 origin-left scale-x-0 bg-brand-red transition-transform duration-300 group-hover:scale-x-100" />
          </article>
        ))}
      </div>
    </section>
  );
}
