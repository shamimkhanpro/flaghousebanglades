import { MessageCircle, Mail, Flag, Truck, Shield, Ruler } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { SITE } from "@/lib/site";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName?: string;
};

export function ComingSoonDialog({ open, onOpenChange, productName }: Props) {
  const label = productName ?? "Our Flag Collection";
  const waText = productName
    ? `Hello Flag House Bangladesh, I'd like to inquire about ${productName} (Coming Soon). Please share launch details and early pricing.`
    : `Hello Flag House Bangladesh, I'd like to inquire about your upcoming flag collection. Please share launch details and early pricing.`;
  const waHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(waText)}`;

  const subject = productName
    ? `Product Inquiry — ${productName} (Coming Soon)`
    : `Product Inquiry — Upcoming Launch`;
  const body = productName
    ? `Hello Flag House Bangladesh,\n\nI'm interested in ${productName}. Please share launch date, pricing and how I can reserve stock.\n\nThank you.`
    : `Hello Flag House Bangladesh,\n\nI'd like details on your upcoming launch — availability, pricing and how to reserve stock.\n\nThank you.`;
  const mailHref = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden rounded-2xl border-0 p-0 shadow-2xl sm:max-w-[640px]">
        <div className="grid sm:grid-cols-[220px_1fr]">
          {/* Left accent panel */}
          <div className="relative hidden overflow-hidden bg-brand-green sm:block">
            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25) 0%, transparent 45%), radial-gradient(circle at 80% 80%, rgba(206,17,38,0.55) 0%, transparent 50%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, #fff 0 1px, transparent 1px 10px)",
              }}
            />
            <div className="relative flex h-full flex-col justify-between p-6 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm ring-1 ring-white/25">
                <Flag className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-[10px] font-semibold uppercase tracking-[0.35em] text-brand-gold">
                  Flag House
                </div>
                <div className="mt-1 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight">
                  Coming
                  <br />
                  Soon.
                </div>
                <div className="mt-4 h-0.5 w-10 bg-brand-gold" />
                <div className="mt-4 text-xs text-white/70">Est. 2026 · Dhaka</div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="relative p-6 sm:p-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-3 py-1 font-display text-[10px] font-semibold uppercase tracking-widest text-brand-red">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-red opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-red" />
              </span>
              Launching Soon
            </span>

            <DialogTitle className="mt-3 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink">
              {label}
            </DialogTitle>
            <DialogDescription className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Our first production run is being finalized. Reach out now to reserve stock, request
              samples or lock in early pricing.
            </DialogDescription>

            <div className="my-5 h-px w-full bg-gradient-to-r from-brand-gold/60 via-brand-gold/20 to-transparent" />

            <ul className="grid gap-2.5 text-xs text-ink/75">
              <li className="flex items-center gap-2.5">
                <Shield className="h-3.5 w-3.5 text-brand-green" />
                Made in Bangladesh — protocol-grade finishing
              </li>
              <li className="flex items-center gap-2.5">
                <Truck className="h-3.5 w-3.5 text-brand-green" />
                Bulk-ready for corporate &amp; institutional orders
              </li>
              <li className="flex items-center gap-2.5">
                <Ruler className="h-3.5 w-3.5 text-brand-green" />
                Custom sizes, sample approval before production
              </li>
            </ul>

            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-3 font-display text-xs font-semibold uppercase tracking-widest text-white shadow-md shadow-emerald-900/20 transition-all hover:-translate-y-0.5 hover:bg-[#1ebe57] hover:shadow-lg"
              >
                <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
                WhatsApp
              </a>
              <a
                href={mailHref}
                className="group inline-flex items-center justify-center gap-2 rounded-md border-2 border-brand-red bg-transparent px-4 py-3 font-display text-xs font-semibold uppercase tracking-widest text-brand-red transition-all hover:-translate-y-0.5 hover:bg-brand-red hover:text-white hover:shadow-lg"
              >
                <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
                Email
              </a>
            </div>

            <p className="mt-4 text-[11px] text-muted-foreground">
              We usually reply within a few hours.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
