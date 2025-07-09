import PageHero from "@/components/PageHero";
import WebHostingFeatures from "@/components/hosting/WebHostingFeatures";
import WebHostingPlans from "@/components/hosting/WebHostingPlans";
import WebHostingTestimonials from "@/components/hosting/WebHostingTestimonials";
import WebHostingFAQ from "@/components/hosting/WebHostingFAQ";
import WebHostingCTA from "@/components/hosting/WebHostingCTA";
import { 
  webHostingFeatures, 
  webHostingPlans, 
  webHostingTestimonials, 
  webHostingFaqs 
} from "@/data/siteData";

export default function WebHosting() {
  return (
    <>
      <PageHero 
        title={<>Fully <span className="italic">Managed</span> Web Hosting</>}
        subtitle="Managed Web Hosting"
        description="Focus on your business while we handle everything. Professional managed hosting with dedicated support and white-glove service."
      />

      <WebHostingFeatures features={webHostingFeatures} />
      <WebHostingPlans plans={webHostingPlans} />
      <WebHostingTestimonials testimonials={webHostingTestimonials} />
      <WebHostingFAQ faqs={webHostingFaqs} />
      <WebHostingCTA />
    </>
  );
}