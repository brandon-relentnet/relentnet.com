import { createFileRoute } from '@tanstack/react-router'

import PageHero from '@/components/PageHero'
import TeamSection from '@/components/sections/TeamSection'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <main>
      <PageHero
        title={
          <>
            About <span className="italic">RelentNet</span>.
          </>
        }
        subtitle="Our Mission"
        description="We are digital artisans dedicated to crafting and preserving your legacy online through bespoke design and concierge stewardship."
      />
      <TeamSection />
    </main>
  )
}
