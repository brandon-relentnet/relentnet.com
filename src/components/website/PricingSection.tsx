import { useState } from 'react'

import type { Plan } from '@/data/siteData'
import { PricingCard } from '@/components/PricingCard'
import SectionHeader from '@/components/sections/SectionHeader'
import PlatformToggle from '@/components/website/PlatformToggle'

interface PricingSectionProps {
  plans: Array<Plan>
}

export default function PricingSection({ plans }: PricingSectionProps) {
  const [isCustom, setIsCustom] = useState(false)

  return (
    <SectionHeader
      id="website-plans"
      title={
        <>
          Clear Pricing. <span className="italic">Real Results</span>.
        </>
      }
      subtitle="Plans"
      desc="Pick your package. Get your website. Start attracting customers. It's that simple."
    >
      <div className="mx-auto mb-6 text-center md:w-2/3">
        <PlatformToggle isCustom={isCustom} setIsCustom={setIsCustom} />
        <div className="mb-20 text-center text-sm text-base-content/70">
          {isCustom ? (
            <>
              <span className="font-semibold text-primary">Next.js</span> =
              Lightning fast, custom coded, perfect for unique visions
            </>
          ) : (
            <>
              <span className="font-semibold text-primary">WordPress</span> =
              Easy to manage, flexible, ideal for content & commerce
            </>
          )}
        </div>
      </div>

      <div className="mx-auto mb-12 grid max-w-5xl gap-8 text-left md:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} isCustom={isCustom} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="mx-auto max-w-3xl text-base-content/60">
          <span className="font-semibold text-base-content">
            Every package includes:
          </span>{' '}
          Your own unique design (no templates!), looks great on phones, easy
          training, and all the files are yours.
          <span className="font-medium text-primary">
            {' '}
            Pay in full and save 5%.
          </span>
        </p>
      </div>
    </SectionHeader>
  )
}
