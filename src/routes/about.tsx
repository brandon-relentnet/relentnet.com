import { createFileRoute } from '@tanstack/react-router'

import PageHero from '@/components/PageHero'
import DifferenceSection from '@/components/sections/DifferenceSection'
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
        description="We craft premium digital experiences with white-glove service. Learn more about our team and what makes us different."
      />
      <DifferenceSection showLink={false} />
      <TeamSection />
    </main>
  )
}
