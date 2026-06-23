import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SITE, WHATSAPP_LINK } from "@/lib/site";

export function ContactBlock() {
  return (
    <section className="container-x py-20" id="contact">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">
            Get in touch
          </span>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-ink md:text-5xl">
            Contact Us
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            Reach out for quotes, custom orders, or wholesale enquiries. Our team typically replies
            within a few hours during business days.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                <a href={`mailto:${SITE.email}`} className="text-base font-medium text-ink hover:text-brand-green">
                  {SITE.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-base font-medium text-ink hover:text-brand-green">
                  {SITE.whatsappDisplay}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-xs uppercase tracking-widest text-muted-foreground">Phone</div>
                <a href={`tel:+${SITE.whatsapp}`} className="text-base font-medium text-ink hover:text-brand-green">
                  {SITE.whatsappDisplay}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-xs uppercase tracking-widest text-muted-foreground">Location</div>
                <div className="text-base font-medium text-ink">{SITE.address}</div>
              </div>
            </li>
          </ul>
        </div>

        <div className="overflow-hidden rounded-xl border border-border shadow-sm">
          <iframe
            title="Flag House Bangladesh location"
            src="https://www.google.com/maps?q=Dhaka%2C+Bangladesh&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[420px] w-full"
          />
        </div>
      </div>
    </section>
  );
}
