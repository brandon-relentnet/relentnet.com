import AnimatedCards from '@/components/AnimatedCards'
import ScrollButton from '@/components/ScrollButton'

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-section">
      <span className="bg-mask-right opacity-40" />
      <div className="container relative py-block">
        <div className="mx-auto mb-16 text-center md:w-2/3">
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary/80">
            Expertise
          </div>
          <h2 className="mb-8 text-4xl font-light md:text-5xl leading-tight">
            The art of{' '}
            <span className="text-white italic font-normal">
              digital presence
            </span>
            .
          </h2>
          <p className="mx-auto max-w-[65ch] text-lg text-base-content/60 font-light leading-relaxed">
            We do not merely build websites; we curate digital experiences. From
            the initial concept to the final line of code, every element is
            crafted with precision to ensure your brand commands authority and
            trust.
          </p>
        </div>
        <div className="relative my-12 grid gap-8 md:grid-cols-3">
          <AnimatedCards />
        </div>
        <div className="flex justify-center pt-8">
          <ScrollButton targetId="forte">Our Philosophy</ScrollButton>
        </div>
      </div>
    </section>
  )
}
