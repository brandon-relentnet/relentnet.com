import { AnimateNumber } from 'motion-plus/react'
import { motion } from 'motion/react'

import type { Plan } from '@/data/siteData'

interface PricingCardProps {
  plan: Plan
  isCustom?: boolean | null
  isYearly?: boolean | null
  ctaText?: string
  ctaHref?: string
  featureLabel?: string
  showAnimation?: boolean
  animationDelay?: number
}

export function PricingCard({
  plan,
  isCustom = null,
  isYearly = null,
  ctaText = 'Start My Project',
  ctaHref = 'https://clients.relentnet.com/index.php?rp=/store/web-design',
  featureLabel = 'What You Get:',
  showAnimation = false,
  animationDelay = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={showAnimation ? { opacity: 0, y: 20 } : undefined}
      animate={showAnimation ? { opacity: 1, y: 0 } : undefined}
      transition={
        showAnimation ? { delay: animationDelay, duration: 0.6 } : undefined
      }
      className={`relative rounded-2xl border p-8 shadow-lg transition duration-200 ${
        plan.popular
          ? 'scale-105 border-primary bg-base-300/90 shadow-primary/40'
          : 'border-transparent bg-base-300/80'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-content">
          Most Popular
        </div>
      )}
      <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
        {plan.tagline}
      </div>
      <h3 className="mb-2 text-2xl font-bold text-base-content">{plan.name}</h3>
      <p className="mb-4 text-sm text-base-content/70">{plan.description}</p>

      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          {plan.monthlyPrice && plan.yearlyPrice ? (
            <>
              <span className="text-lg text-base-content/80">$</span>
              <AnimateNumber
                className="text-5xl font-bold tracking-tighter"
                transition={{
                  visualDuration: 0.6,
                  type: 'spring',
                  bounce: 0.25,
                  opacity: { duration: 0.2, ease: 'linear' },
                }}
              >
                {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              </AnimateNumber>
              <span className="text-lg text-base-content/80">
                {isYearly ? '/year' : '/month'}
              </span>
            </>
          ) : (
            <AnimateNumber
              format={{
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }}
              suffix={plan.customPrice && plan.builderPrice ? '+' : ''}
              className="text-5xl font-bold tracking-tighter"
              transition={{
                visualDuration: 0.6,
                type: 'spring',
                bounce: 0.25,
                opacity: { duration: 0.2, ease: 'linear' },
              }}
            >
              {isCustom !== null && plan.customPrice && plan.builderPrice
                ? isCustom
                  ? plan.customPrice
                  : plan.builderPrice
                : plan.builderPrice || plan.customPrice || 0}
            </AnimateNumber>
          )}
        </div>
        {plan.monthlyPrice && plan.yearlyPrice && (
          <motion.p
            animate={{
              opacity: isYearly ? 1 : 0,
              height: isYearly ? 'auto' : 0,
              marginTop: isYearly ? 4 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden text-sm text-accent"
          >
            Save ${plan.monthlyPrice * 12 - plan.yearlyPrice} per year!
          </motion.p>
        )}
      </div>

      <div className="mb-6">
        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
          {featureLabel}
        </div>
        <ul className="space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <div className="mt-0.5 flex size-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                ✓
              </div>
              <span className="text-sm text-base-content/80">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6 rounded-lg bg-base-100/40 p-3">
        <p className="text-xs text-base-content/70">
          <span className="font-semibold">Best for:</span> {plan.bestFor}
        </p>
      </div>

      <a
        href={ctaHref}
        className={`block rounded-xl px-6 py-3 text-center font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${
          plan.popular
            ? 'bg-gradient-to-r from-primary to-accent text-white'
            : 'bg-base-100 text-base-content hover:bg-base-100/70'
        }`}
        target="_blank"
        rel="noreferrer"
      >
        {ctaText}
      </a>
    </motion.div>
  )
}
