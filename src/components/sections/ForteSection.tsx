import ScrollButton from '@/components/ScrollButton'

export default function ForteSection() {
  return (
    <section id="forte" className="relative bg-base-200 py-section">
      <span className="bg-mask-left" />
      <div className="container relative py-block">
        <div className="flex flex-col-reverse items-center justify-center gap-12 lg:flex-row">
          <img
            src="/images/software-33.png"
            className="max-w-md object-contain"
            alt="Revolutionizing the web with relentless results."
            loading="lazy"
            decoding="async"
          />
          <div className="mb-12 text-center lg:mb-0 lg:w-1/2 lg:text-left">
            <div className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
              Forte
            </div>
            <h2 className="mb-6 text-4xl font-medium md:text-5xl">
              Revolutionizing the web with
              <span className="italic"> relentless</span> results.
            </h2>
            <p className="mb-6 text-base-content/80">
              In a rapidly evolving digital landscape, RelentNet combines
              innovation, creativity, and technical expertise to deliver web
              solutions that drive business growth. That&apos;s why we approach
              every project with relentless determination to deliver exceptional
              results.
            </p>
            <ScrollButton targetId="team-info">Learn about us</ScrollButton>
          </div>
        </div>
      </div>
    </section>
  )
}
