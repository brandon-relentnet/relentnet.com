import { BoltIcon } from '@heroicons/react/24/solid'

import CustomButton from '@/components/CustomButton'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-base-200 py-section">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
      <div className="container relative py-block text-center">
        <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary/80">
          The Next Step
        </div>
        <h2 className="mb-8 text-4xl font-light leading-tight md:text-5xl">
          Your digital legacy <span className="italic text-white">awaits</span>.
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-lg font-light leading-relaxed text-base-content/60">
          Join a curated list of industry leaders who have entrusted their
          online presence to RelentNet.
        </p>
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <CustomButton
            href="/contact"
            gradient={false}
            className="px-10 py-4 text-sm tracking-widest uppercase"
          >
            Request Private Consultation
          </CustomButton>
        </div>
        <p className="mt-8 text-xs font-medium uppercase tracking-wider text-base-content/40">
          <BoltIcon className="mr-2 inline-block size-3 text-primary" />
          Concierge Response within 2 hours
        </p>
      </div>
    </section>
  )
}
