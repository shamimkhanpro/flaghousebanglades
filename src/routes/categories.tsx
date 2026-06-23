import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { CategoryGrid } from "@/components/site/CategoryGrid";
import { InquiryCTA } from "@/components/site/InquiryCTA";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Product Categories — Flag House Bangladesh" },
      { name: "description", content: "Browse our full range: national flags, corporate flags, table flags, custom flags and accessories." },
      { property: "og:title", content: "Product Categories — Flag House Bangladesh" },
      { property: "og:description", content: "National, corporate, table, custom flags and accessories." },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <SiteShell>
      <section className="border-b border-border bg-brand-green-dark py-20 text-white">
        <div className="container-x">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Our Range
          </span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold uppercase leading-tight tracking-tight md:text-6xl">
            Product Categories
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Manufactured to order in Bangladesh — quality fabric, accurate colors, built for both
            indoor and outdoor use.
          </p>
        </div>
      </section>
      <CategoryGrid heading={false} />
      <InquiryCTA />
    </SiteShell>
  );
}
