import { MessageCircle, Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
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
  const label = productName ?? "Our full product line";
  const waText = productName
    ? `Hello Flag House Bangladesh, I'd like to inquire about ${productName} (Coming Soon). Please share launch details and early pricing.`
    : `Hello Flag House Bangladesh, I'd like to inquire about your upcoming product line. Please share launch details and early pricing.`;
  const waHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(waText)}`;

  const subject = productName
    ? `Product Inquiry — ${productName} (Coming Soon)`
    : `Product Inquiry — Upcoming Launch`;
  const body = productName
    ? `Hello Flag House Bangladesh,\n\nI'm interested in ${productName}. Please share launch date, pricing and how I can reserve stock.\n\nThank you.`
    : `Hello Flag House Bangladesh,\n\nI'd like details on your upcoming product launch — availability, pricing and how to reserve stock.\n\nThank you.`;
  const mailHref = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-red/10 px-3 py-1 font-display text-[10px] font-semibold uppercase tracking-widest text-brand-red">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-red" />
            Coming Soon
          </span>
          <DialogTitle className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink">
            {label} — launching soon
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            Our products are being finalized for launch. Reach out now to reserve stock or get
            early pricing.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 py-3 font-display text-xs font-semibold uppercase tracking-widest text-white shadow-sm transition-all hover:bg-[#1ebe57] hover:shadow-md"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Inquiry
          </a>
          <a
            href={mailHref}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-red px-5 py-3 font-display text-xs font-semibold uppercase tracking-widest text-white shadow-sm transition-all hover:bg-brand-red/90 hover:shadow-md"
          >
            <Mail className="h-4 w-4" />
            Email Inquiry
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
