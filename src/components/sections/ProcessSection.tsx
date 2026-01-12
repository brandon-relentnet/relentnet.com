'use client'

import SectionHeader from '@/components/sections/SectionHeader'

const steps = [
  {
    number: '01',
    title: 'The Conversation',
    description:
      'We begin with a simple, relaxed discussion about your goals and personal aesthetic. No technical questionnaires, just a conversation.',
  },
  {
    number: '02',
    title: 'The Creation',
    description:
      'Our artisans craft your digital presence. We handle the design, the code, the hosting, and the domain. You simply approve the vision.',
  },
  {
    number: '03',
    title: 'The Stewardship',
    description:
      'We launch your legacy and remain as your digital guardians. Updates, security, and changes are all handled by our concierge team.',
  },
]

export default function ProcessSection() {
  return (
    <SectionHeader
      title="The Process"
      subtitle="Simplicity by Design"
      desc="We have distilled the complex world of web development into a seamless three-step journey for our clients."
      maskRight={true}
    >
      <div className="relative mt-20 grid gap-12 md:grid-cols-3">
        {/* Connecting Line (Desktop) */}
        <div className="absolute top-12 left-0 z-0 hidden h-0.5 w-full bg-gradient-to-r from-base-300 via-primary/30 to-base-300 md:block" />

        {steps.map((step, index) => (
          <div
            key={index}
            className="relative z-10"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary/20 bg-base-100 shadow-[0_0_30px_-10px_rgba(243,138,184,0.3)] backdrop-blur-sm">
                <span className="font-mono text-3xl font-light text-primary">
                  {step.number}
                </span>
              </div>
              <h3 className="mb-4 text-2xl font-light tracking-wide text-white">
                {step.title}
              </h3>
              <p className="mx-auto max-w-xs font-light leading-relaxed text-base-content/70">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionHeader>
  )
}
