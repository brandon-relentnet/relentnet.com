import { Link } from '@tanstack/react-router'
import { PlayIcon } from '@heroicons/react/24/solid'

export default function ContactSection() {
  return (
    <section className="relative bg-base-200 py-section">
      <span className="bg-mask-left" />
      <div className="container relative py-block text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
            Contact
          </div>
          <h2 className="mb-6 text-4xl font-medium md:text-5xl">
            Enough talk, let&apos;s grow <span className="italic">together</span>.
          </h2>
          <div className="flex justify-center">
            <Link to="/contact" className="gradient-button inline-flex items-center gap-2">
              Get in touch
              <PlayIcon className="size-3 text-base-content transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
