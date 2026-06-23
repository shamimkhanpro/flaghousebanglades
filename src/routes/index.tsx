import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { CategoryGrid } from "@/components/site/CategoryGrid";
import { AboutSection } from "@/components/site/AboutSection";
import { InquiryCTA } from "@/components/site/InquiryCTA";
import { ContactBlock } from "@/components/site/ContactBlock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flag House Bangladesh — Premium Flag Manufacturer" },
      { name: "description", content: "Premium national, corporate, table and custom flags manufactured in Bangladesh. Trusted by businesses, institutions and events nationwide." },
      { property: "og:title", content: "Flag House Bangladesh — Premium Flag Manufacturer" },
      { property: "og:description", content: "Premium national, corporate, table and custom flags manufactured in Bangladesh." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteShell>
      <Hero />
      <TrustStrip />
      <CategoryGrid />
      <AboutSection />
      <InquiryCTA />
      <ContactBlock />
    </SiteShell>
  );
}
