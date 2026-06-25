import { InquiryForm } from "./InquiryForm";
import corporateInquiryImage from "@/assets/corporate-inquiry.jpg.asset.json";

export function InquiryCTA() {
  return (
    <section id="inquiry" className="relative isolate overflow-hidden bg-brand-green">
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.4) 0%, transparent 40%), radial-gradient(circle at 80% 60%, rgba(206,17,38,0.5) 0%, transparent 45%)",
        }}
      />
      <div className="container-x grid gap-10 py-20 lg:grid-cols-5">
        <div className="text-white lg:col-span-2">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            For Corporate Buyers
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl">
            Bulk orders, custom branding, fast turnaround.
          </h2>
          <p className="mt-4 max-w-xl text-white/85">
            Tell us your requirement — we'll get back with a tailored quote, samples and a
            production timeline.
          </p>
        </div>
        <div className="rounded-xl bg-background p-6 shadow-xl md:p-8 lg:col-span-3">
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
