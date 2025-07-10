"use client";

import PageHero from "@/components/PageHero";
import { motion } from "motion/react";
import {
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import CustomButton from "@/components/CustomButton";

const contactMethods = [
  {
    icon: EnvelopeIcon,
    title: "Email Us",
    detail: "hello@relentnet.com",
    description: "We'll get back to you within 2 hours",
  },
  {
    icon: PhoneIcon,
    title: "Call Us",
    detail: "1-800-RELENT",
    description: "Mon-Fri 9am-5pm EST",
  },
  {
    icon: ClockIcon,
    title: "Response Time",
    detail: "2 hours",
    description: "During business hours",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Let&apos;s Build Something <span className="italic">Amazing</span>
          </>
        }
        subtitle="Get In Touch"
        description="Ready for a website that actually works? We're here to help."
      />

      {/* Contact Form Section */}
      <section className="relative py-section">
        <span className="bg-mask-right" />
        <div className="relative container mx-auto px-4 py-block">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-2">
              {/* Left Column - Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-6 text-3xl font-medium">
                  Tell Us About Your Project
                </h2>
                <form className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl border-2 border-base-300 bg-base-200 px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-xl border-2 border-base-300 bg-base-200 px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-xl border-2 border-base-300 bg-base-200 px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      rows={5}
                      className="w-full rounded-xl border-2 border-base-300 bg-base-200 px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                      placeholder="I need a website for my business that..."
                    />
                  </div>
                  <CustomButton
                    className="w-full justify-center"
                    showIcon={false}
                  >
                    Send Message
                  </CustomButton>
                </form>
              </motion.div>

              {/* Right Column - Contact Info */}
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
                    Choose whatever works best for you. We&apos;re here to help
                    make your website dreams a reality.
                  </p>
                </div>

                {contactMethods.map((method, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="card bg-base-300 p-6 shadow-md transition-all hover:scale-[1.02] hover:shadow-lg"
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
                    Most clients hear back from us in under 2 hours. We
                    can&apos;t wait to learn about your project!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick FAQ Section */}
      <section className="relative bg-base-200 py-section">
        <span className="bg-mask-left" />
        <div className="relative container mx-auto px-4 py-block text-center">
          <h2 className="section-title">
            Common <span className="italic">Questions</span>
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6">
            <div className="card bg-base-300 p-6 text-left shadow-md">
              <h3 className="mb-2 font-semibold">
                What happens after I contact you?
              </h3>
              <p className="text-base-content/70">
                We&apos;ll reach out within 2 hours to schedule a quick
                15-minute call. We&apos;ll discuss your needs, answer questions,
                and provide a custom quote. No pushy sales tactics - just honest
                advice.
              </p>
            </div>
            <div className="card bg-base-300 p-6 text-left shadow-md">
              <h3 className="mb-2 font-semibold">
                Do you work with small budgets?
              </h3>
              <p className="text-base-content/70">
                Absolutely! Our Empower package starts at just $1,299. We
                believe every business deserves a great website. Let&apos;s talk
                about what works for your budget.
              </p>
            </div>
            <div className="card bg-base-300 p-6 text-left shadow-md">
              <h3 className="mb-2 font-semibold">
                What if I don&apos;t know what I want?
              </h3>
              <p className="text-base-content/70">
                Perfect! That&apos;s what we&apos;re here for. We&apos;ll guide
                you through everything and show you examples. By the end of our
                call, you&apos;ll have a clear vision for your new website.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
