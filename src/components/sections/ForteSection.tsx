import ScrollButton from '@/components/ScrollButton'

export default function ForteSection() {
  return (
    <section id="forte" className="relative bg-base-200 py-section">
      <span className="bg-mask-left opacity-30" />
      <div className="container relative py-block">
        <div className="flex flex-col-reverse items-center justify-center gap-16 lg:flex-row">
          <div className="relative group">
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-20 blur-2xl group-hover:opacity-30 transition duration-1000"></div>
            <img
              src="/images/software-33.png"
              className="relative max-w-md object-contain opacity-90 grayscale-[20%]"
              alt="Artistic digital representation"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="mb-12 text-center lg:mb-0 lg:w-1/2 lg:text-left">
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary/80">
              Philosophy
            </div>
            <h2 className="mb-8 text-4xl font-light md:text-5xl leading-tight">
              Functional art, rooted in
              <span className="text-white italic font-normal"> purpose</span>.
            </h2>
            <p className="mb-8 text-lg text-base-content/60 font-light leading-relaxed">
              We believe a website should be more than a utility; it should be a
              statement. In a world of noise, we create clarity. We blend
              technical excellence with artistic intuition to build platforms
              that stand the test of time.
            </p>
            <ScrollButton targetId="team-info">Meet the Artisans</ScrollButton>
          </div>
        </div>
      </div>
    </section>
  )
}
