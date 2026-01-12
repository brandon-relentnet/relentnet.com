import { createFileRoute } from '@tanstack/react-router'

import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import TeamSection from '@/components/sections/TeamSection'
import ManifestoSection from '@/components/sections/ManifestoSection'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <main>
      <SEO
        title="About Us"
        description="Meet the artisans behind RelentNet. We are digital architects, designers, and strategists dedicated to your online success."
        canonical="https://relentnet.com/about"
      />
      <PageHero
        title={
          <>
            About <span className="italic">RelentNet</span>.
          </>
        }
        subtitle="Our Mission"
        description="We are digital artisans dedicated to crafting and preserving your legacy online through bespoke design and concierge stewardship."
      />
      <ManifestoSection />
      <TeamSection />
    </main>
  )
}
