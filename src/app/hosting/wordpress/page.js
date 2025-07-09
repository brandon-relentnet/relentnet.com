import PageHero from "@/components/PageHero";
import WordPressFeatures from "@/components/hosting/WordPressFeatures";
import WordPressPerformanceStats from "@/components/hosting/WordPressPerformanceStats";
import WordPressPlans from "@/components/hosting/WordPressPlans";
import WordPressTestimonials from "@/components/hosting/WordPressTestimonials";
import WordPressFAQ from "@/components/hosting/WordPressFAQ";
import WordPressCTA from "@/components/hosting/WordPressCTA";
import { 
  wordpressFeatures, 
  wordpressPlans, 
  wordpressTestimonials, 
  wordpressFaqs 
} from "@/data/siteData";

export default function WordPressHosting() {
  return (
    <>
      <PageHero 
        title={<>WordPress <span className="italic">Hosting</span> Optimized</>}
        subtitle="WordPress Hosting"
        description="Lightning-fast, secure WordPress hosting with expert support. Built specifically for WordPress performance and security."
      />

      <WordPressFeatures features={wordpressFeatures} />
      <WordPressPerformanceStats />
      <WordPressPlans plans={wordpressPlans} />
      <WordPressTestimonials testimonials={wordpressTestimonials} />
      <WordPressFAQ faqs={wordpressFaqs} />
      <WordPressCTA />
    </>
  );
}