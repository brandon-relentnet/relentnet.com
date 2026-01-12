import type { ReactNode } from 'react'

import ScrollButton from '@/components/ScrollButton'

interface AnimatedHeroContentProps {
  title: ReactNode
  subtitle?: ReactNode
  description?: ReactNode
  button?: {
    label: string
    target: string
  }
}

export default function AnimatedHeroContent({
  title,
  subtitle,
  description,
  button,
}: AnimatedHeroContentProps) {
  return (
    <>
      {subtitle && (
        <span
          className="relative z-10 mb-2 block text-sm font-bold uppercase tracking-widest text-base-content"
        >
          {subtitle}
        </span>
      )}

      <h1
        className="empower-text relative inline-block overflow-hidden rounded-xl p-2 text-5xl font-medium text-primary md:text-6xl"
      >
        {title}
      </h1>

      {description && (
        <h2
          className="mb-6 text-center text-2xl font-medium md:text-3xl lg:text-4xl"
        >
          {description}
        </h2>
      )}

      {button && (
        <div
        >
          <ScrollButton targetId={button.target}>{button.label}</ScrollButton>
        </div>
      )}
    </>
  )
}
