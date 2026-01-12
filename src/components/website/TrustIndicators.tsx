import { StarIcon } from '@heroicons/react/24/solid'

import type { TrustIndicator } from '@/data/siteData'

interface TrustIndicatorsProps {
  indicators: Array<TrustIndicator>
}

export default function TrustIndicators({ indicators }: TrustIndicatorsProps) {
  return (
    <section className="bg-base-200 py-8">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {indicators.map((indicator) => (
            <div key={indicator.label} className="text-center">
              <div className="mb-2 flex items-center justify-center text-4xl font-light text-primary">
                <span
                  className="font-light tracking-tighter"
                  style={{
                    fontSize: 'inherit',
                    fontVariantNumeric: 'tabular-nums',
                    fontWeight: 'inherit',
                  }}
                >
                  {indicator.number}
                </span>
                {indicator.label === 'Bespoke Projects' && '+'}
                {indicator.label === 'Client Retention' && '%'}
                {indicator.label === 'Star Service' && (
                  <StarIcon className="ml-2 inline-block size-5 text-primary/80" />
                )}
              </div>
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-base-content/60">
                {indicator.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
