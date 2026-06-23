import { Mail, MessageCircle, MapPin } from "lucide-react";
import { SITE, WHATSAPP_LINK } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-brand-green-dark text-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src={SITE.logoUrl}
              alt={SITE.name}
              className="h-16 w-auto rounded-md bg-white/95 p-1 object-contain"
            />
            <div>
              <div className="font-display text-xl font-bold uppercase tracking-wider">
                Flag House Bangladesh
              </div>
              <div className="text-sm text-white/70">{SITE.tagline}</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75">
            Manufacturer of premium national, corporate, table and custom flags — proudly made in
            Bangladesh for businesses, institutions and events nationwide.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-brand-gold">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#top" className="text-white/80 hover:text-white">Home</a></li>
            <li><a href="#products" className="text-white/80 hover:text-white">Products</a></li>
            <li><a href="#about" className="text-white/80 hover:text-white">About</a></li>
            <li><a href="#inquiry" className="text-white/80 hover:text-white">Get a Quote</a></li>
            <li><a href="#contact" className="text-white/80 hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-brand-gold">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-brand-gold" />
              <a href={`mailto:${SITE.email}`} className="text-white/85 hover:text-white">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="mt-0.5 h-4 w-4 text-brand-gold" />
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-white/85 hover:text-white">
                WhatsApp {SITE.whatsappDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-brand-gold" />
              <span className="text-white/85">{SITE.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/60 md:flex-row">
          <span>© {new Date().getFullYear()} Flag House Bangladesh. All rights reserved.</span>
          <span>Designed in Dhaka.</span>
        </div>
      </div>
    </footer>
  );
}
