import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, type FormEvent } from 'react'
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

import SEO from '@/components/SEO'
import CustomButton from '@/components/CustomButton'

interface SearchParams {
  token?: string
}

export const Route = createFileRoute('/welcome')({
  validateSearch: (search: Record<string, unknown>): SearchParams => {
    return {
      token: typeof search.token === 'string' ? search.token : undefined,
    }
  },
  component: WelcomePage,
})

interface ClientData {
  first_name: string
  company_name: string
  email: string
}

interface FormData {
  // Project Scope
  isEcommerce: boolean
  designStatus: string
  contentStatus: string
  userVision: string

  // Billing
  address1: string
  address2: string
  city: string
  state: string
  zip: string
  country: string
}

function WelcomePage() {
  const { token } = Route.useSearch()

  const [status, setStatus] = useState<
    'loading' | 'error' | 'ready' | 'submitting' | 'success'
  >('loading')
  const [clientData, setClientData] = useState<ClientData | null>(null)

  const [formData, setFormData] = useState<FormData>({
    isEcommerce: false,
    designStatus: '',
    contentStatus: '',
    userVision: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  })

  useEffect(() => {
    if (!token) {
      setStatus('error')
      return
    }

    const fetchClientData = async () => {
      try {
        const response = await fetch(
          `https://n8n.relentnet.com/webhook/get-client-data?token=${token}`,
        )

        if (!response.ok) {
          throw new Error('Failed to verify token')
        }

        const data = await response.json()
        setClientData(data)
        setStatus('ready')
      } catch (error) {
        console.error('Error fetching client data:', error)
        setStatus('error')
      }
    }

    fetchClientData()
  }, [token])

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const payload = {
        token,
        ...clientData,
        ...formData,
        submittedAt: new Date().toISOString(),
      }

      const response = await fetch(
        'https://n8n.relentnet.com/webhook/submit-onboarding',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        },
      )

      if (response.ok) {
        setStatus('success')
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert('Something went wrong. Please try again.')
      setStatus('ready')
    }
  }

  if (status === 'loading') {
    return (
      <div className="flex min-h-[60vh] w-full items-center justify-center">
        <SEO
          title="Authenticating..."
          description="Client Onboarding Portal"
        />
        <div className="flex flex-col items-center gap-4">
          <span className="loading loading-ring loading-lg text-primary"></span>
          <p className="animate-pulse text-sm font-light tracking-widest text-base-content/50">
            AUTHENTICATING ACCESS...
          </p>
        </div>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="flex min-h-[60vh] w-full items-center justify-center p-4">
        <SEO
          title="Access Error"
          description="Client Onboarding Portal - Error"
        />
        <div className="max-w-md text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 text-red-500">
            <ExclamationTriangleIcon className="h-8 w-8" />
          </div>
          <h1 className="mb-2 text-2xl font-light text-white">
            Access Link Expired
          </h1>
          <p className="text-base-content/60">
            This invitation link is invalid or has expired. Please request a new
            link from your project manager.
          </p>
        </div>
      </div>
    )
  }

  if (status === 'success') {
    return (
      <div className="flex min-h-[60vh] w-full items-center justify-center p-4">
        <SEO
          title="Onboarding Complete"
          description="Client Onboarding Portal - Success"
        />
        <div
          className="max-w-md text-center"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-green-500">
            <CheckCircleIcon className="h-10 w-10" />
          </div>
          <h1 className="mb-4 text-3xl font-light text-white">All Set!</h1>
          <p className="mb-8 text-lg text-base-content/60">
            Thank you, {clientData?.first_name}. We have received your project
            details and billing information. Our team will be in touch shortly
            with the next steps.
          </p>
          <CustomButton href="/" showIcon={false}>
            Return Home
          </CustomButton>
        </div>
      </div>
    )
  }

  return (
    <main className="relative min-h-screen py-24">
      <SEO
        title="Client Onboarding"
        description="Project onboarding portal for RelentNet clients."
        canonical="https://relentnet.com/welcome"
      />
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div
          className="mx-auto max-w-4xl"
        >
          {/* Header */}
          <div className="mb-12 text-center md:text-left">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Project Onboarding
            </div>
            <h1 className="mb-2 text-4xl font-light text-white md:text-6xl">
              Welcome,{' '}
              <span className="italic text-primary-content">
                {clientData?.company_name}
              </span>
            </h1>
            <p className="text-xl font-light text-base-content/60">
              Hello {clientData?.first_name}. Let's get your project started
              properly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Project Scope Section */}
            <section className="rounded-2xl border border-white/5 bg-base-200/50 p-8 backdrop-blur-sm">
              <h2 className="mb-8 text-xl font-light tracking-wide text-white">
                Project <span className="text-primary">Scope</span>
              </h2>

              <div className="grid gap-8 md:grid-cols-2">
                {/* E-Commerce Toggle */}
                <div className="form-control">
                  <label className="label cursor-pointer justify-start gap-4">
                    <input
                      type="checkbox"
                      className="toggle toggle-primary"
                      name="isEcommerce"
                      checked={formData.isEcommerce}
                      onChange={handleToggleChange}
                    />
                    <span className="label-text text-base text-base-content/80">
                      Does this project require E-Commerce?
                    </span>
                  </label>
                </div>

                <div className="grid gap-6 md:col-span-2 md:grid-cols-2">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-medium text-base-content/70">
                        Design Status
                      </span>
                    </label>
                    <select
                      name="designStatus"
                      className="select select-bordered w-full bg-base-100/50 focus:border-primary focus:outline-none"
                      value={formData.designStatus}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>
                        Select status...
                      </option>
                      <option value="Need Design">I need a design</option>
                      <option value="Have Brand Guidelines">
                        I have brand guidelines
                      </option>
                      <option value="Have Full Mockups">
                        I have full mockups (Figma/Sketch)
                      </option>
                    </select>
                  </div>

                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-medium text-base-content/70">
                        Content Status
                      </span>
                    </label>
                    <select
                      name="contentStatus"
                      className="select select-bordered w-full bg-base-100/50 focus:border-primary focus:outline-none"
                      value={formData.contentStatus}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>
                        Select status...
                      </option>
                      <option value="Need Copywriting">
                        I need copywriting services
                      </option>
                      <option value="Partial Content">
                        I have some content ready
                      </option>
                      <option value="Content Ready">
                        All content is ready to go
                      </option>
                    </select>
                  </div>
                </div>

                <div className="form-control md:col-span-2">
                  <label className="label">
                    <span className="label-text font-medium text-base-content/70">
                      Your Vision
                    </span>
                  </label>
                  <textarea
                    name="userVision"
                    className="textarea textarea-bordered h-32 w-full bg-base-100/50 focus:border-primary focus:outline-none"
                    placeholder="Tell us about your goals, inspiration, or any specific features you need..."
                    value={formData.userVision}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
              </div>
            </section>

            {/* Billing Details Section */}
            <section className="rounded-2xl border border-white/5 bg-base-200/50 p-8 backdrop-blur-sm">
              <h2 className="mb-8 text-xl font-light tracking-wide text-white">
                Billing <span className="text-primary">Details</span>
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="form-control w-full md:col-span-2">
                  <label className="label">
                    <span className="label-text font-medium text-base-content/70">
                      Address Line 1
                    </span>
                  </label>
                  <input
                    type="text"
                    name="address1"
                    className="input input-bordered w-full bg-base-100/50 focus:border-primary focus:outline-none"
                    value={formData.address1}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-control w-full md:col-span-2">
                  <label className="label">
                    <span className="label-text font-medium text-base-content/70">
                      Address Line 2 (Optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    name="address2"
                    className="input input-bordered w-full bg-base-100/50 focus:border-primary focus:outline-none"
                    value={formData.address2}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-base-content/70">
                      City
                    </span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    className="input input-bordered w-full bg-base-100/50 focus:border-primary focus:outline-none"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-base-content/70">
                      State / Province
                    </span>
                  </label>
                  <input
                    type="text"
                    name="state"
                    className="input input-bordered w-full bg-base-100/50 focus:border-primary focus:outline-none"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-base-content/70">
                      Zip / Postal Code
                    </span>
                  </label>
                  <input
                    type="text"
                    name="zip"
                    className="input input-bordered w-full bg-base-100/50 focus:border-primary focus:outline-none"
                    value={formData.zip}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-medium text-base-content/70">
                      Country
                    </span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    className="input input-bordered w-full bg-base-100/50 focus:border-primary focus:outline-none"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </section>

            <div className="flex justify-end pt-4">
              <CustomButton
                type="submit"
                className="w-full justify-center md:w-auto md:min-w-[200px]"
                disabled={status === 'submitting'}
                showIcon={true}
              >
                {status === 'submitting'
                  ? 'Submitting...'
                  : 'Complete Onboarding'}
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}