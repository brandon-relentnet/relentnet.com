import PageHero from "@/components/PageHero";
import BuilderFeatures from "@/components/builder/BuilderFeatures";
import BuilderPlans from "@/components/builder/BuilderPlans";
import BuilderTemplates from "@/components/builder/BuilderTemplates";
import BuilderFAQ from "@/components/builder/BuilderFAQ";
import BuilderCTA from "@/components/builder/BuilderCTA";
import {
  builderFeatures,
  builderPlans,
  builderTemplates,
  builderFaqs,
} from "@/data/siteData";

export default function WebsiteBuilder() {
  return (
    <>
      <PageHero
        title={
          <>
            Build Websites <span className="italic">Effortlessly</span>
          </>
        }
        subtitle="DIY Website Builder"
        description="Create stunning websites with Divi and Elementor. Get access to premium templates, elements, and training."
        button={{ label: "See Plans", target: "builder-plans" }}
      />

      <BuilderFeatures features={builderFeatures} />
      
      <BuilderPlans plans={builderPlans} />
      
      <BuilderTemplates templates={builderTemplates} />
      
      <BuilderFAQ faqs={builderFaqs} />
      
      <BuilderCTA />
    </>
  );
}