import { createFileRoute } from '@tanstack/react-router'

import PageHero from '@/components/PageHero'
import TrustIndicators from '@/components/website/TrustIndicators'
import PricingSection from '@/components/website/PricingSection'
import PlatformComparison from '@/components/website/PlatformComparison'
import EnterpriseSection from '@/components/website/EnterpriseSection'
import FAQSection from '@/components/website/FAQSection'
import FinalCTA from '@/components/website/FinalCTA'
import {
  faqs,
  plans,
  platformComparison,
  trustIndicators,
} from '@/data/siteData'

export const Route = createFileRoute('/websites')({
  component: WebsitesPage,
})

function WebsitesPage() {
  return (
    <main>
      <PageHero
        title={
          <>
            Websites that <span className="italic">just work</span>.
          </>
        }
        subtitle="Custom Web Design"
        description="Professional websites tailored to your brand. We handle the technical stuff, you focus on growing."
        button={{ label: 'See Pricing', target: 'website-plans' }}
      />

      <TrustIndicators indicators={trustIndicators} />
      <PricingSection plans={plans} />
      <PlatformComparison comparison={platformComparison} />
      <EnterpriseSection />
      <FAQSection faqs={faqs} />
      <FinalCTA />
    </main>
  )
}
