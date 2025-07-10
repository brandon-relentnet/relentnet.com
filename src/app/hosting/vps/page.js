import PageHero from "@/components/PageHero";
import VPSFeatures from "@/components/hosting/VPSFeatures";
import VPSPlans from "@/components/hosting/VPSPlans";
import VPSTestimonials from "@/components/hosting/VPSTestimonials";
import VPSFAQ from "@/components/hosting/VPSFAQ";
import VPSCTA from "@/components/hosting/VPSCTA";
import { 
  vpsFeatures, 
  vpsPlans, 
  vpsTestimonials, 
  vpsFaqs 
} from "@/data/siteData";

export default function VPSHosting() {
  return (
    <>
      <PageHero 
        title={<>Enterprise <span className="italic">VPS</span> Infrastructure</>}
        subtitle="VPS Hosting"
        description="Dedicated resources, full root access, and enterprise-grade performance. Deploy your infrastructure in under 30 seconds."
      />

      <VPSFeatures features={vpsFeatures} />
      <VPSPlans plans={vpsPlans} />
      <VPSTestimonials testimonials={vpsTestimonials} />
      <VPSFAQ faqs={vpsFaqs} />
      <VPSCTA />
    </>
  );
}