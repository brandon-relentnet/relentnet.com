import type { ReactNode } from 'react'

import AnimatedHeroContent from '@/components/AnimatedHeroContent'
import ParallaxBackground from '@/components/ParallaxBackground'

interface PageHeroProps {
  title: ReactNode
  subtitle?: string
  description?: string
  button?: {
    label: string
    target: string
  }
}

export default function PageHero({
  title,
  subtitle,
  description,
  button,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <ParallaxBackground />
      <img
        src="/images/hero_bg.webp"
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent mix-blend-multiply" />
      <div className="relative flex min-h-[calc(50vh-5rem)] items-center justify-center bg-neutral/50 py-section">
        <div className="container text-center">
          <div className="relative mx-auto max-w-5xl px-6 py-16 sm:px-12">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-neutral/40 blur-3xl backdrop-blur" />
            <div className="relative z-10">
              <AnimatedHeroContent
                title={title}
                subtitle={subtitle}
                description={description}
                button={button}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
