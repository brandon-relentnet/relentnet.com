import { Link } from '@tanstack/react-router'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-base-200 py-section">
      <span className="bg-mask-left opacity-30" />
      <div className="container relative py-block text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary/80">
            Inquiry
          </div>
          <h2 className="mb-8 text-4xl font-light md:text-5xl leading-tight">
            Ready to elevate your <br />
            <span className="text-white italic font-normal">
              digital presence?
            </span>
          </h2>
          <p className="mb-10 text-lg text-base-content/60 font-light max-w-xl mx-auto">
            We are currently accepting a limited number of new clients for the
            upcoming quarter.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-primary/30 bg-primary/5 px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary transition-all hover:bg-primary/10 hover:pr-10 hover:pl-6 hover:border-primary/50"
            >
              Request Consultation
              <ArrowLongRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
