import { createFileRoute } from '@tanstack/react-router'

import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ForteSection from '@/components/sections/ForteSection'
import TeamSection from '@/components/sections/TeamSection'
import DifferenceSection from '@/components/sections/DifferenceSection'
import ManageSection from '@/components/sections/ManageSection'
import ContactSection from '@/components/sections/ContactSection'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main className="bg-base-100 text-base-content">
      <HeroSection />
      <ServicesSection />
      <ForteSection />
      <TeamSection />
      <DifferenceSection />
      <ManageSection />
      <ContactSection />
    </main>
  )
}
