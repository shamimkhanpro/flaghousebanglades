import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/categories", label: "Categories" },
  { to: "/inquiry", label: "Corporate Inquiry" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={SITE.logoUrl} alt={SITE.name} className="h-12 w-12 object-contain" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg font-bold uppercase tracking-wider text-brand-red">
              Flag House
            </div>
            <div className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
              Bangladesh
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="font-sans text-sm font-medium text-ink/80 transition-colors hover:text-brand-green"
              activeProps={{ className: "text-brand-green" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/inquiry"
            className="inline-flex items-center justify-center rounded-md bg-brand-red px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-brand-red/90 hover:shadow-md"
          >
            Get a Quote
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="rounded-md p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-x flex flex-col gap-1 py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 font-medium text-ink/80 hover:bg-secondary hover:text-brand-green"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/inquiry"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-brand-red px-5 py-3 font-display text-sm font-semibold uppercase tracking-wider text-white"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
