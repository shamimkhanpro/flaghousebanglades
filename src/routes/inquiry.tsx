import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { InquiryForm } from "@/components/site/InquiryForm";
import { Mail, MessageCircle } from "lucide-react";
import { SITE, WHATSAPP_LINK } from "@/lib/site";

export const Route = createFileRoute("/inquiry")({
  head: () => ({
    meta: [
      { title: "Corporate Inquiry — Flag House Bangladesh" },
      { name: "description", content: "Request a corporate quote for bulk flags, custom branding and event orders. Fast response from our team." },
      { property: "og:title", content: "Corporate Inquiry — Flag House Bangladesh" },
      { property: "og:description", content: "Request a corporate quote for bulk and custom flag orders." },
    ],
  }),
  component: InquiryPage,
});

function InquiryPage() {
  return (
    <SiteShell>
      <section className="border-b border-border bg-brand-green-dark py-20 text-white">
        <div className="container-x">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            For Corporate Buyers
          </span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold uppercase leading-tight tracking-tight md:text-6xl">
            Corporate Inquiry
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Share your requirement and we'll respond with a tailored quote, samples and a
            production timeline.
          </p>
        </div>
      </section>

      <section className="container-x grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-10">
          <InquiryForm />
        </div>
        <aside className="space-y-6">
          <div className="rounded-xl border border-border bg-secondary/50 p-6">
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-ink">
              Prefer to chat?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Reach us directly — we usually reply within a few hours.
            </p>
            <div className="mt-4 space-y-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-md bg-[#25D366] px-4 py-3 font-medium text-white transition-colors hover:bg-[#1ebe57]"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp {SITE.whatsappDisplay}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 rounded-md border border-border bg-background px-4 py-3 font-medium text-ink transition-colors hover:border-brand-green hover:text-brand-green"
              >
                <Mail className="h-5 w-5" />
                {SITE.email}
              </a>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-ink">
              What we'll need
            </h3>
            <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm text-muted-foreground">
              <li>Flag type (national, corporate, table, custom)</li>
              <li>Sizes &amp; quantities</li>
              <li>Logo / artwork if applicable</li>
              <li>Delivery deadline</li>
            </ul>
          </div>
        </aside>
      </section>
    </SiteShell>
  );
}
