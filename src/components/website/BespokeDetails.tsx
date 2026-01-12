'use client'

import {
  DevicePhoneMobileIcon,
  MagnifyingGlassIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

const standards = [
  {
    icon: RocketLaunchIcon,
    title: 'Unrivaled Performance',
    description:
      'Speed is the currency of the web. We engineer every site to load instantly, ensuring your audience is never kept waiting.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Fortress Security',
    description:
      'We employ enterprise-grade security protocols to protect your digital assets and your visitors’ data. Sleep soundly knowing you are guarded.',
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Fluid Responsiveness',
    description:
      'Your site will adapt flawlessly to any screen, from the largest cinema display to the smallest handheld device.',
  },
  {
    icon: MagnifyingGlassIcon,
    title: 'Search Authority',
    description:
      'We build with a foundation of technical SEO, ensuring your brand commands the visibility it deserves on search engines.',
  },
]

export default function BespokeDetails() {
  return (
    <section className="relative py-section bg-base-100">
      <div className="container relative py-block">
        <div className="text-center mb-20">
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary/80">
            The Standard
          </div>
          <h2 className="text-3xl md:text-4xl font-light leading-tight">
            Excellence is not an option.
            <br />
            <span className="italic text-white">It is the baseline.</span>
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:gap-20">
          {standards.map((item) => (
            <div
              key={item.title}
              className="flex gap-6 group"
            >
              <div className="shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary transition-colors duration-500 group-hover:border-primary/50 group-hover:bg-primary/10">
                  <item.icon className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-light tracking-wide text-white">
                  {item.title}
                </h3>
                <p className="font-light leading-relaxed text-base-content/60">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
