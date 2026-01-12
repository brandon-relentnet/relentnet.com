import { createFileRoute } from '@tanstack/react-router'

import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import TrustIndicators from '@/components/website/TrustIndicators'
import BespokeDetails from '@/components/website/BespokeDetails'
import FAQSection from '@/components/website/FAQSection'
import FinalCTA from '@/components/website/FinalCTA'
import { faqs, trustIndicators } from '@/data/siteData'

export const Route = createFileRoute('/websites')({
  component: WebsitesPage,
})

function WebsitesPage() {
  return (
    <main>
      <SEO
        title="Web Development Services"
        description="Expert web development services including bespoke design, concierge management, and visual identity branding."
        canonical="https://relentnet.com/websites"
      />
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

      <BespokeDetails />
      <TrustIndicators indicators={trustIndicators} />
      <FAQSection faqs={faqs} />
      <FinalCTA />
    </main>
  )
}
