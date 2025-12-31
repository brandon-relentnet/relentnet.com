import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import type { ReactNode } from 'react'

import PageHero from '@/components/PageHero'
import CustomButton from '@/components/CustomButton'

const contactMethods = [
  {
    icon: EnvelopeIcon,
    title: 'Private Email',
    detail: 'hello@relentnet.com',
    description: 'Direct line to our principal architects',
  },
  {
    icon: PhoneIcon,
    title: 'Studio Line',
    detail: '1-800-RELENT',
    description: 'Mon-Fri 9am-5pm EST',
  },
]

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <main>
      <PageHero
        title={
          <>
            Begin the <span className="italic">Conversation</span>.
          </>
        }
        subtitle="Inquiry"
        description="We invite you to reach out and discuss how we can steward your digital presence."
      />

      <section className="relative py-section">
        <span className="bg-mask-right opacity-30" />
        <div className="container relative py-block">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-16 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-8 text-3xl font-light tracking-wide">
                  Share Your Vision
                </h2>
                <form className="space-y-8">
                  <Field label="Name" placeholder="John Smith" />
                  <Field
                    label="Direct Email"
                    placeholder="john@example.com"
                    type="email"
                  />
                  <Field
                    label="Phone"
                    placeholder="(555) 123-4567"
                    type="tel"
                  />
                  <Field
                    label="How may we assist you?"
                    placeholder="I am looking to elevate my brand..."
                    textarea
                  />
                  <CustomButton
                    className="w-full justify-center"
                    showIcon={false}
                  >
                    Request Consultation
                  </CustomButton>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-12"
              >
                <div>
                  <h3 className="mb-6 text-2xl font-light">Direct Contact</h3>
                  <p className="text-base-content/60 font-light leading-relaxed">
                    We value personal connection. If you prefer to speak
                    directly, please reach out through your preferred channel.
                  </p>
                </div>

                <div className="grid gap-6">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={method.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="group flex items-center gap-6 rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:border-primary/20 hover:bg-white/10"
                    >
                      <div className="rounded-full bg-primary/10 p-4 text-primary transition duration-300 group-hover:bg-primary/20">
                        <method.icon className="size-6" />
                      </div>
                      <div>
                        <h4 className="font-medium tracking-wide text-white">
                          {method.title}
                        </h4>
                        <p className="text-lg font-light text-primary/90">
                          {method.detail}
                        </p>
                        <p className="text-sm text-base-content/50">
                          {method.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-8">
                  <h4 className="mb-2 font-medium tracking-wide text-primary">
                    Availability
                  </h4>
                  <p className="text-sm font-light leading-relaxed text-base-content/70">
                    We limit our active client roster to ensure every project
                    receives our full attention. We aim to respond to all
                    inquiries within 24 hours.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-base-200 py-section">
        <span className="bg-mask-left opacity-30" />
        <div className="container relative py-block text-center">
          <h2 className="section-title">
            Common <span className="italic">Questions</span>
          </h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-6 text-left">
            <FAQCard question="What happens after I contact you?">
              We will review your inquiry and reach out to schedule a private
              consultation. This allows us to understand your goals and ensure
              we are the right partners for your vision.
            </FAQCard>
            <FAQCard question="What is the investment required?">
              We provide bespoke proposals tailored to the specific needs and
              scale of your project. We prioritize value and long-term impact
              over standardized pricing.
            </FAQCard>
            <FAQCard question="I am not technical. Is that a problem?">
              Not at all. We specialize in working with clients who prefer to
              leave the technical details to us. We serve as your digital
              concierge, handling everything from domain names to server
              management.
            </FAQCard>
          </div>
        </div>
      </section>
    </main>
  )
}

function Field({
  label,
  placeholder,
  type = 'text',
  textarea,
}: {
  label: string
  placeholder: string
  type?: string
  textarea?: boolean
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-base-content/70">
        {label}
      </label>
      {textarea ? (
        <textarea
          rows={5}
          className="w-full rounded-xl border border-white/10 bg-base-100 px-6 py-4 text-base-content placeholder:text-base-content/20 transition focus:border-primary/50 focus:bg-base-100 focus:outline-none"
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          className="w-full rounded-xl border border-white/10 bg-base-100 px-6 py-4 text-base-content placeholder:text-base-content/20 transition focus:border-primary/50 focus:bg-base-100 focus:outline-none"
          placeholder={placeholder}
        />
      )}
    </div>
  )
}

function FAQCard({
  question,
  children,
}: {
  question: string
  children: ReactNode
}) {
  return (
    <div className="rounded-xl border border-white/5 bg-base-300/50 p-8 shadow-lg backdrop-blur-sm transition duration-300 hover:border-primary/20">
      <h3 className="mb-3 text-lg font-light tracking-wide text-white">
        {question}
      </h3>
      <p className="font-light leading-relaxed text-base-content/60">
        {children}
      </p>
    </div>
  )
}
