import { theDifferences } from '@/data/siteData'
import { Link } from '@tanstack/react-router'
import { PlayIcon } from '@heroicons/react/24/solid'

interface DifferenceSectionProps {
  showLink?: boolean
}

export default function DifferenceSection({ showLink = true }: DifferenceSectionProps) {
  return (
    <section id="the-difference" className="relative bg-base-200 py-section">
      <span className="bg-mask-left" />
      <div className="container relative flex flex-col-reverse items-center justify-center gap-12 py-block lg:flex-row">
        <div className="grid flex-1 grid-cols-1 gap-8">
          {theDifferences.map((difference) => {
            const IconComponent = difference.icon
            return (
              <div
                key={difference.title}
                className="flex items-center gap-4 rounded-xl border-2 border-transparent bg-base-300/90 p-6 shadow-md transition duration-200 hover:border-accent/30 hover:shadow-accent/30"
              >
                <IconComponent className="size-8 text-primary" />
                <div>
                  <h3 className="text-2xl font-medium">{difference.title}</h3>
                  <p className="mb-1.5 italic text-base-content/80">
                    {difference.subtitle}
                  </p>
                  <p className="text-base-content/80">{difference.description}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
            Difference
          </div>
          <h2 className="mb-6 text-4xl font-medium md:text-5xl">
            A website agency that <span className="italic">stays</span> with
            you.
          </h2>
          <p className="mb-4 max-w-[80ch] text-base-content/80">
            At RelentNet, we don&apos;t just design websites and provide hosting –
            we cultivate lasting partnerships. We build, launch, and then stay
            close so your digital presence keeps performing.
          </p>
          <p className="mb-6 max-w-[80ch] text-base-content/80">
            Unlike the giants who hand you a product and disappear, we provide
            ongoing support to help your digital presence grow and thrive. Our
            journey with you extends far beyond launch; it&apos;s a collaboration
            focused on your success.
          </p>
          {showLink && (
            <Link
              to="/about"
              className="gradient-button inline-flex items-center justify-center gap-2"
            >
              The <span className="italic">most</span> about us
              <PlayIcon className="size-3 text-base-content transition-transform duration-200" />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
