import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { CategoryGrid } from "@/components/site/CategoryGrid";
import { AboutSection } from "@/components/site/AboutSection";
import { InstitutionalSolutions } from "@/components/site/InstitutionalSolutions";
import { QualityStandards } from "@/components/site/QualityStandards";
import { WhyFlagHouse } from "@/components/site/WhyFlagHouse";
import { FanVehicleCollection } from "@/components/site/FanVehicleCollection";
import { InquiryCTA } from "@/components/site/InquiryCTA";
import { ContactBlock } from "@/components/site/ContactBlock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flag House Bangladesh — Premium Flag Manufacturer" },
      { name: "description", content: "Premium national, corporate, table and custom flags manufactured in Bangladesh. Built to serve corporations, institutions, embassies and event organizers across Bangladesh." },
      { property: "og:title", content: "Flag House Bangladesh — Premium Flag Manufacturer" },
      { property: "og:description", content: "Premium national, corporate, table and custom flags manufactured in Bangladesh." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteShell>
      <div id="top" />
      <Hero />
      <TrustStrip />
      <CategoryGrid />
      <FanVehicleCollection />
      <AboutSection />
      <InstitutionalSolutions />
      <QualityStandards />
      <WhyFlagHouse />
      <InquiryCTA />
      <ContactBlock />
    </SiteShell>
  );
}
