import PageHero from "@/components/PageHero";
import TrustIndicators from "@/components/website-design/TrustIndicators";
import PricingSection from "@/components/website-design/PricingSection";
import PlatformComparison from "@/components/website-design/PlatformComparison";
import EnterpriseSection from "@/components/website-design/EnterpriseSection";
import FAQSection from "@/components/website-design/FAQSection";
import FinalCTA from "@/components/website-design/FinalCTA";
import {
  trustIndicators,
  plans,
  platformComparison,
  faqs,
} from "@/data/siteData";

export default function WebsiteDesignServices() {
  return (
    <>
      <PageHero
        title={
          <>
            Websites that <span className="italic">just work</span>.
          </>
        }
        subtitle="Custom Web Design"
        description="Professional websites tailored to your brand. We handle the technical stuff, you focus on growing."
        button={{ label: "See Pricing", target: "website-plans" }}
      />

      <TrustIndicators indicators={trustIndicators} />

      <PricingSection plans={plans} />

      <PlatformComparison comparison={platformComparison} />

      <EnterpriseSection />

      <FAQSection faqs={faqs} />

      <FinalCTA />
    </>
  );
}
