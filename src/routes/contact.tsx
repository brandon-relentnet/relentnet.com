import { createFileRoute } from '@tanstack/react-router'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'

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
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    company_name: '',
    phone: '',
    email: '',
    communication_preference: 'Digital',
  })
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle')

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    const payload = {
      ...formData,
      submittedAt: new Date().toISOString(),
      formMode: 'production', // Set to production as we are using the production URL
    }

    console.log('Sending Payload:', payload)

    try {
      const response = await fetch(
        'https://n8n.relentnet.com/webhook/fe703944-aa84-4947-a491-0046d4c0f22a',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        },
      )

      if (response.ok) {
        setStatus('success')
        setFormData({
          first_name: '',
          last_name: '',
          company_name: '',
          phone: '',
          email: '',
          communication_preference: 'Digital',
        })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setStatus('error')
    }
  }

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
              <div
              >
                <h2 className="mb-8 text-3xl font-light tracking-wide">
                  Share Your Vision
                </h2>
                {status === 'success' ? (
                  <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-8 text-center">
                    <h3 className="mb-2 text-xl font-medium text-green-400">
                      Message Received
                    </h3>
                    <p className="text-base-content/70">
                      Thank you for reaching out. We will be in touch shortly.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 text-sm text-primary hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid gap-6 md:grid-cols-2">
                      <Field
                        label="First Name"
                        name="first_name"
                        placeholder="John"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                      />
                      <Field
                        label="Last Name"
                        name="last_name"
                        placeholder="Smith"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Field
                      label="Company Name"
                      name="company_name"
                      placeholder="Acme Corp"
                      value={formData.company_name}
                      onChange={handleChange}
                      required
                    />
                    <Field
                      label="Phone"
                      name="phone"
                      placeholder="(555) 123-4567"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                    <div>
                      <label className="mb-4 block text-xs font-medium uppercase tracking-wider text-base-content/70">
                        How do you prefer to discuss your website?
                      </label>
                      <div className="flex gap-6">
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="radio"
                            name="communication_preference"
                            value="Digital"
                            checked={
                              formData.communication_preference === 'Digital'
                            }
                            onChange={handleChange}
                            className="radio radio-primary"
                          />
                          <span className="text-sm group-hover:text-primary transition-colors">
                            Digital
                          </span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="radio"
                            name="communication_preference"
                            value="Analog"
                            checked={
                              formData.communication_preference === 'Analog'
                            }
                            onChange={handleChange}
                            className="radio radio-primary"
                          />
                          <span className="text-sm group-hover:text-primary transition-colors">
                            Analog
                          </span>
                        </label>
                      </div>
                    </div>

                    {status === 'error' && (
                      <p className="text-sm text-red-400">
                        Something went wrong. Please try again.
                      </p>
                    )}

                    <CustomButton
                      className="w-full justify-center"
                      showIcon={false}
                      disabled={status === 'submitting'}
                      type="submit"
                    >
                      {status === 'submitting'
                        ? 'Sending...'
                        : 'Request Consultation'}
                    </CustomButton>
                  </form>
                )}
              </div>

              <div
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
                  {contactMethods.map((method) => (
                    <div
                      key={method.title}
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
                    </div>
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
              </div>
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

interface FieldProps {
  label: string
  name: string
  placeholder?: string
  type?: string
  textarea?: boolean
  value: string
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void
  options?: Array<string>
  required?: boolean
}

function Field({
  label,
  name,
  placeholder,
  type = 'text',
  textarea,
  value,
  onChange,
  options,
  required,
}: FieldProps) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-base-content/70">
        {label}
      </label>
      {textarea ? (
        <textarea
          name={name}
          rows={5}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full rounded-xl border border-white/10 bg-base-100 px-6 py-4 text-base-content placeholder:text-base-content/20 transition focus:border-primary/50 focus:bg-base-100 focus:outline-none"
          placeholder={placeholder}
        />
      ) : type === 'select' && options ? (
        <div className="relative">
          <select
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className="w-full appearance-none rounded-xl border border-white/10 bg-base-100 px-6 py-4 text-base-content transition focus:border-primary/50 focus:bg-base-100 focus:outline-none"
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-base-content/50">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
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
