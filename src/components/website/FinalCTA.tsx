import { BoltIcon } from '@heroicons/react/24/solid'

import CustomButton from '@/components/CustomButton'
import ScrollButton from '@/components/ScrollButton'

export default function FinalCTA() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-section">
      <div className="container py-block text-center">
        <div className="section-subtitle">Let&apos;s Do This</div>
        <h2 className="section-title">
          Ready for a Website that <span className="italic">Actually Works</span>?
        </h2>
        <p className="section-desc mb-6">
          Join 40+ happy businesses who finally have websites they&apos;re proud of.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CustomButton href="/contact" gradient={false}>
            Start My Website Today
          </CustomButton>
          <span className="text-base-content/60">or</span>
          <ScrollButton targetId="website-plans" up>
            Check Prices Again
          </ScrollButton>
        </div>
        <p className="mt-6 text-sm text-base-content/60">
          <BoltIcon className="mr-1 inline-block size-4 text-accent/70" /> We
          usually reply within 2 hours (during business hours)
        </p>
      </div>
    </section>
  )
}
