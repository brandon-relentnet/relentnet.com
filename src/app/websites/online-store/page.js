import PageHero from "@/components/PageHero";
import StoreFeatures from "@/components/online-store/StoreFeatures";
import StorePricing from "@/components/online-store/StorePricing";
import StoreTestimonials from "@/components/online-store/StoreTestimonials";
import StoreFAQ from "@/components/online-store/StoreFAQ";
import StoreCTA from "@/components/online-store/StoreCTA";
import {
  storeFeatures,
  storePlans,
  storeTestimonials,
  storeFaqs,
} from "@/data/siteData";

export default function OnlineStore() {
  return (
    <>
      <PageHero
        title={
          <>
            Launch Your <span className="italic">Online Store</span> Today
          </>
        }
        subtitle="E-commerce Solutions"
        description="Build a powerful online store with all the features you need to sell products and grow your business."
        button={{ label: "See Plans", target: "store-pricing" }}
      />

      <StoreFeatures features={storeFeatures} />

      <StorePricing plans={storePlans} />

      <StoreTestimonials testimonials={storeTestimonials} />

      <StoreFAQ faqs={storeFaqs} />

      <StoreCTA />
    </>
  );
}
