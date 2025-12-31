import SectionHeader from '@/components/sections/SectionHeader'
import type { PlatformComparison as PlatformComparisonType } from '@/data/siteData'

interface PlatformComparisonProps {
  comparison: PlatformComparisonType
}

export default function PlatformComparison({ comparison }: PlatformComparisonProps) {
  return (
    <SectionHeader
      title="Which Platform is Right for You?"
      subtitle="Still Deciding?"
      maskRight={false}
    >
      <div className="mx-auto mb-8 grid max-w-4xl gap-8 md:grid-cols-2">
        <PlatformCard
          title={comparison.wordpress.title}
          subtitle={comparison.wordpress.subtitle}
          badge="Perfect for content creators"
          benefits={comparison.wordpress.benefits}
          badgeTone="primary"
        />
        <PlatformCard
          title={comparison.nextjs.title}
          subtitle={comparison.nextjs.subtitle}
          badge="Built for performance & beauty"
          benefits={comparison.nextjs.benefits}
          badgeTone="accent"
        />
      </div>
      <div className="mb-12 text-center text-base-content/60">
        <p>
          <span className="font-semibold">Not sure which to choose?</span> No
          problem!
        </p>
        <p>We’ll recommend the perfect platform for your goals.</p>
      </div>
    </SectionHeader>
  )
}

function PlatformCard({
  title,
  subtitle,
  badge,
  benefits,
  badgeTone,
}: {
  title: string
  subtitle: string
  badge: string
  benefits: string[]
  badgeTone: 'primary' | 'accent'
}) {
  return (
    <div className="card bg-base-300 p-8 shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
      <div className="mb-4 text-center">
        <span
          className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
            badgeTone === 'primary' ? 'text-primary' : 'text-accent'
          }`}
          style={{
            backgroundColor:
              badgeTone === 'primary'
                ? 'color-mix(in srgb, var(--color-primary) 20%, transparent)'
                : 'color-mix(in srgb, var(--color-accent) 20%, transparent)',
          }}
        >
          {badge}
        </span>
      </div>
      <h3 className="mb-2 text-center text-2xl font-bold">{title}</h3>
      <p className="mb-6 text-center font-semibold text-accent">{subtitle}</p>
      <ul className="space-y-3">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2">
            <span className="font-bold text-primary">✓</span>
            <span className="text-base-content/80">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
