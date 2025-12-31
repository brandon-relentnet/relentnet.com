import { teamMembers } from '@/data/siteData'
import ScrollButton from '@/components/ScrollButton'

export default function TeamSection() {
  return (
    <section id="team-info" className="relative py-section">
      <span className="bg-mask-right" />
      <div className="container relative py-block">
        <div className="mx-auto mb-12 text-center lg:w-1/2">
          <div className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
            People
          </div>
          <h2 className="mb-6 text-4xl font-medium md:text-5xl">
            The <span className="italic">relentless</span> leadership.
          </h2>
          <p className="mx-auto mb-4 max-w-[80ch] text-base-content/80">
            We are a team of dedicated professionals committed to delivering
            excellence in web development, design, and digital marketing.
          </p>
        </div>
        <div className="mb-8 grid grid-cols-1 place-content-center gap-12 lg:grid-cols-2 2xl:grid-cols-4">
          {' '}
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.image}
                className="mx-auto mb-6 rounded-xl"
                alt={member.name}
                loading="lazy"
                decoding="async"
              />
              <div className="mx-auto w-3/4">
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="mb-2 font-semibold italic text-base-content/80">
                  {member.role}
                </p>
                <p className="text-base-content/80">{member.blurb}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <ScrollButton targetId="the-difference">
            <span className="italic">More</span> about us
          </ScrollButton>
        </div>
      </div>
    </section>
  )
}
