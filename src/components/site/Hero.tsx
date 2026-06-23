import heroFlag from "@/assets/hero-flag.jpg";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-green-dark text-white">
      <img
        src={heroFlag}
        alt="Bangladesh national flag waving against a clear sky"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-green-dark/95 via-brand-green-dark/70 to-transparent" />

      <div className="container-x relative flex min-h-[88vh] max-w-7xl flex-col justify-center py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            Proudly made in Bangladesh
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Bangladesh's<br />
            <span className="text-brand-gold">Trusted Flag</span><br />
            Manufacturer
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            National, corporate, table and fully custom flags — manufactured to premium standards
            and delivered nationwide. Built for institutions, businesses and events that take pride
            in how they display.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#inquiry"
              className="inline-flex items-center justify-center rounded-md bg-brand-red px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-widest text-white shadow-lg shadow-red-900/30 transition-all hover:bg-brand-red/90 hover:shadow-xl"
            >
              Request Corporate Quote
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-md border border-white/40 bg-white/5 px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-widest text-white backdrop-blur transition-all hover:bg-white/15"
            >
              Browse Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
