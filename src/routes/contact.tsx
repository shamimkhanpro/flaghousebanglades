import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ContactBlock } from "@/components/site/ContactBlock";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Flag House Bangladesh" },
      { name: "description", content: "Get in touch with Flag House Bangladesh. Email, WhatsApp and our Dhaka location." },
      { property: "og:title", content: "Contact Us — Flag House Bangladesh" },
      { property: "og:description", content: "Email, WhatsApp and our Dhaka location." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <section className="border-b border-border bg-brand-green-dark py-20 text-white">
        <div className="container-x">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Get in touch
          </span>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold uppercase leading-tight tracking-tight md:text-6xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            We'd love to hear from you — for quotes, custom orders, or just to say hello.
          </p>
        </div>
      </section>
      <ContactBlock />
    </SiteShell>
  );
}
