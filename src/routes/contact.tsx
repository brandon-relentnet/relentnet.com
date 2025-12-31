import { createFileRoute } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import {
  ClockIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'

import PageHero from '@/components/PageHero'
import CustomButton from '@/components/CustomButton'

const contactMethods = [
  {
    icon: EnvelopeIcon,
    title: 'Email Us',
    detail: 'hello@relentnet.com',
    description: "We'll get back to you within 2 hours",
  },
  {
    icon: PhoneIcon,
    title: 'Call Us',
    detail: '1-800-RELENT',
    description: 'Mon-Fri 9am-5pm EST',
  },
  {
    icon: ClockIcon,
    title: 'Response Time',
    detail: '2 hours',
    description: 'During business hours',
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
            Let&apos;s Build Something <span className="italic">Amazing</span>
          </>
        }
        subtitle="Get In Touch"
        description="Ready for a website that actually works? We're here to help."
      />

      <section className="relative py-section">
        <span className="bg-mask-right" />
        <div className="container relative py-block">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-6 text-3xl font-medium">
                  Tell Us About Your Project
                </h2>
                <form className="space-y-6">
                  <Field label="Your Name" placeholder="John Smith" />
                  <Field label="Email Address" placeholder="john@example.com" type="email" />
                  <Field label="Phone Number (Optional)" placeholder="(555) 123-4567" type="tel" />
                  <Field
                    label="Tell Us About Your Project"
                    placeholder="I need a website for my business that..."
                    textarea
                  />
                  <CustomButton className="w-full justify-center" showIcon={false}>
                    Send Message
                  </CustomButton>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="mb-4 text-2xl font-medium">
                    Other Ways to Reach Us
                  </h3>
                  <p className="text-base-content/70">
                    Choose whatever works best for you. We&apos;re here to help make
                    your website dreams a reality.
                  </p>
                </div>

                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="card bg-base-300 p-6 shadow-md transition hover:scale-[1.02]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/20 p-3">
                        <method.icon className="size-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{method.title}</h4>
                        <p className="text-lg font-medium text-primary">
                          {method.detail}
                        </p>
                        <p className="text-sm text-base-content/60">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                <div className="card bg-gradient-to-br from-primary/10 to-accent/10 p-6">
                  <h4 className="mb-2 font-semibold">Ready to Get Started?</h4>
                  <p className="text-sm text-base-content/70">
                    Most clients hear back from us in under 2 hours. We can&apos;t wait
                    to learn about your project!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-base-200 py-section">
        <span className="bg-mask-left" />
        <div className="container relative py-block text-center">
          <h2 className="section-title">
            Common <span className="italic">Questions</span>
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-left">
            <FAQCard question="What happens after I contact you?">
              We&apos;ll reach out within 2 hours to schedule a quick 15-minute call.
              We&apos;ll discuss your needs, answer questions, and provide a custom quote.
            </FAQCard>
            <FAQCard question="Do you work with small budgets?">
              Absolutely! Our Empower package starts at just $1,299. Let&apos;s talk about
              what works for your budget.
            </FAQCard>
            <FAQCard question="What if I don't know what I want?">
              Perfect! We&apos;ll guide you through everything and show you examples. By the
              end of our call, you&apos;ll have a clear vision for your new website.
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
      <label className="mb-2 block text-sm font-medium">{label}</label>
      {textarea ? (
        <textarea
          rows={5}
          className="w-full rounded-xl border-2 border-base-300 bg-base-200 px-4 py-3 transition focus:border-primary focus:outline-none"
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          className="w-full rounded-xl border-2 border-base-300 bg-base-200 px-4 py-3 transition focus:border-primary focus:outline-none"
          placeholder={placeholder}
        />
      )}
    </div>
  )
}

function FAQCard({ question, children }: { question: string; children: ReactNode }) {
  return (
    <div className="card bg-base-300 p-6 shadow-md">
      <h3 className="mb-2 font-semibold">{question}</h3>
      <p className="text-base-content/70">{children}</p>
    </div>
  )
}
