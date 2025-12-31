import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { AnimateNumber } from 'motion-plus/react'
import { StarIcon } from '@heroicons/react/24/solid'

import type { TrustIndicator } from '@/data/siteData'

interface TrustIndicatorsProps {
  indicators: Array<TrustIndicator>
}

export default function TrustIndicators({ indicators }: TrustIndicatorsProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="bg-base-200 py-8">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {indicators.map((indicator, index) => (
            <motion.div
              key={indicator.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="mb-2 flex items-center justify-center text-4xl font-light text-primary">
                <AnimateNumber
                  className="font-light tracking-tighter"
                  style={{
                    fontSize: 'inherit',
                    fontVariantNumeric: 'tabular-nums',
                    fontWeight: 'inherit',
                  }}
                  transition={{ duration: 2, delay: index * 0.3 }}
                >
                  {mounted ? indicator.number : 0}
                </AnimateNumber>
                {indicator.label === 'Bespoke Projects' && '+'}
                {indicator.label === 'Client Retention' && '%'}
                {indicator.label === 'Star Service' && (
                  <StarIcon className="ml-2 inline-block size-5 text-primary/80" />
                )}
              </div>
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-base-content/60">
                {indicator.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
