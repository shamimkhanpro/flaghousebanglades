import { Link } from "@tanstack/react-router";

export function InquiryCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-green">
      <div className="absolute inset-0 -z-10 opacity-20" style={{
        backgroundImage:
          "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.4) 0%, transparent 40%), radial-gradient(circle at 80% 60%, rgba(206,17,38,0.5) 0%, transparent 45%)",
      }} />
      <div className="container-x flex flex-col items-start justify-between gap-6 py-16 text-white md:flex-row md:items-center">
        <div className="max-w-2xl">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            For Corporate Buyers
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl">
            Bulk orders, custom branding, fast turnaround.
          </h2>
          <p className="mt-3 max-w-xl text-white/85">
            Tell us your requirement — we'll get back with a tailored quote, samples and a
            production timeline.
          </p>
        </div>
        <Link
          to="/inquiry"
          className="inline-flex items-center justify-center rounded-md bg-brand-red px-8 py-4 font-display text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition-all hover:bg-brand-red/90"
        >
          Submit Corporate Inquiry
        </Link>
      </div>
    </section>
  );
}
