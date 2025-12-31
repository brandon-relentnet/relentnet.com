import { createFileRoute } from '@tanstack/react-router'

import PageHero from '@/components/PageHero'
import TrustIndicators from '@/components/website/TrustIndicators'
import FAQSection from '@/components/website/FAQSection'
import FinalCTA from '@/components/website/FinalCTA'
import { faqs, trustIndicators } from '@/data/siteData'

export const Route = createFileRoute('/websites')({
  component: WebsitesPage,
})

function WebsitesPage() {
  return (
    <main>
      <PageHero
        title={
          <>
            Digital presence, <span className="italic">elevated</span>.
          </>
        }
        subtitle="Bespoke Development"
        description="We craft high-performance, visually stunning websites that serve as the foundation of your digital legacy."
        button={{ label: 'Begin Consultation', target: 'cta' }}
      />

      <TrustIndicators indicators={trustIndicators} />
      <FAQSection faqs={faqs} />
      <FinalCTA />
    </main>
  )
}
