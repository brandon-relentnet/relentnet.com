import { teamMembers } from '@/data/siteData'
import ScrollButton from '@/components/ScrollButton'

export default function TeamSection() {
  return (
    <section id="team-info" className="relative py-section">
      <span className="bg-mask-right opacity-40" />
      <div className="container relative py-block">
        <div className="mx-auto mb-16 text-center lg:w-1/2">
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary/80">
            Curators
          </div>
          <h2 className="mb-8 text-4xl font-light md:text-5xl leading-tight">
            The <span className="text-white italic font-normal">artisans</span>{' '}
            behind the craft.
          </h2>
          <p className="mx-auto mb-4 max-w-[65ch] text-lg text-base-content/60 font-light leading-relaxed">
            We are a collective of architects, designers, and strategists
            dedicated to the pursuit of digital perfection.
          </p>
        </div>
        <div className="mb-12 grid grid-cols-1 place-content-center gap-12 lg:grid-cols-2 2xl:grid-cols-4">
          {' '}
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="relative inline-block mb-6 overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                <img
                  src={member.image}
                  className="rounded-xl transition-transform duration-700 group-hover:scale-105"
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="mx-auto w-4/5">
                <h3 className="text-xl font-light tracking-wide text-white uppercase mb-1">
                  {member.name}
                </h3>
                <p className="mb-3 text-xs font-medium tracking-[0.1em] text-primary uppercase opacity-80">
                  {member.role}
                </p>
                <p className="text-sm text-base-content/60 font-light leading-relaxed">
                  {member.blurb}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <ScrollButton targetId="contact">Begin Your Journey</ScrollButton>
        </div>
      </div>
    </section>
  )
}
