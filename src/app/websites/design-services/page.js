"use client";

import PageHero from "@/components/PageHero";
import Link from "next/link";
import { AnimateNumber } from "motion-plus/react";
import { motion } from "motion/react";
import { useState } from "react";

const faqs = [
  {
    question: "What's included in the one-time fee?",
    answer:
      "The one-time fee covers the complete custom design, development, and setup of your website, including all features listed in your selected package, initial content population, and launch support.",
  },
  {
    question: "What's the difference between WordPress and Next.js?",
    answer:
      "WordPress is perfect for content-heavy sites with easy management, while Next.js offers lightning-fast performance and modern app-like experiences. Both are custom-designed by our team - the platform choice depends on your specific needs.",
  },
  {
    question: "How long does it take to build my website?",
    answer:
      "Typical turnaround is 2-3 weeks for Starter, 3-4 weeks for Growth, and 4-6 weeks for Premium packages. Timeline may vary based on content readiness and revision rounds.",
  },
  {
    question: "What if I need more than what's included in a package?",
    answer:
      "You can easily add individual features or pages to any package. Additional pages are $199-399 each, and we offer custom quotes for complex integrations.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes! We offer 50% upfront and 50% on completion for all packages. We also have 3-month payment plans available for Premium packages.",
  },
  {
    question: "What happens after my website launches?",
    answer:
      "Each package includes post-launch support (30-90 days). After that, you can opt for our maintenance plans starting at $99/month, or we can train you to manage updates yourself.",
  },
];

const plans = [
  {
    name: "Empower",
    builderPrice: 1299,
    customPrice: 2499,
    description:
      "Perfect for small businesses and professional services establishing their online presence",
    features: [
      "Up to 6 Custom Pages (Home, About, Services, Contact + 2 more)",
      "Mobile-Responsive Design with Modern UI/UX",
      "Local SEO Optimization & Google Business Integration",
      "SSL Certificate & Security Setup",
      "Contact Forms, Google Maps & Social Links",
      "Basic Analytics Setup (Google Analytics & Search Console)",
      "2 Rounds of Design Revisions",
      "30-Day Post-Launch Support",
    ],
  },
  {
    name: "Amplify",
    builderPrice: 2799,
    customPrice: 4999,
    description:
      "Ideal for growing businesses ready to sell online and build their audience",
    features: [
      "Up to 10 Custom Pages with Advanced Layouts",
      "E-commerce Setup (up to 50 products) with Payment Gateway",
      "Blog/News Section with Content Management",
      "Email Marketing Integration (Mailchimp/ConvertKit)",
      "Advanced SEO with Schema Markup & Sitemap",
      "Social Media Feed Integration",
      "3 Rounds of Design Revisions",
      "60-Day Support with Training Sessions",
      "Basic Performance Optimization",
    ],
    popular: true,
  },
  {
    name: "Transform",
    builderPrice: 4799,
    customPrice: 8999,
    description:
      "For established businesses requiring advanced features and ongoing growth",
    features: [
      "Up to 15 Custom Pages with Dynamic Content",
      "Full E-commerce Platform (unlimited products)",
      "Custom Booking/Appointment System",
      "Live Chat & Customer Portal Integration",
      "Advanced SEO Strategy & Implementation",
      "Marketing Automation Setup",
      "Monthly Analytics Reports (3 months)",
      "Priority Support (90 days)",
      "Quarterly Maintenance Check-ins",
      "A/B Testing Setup for Conversions",
    ],
  },
];

const platformComparison = {
  wordpress: {
    title: "WordPress Platform",
    subtitle: "Content-First Design",
    benefits: [
      "Easy content management for your team",
      "Thousands of plugins for extended functionality",
      "Lower hosting costs ($10-30/month)",
      "Great for blogs, portfolios, and standard e-commerce",
      "Quick updates without developer help",
    ],
  },
  nextjs: {
    title: "Next.js Platform",
    subtitle: "Performance-First Design",
    benefits: [
      "Lightning-fast page loads (90+ PageSpeed scores)",
      "Better SEO with server-side rendering",
      "Modern, app-like user experience",
      "Handles high traffic without slowing down",
      "Perfect for SaaS, web apps, and complex sites",
    ],
  },
};

export default function WebsiteDesignServices() {
  const [isCustom, setIsCustom] = useState(false);

  return (
    <>
      <PageHero
        title={
          <>
            What we do <span className="italic">best</span>.
          </>
        }
        subtitle="Custom Web Design"
        description="Every business deserves a powerful online presence. All websites are custom-designed by our expert team."
        button={{ label: "View Plans", target: "website-plans" }}
      />
      {/* Website Plans Section */}
      <section id="website-plans" className="relative scroll-mt-40 py-section">
        <span className="bg-mask-right" />
        <div className="relative container mx-auto px-4 py-block">
          <div className="mx-auto mb-6 text-center md:w-2/3">
            <div className="mb-8">
              <div className="mb-2 text-sm font-bold tracking-widest text-primary uppercase">
                Pricing Plans
              </div>
              <h2 className="mb-6 text-4xl font-medium md:text-5xl">
                Choose Your <span className="italic">Perfect</span> Plan
              </h2>
              <p className="text-subtle mx-auto max-w-[80ch] text-base-content/80">
                Every website is custom designed from scratch. Choose your
                platform based on your business needs - both deliver
                professional results.
              </p>
            </div>

            <div className="mb-6 flex justify-center">
              <div className="switch card !inline-flex flex-row bg-base-300 p-2 shadow-md">
                <Button
                  isSelected={!isCustom}
                  onClick={() => setIsCustom(false)}
                >
                  WordPress
                </Button>
                <Button isSelected={isCustom} onClick={() => setIsCustom(true)}>
                  Next.js
                </Button>
              </div>
              <StyleSheet />
            </div>

            {/* Platform benefits mini-section */}
            <div className="mb-20 text-center">
              <p className="text-sm text-base-content/70">
                {isCustom ? (
                  <>
                    <span className="font-semibold text-primary">Next.js:</span>{" "}
                    Lightning-fast performance, modern features, perfect for
                    complex applications
                  </>
                ) : (
                  <>
                    <span className="font-semibold text-primary">
                      WordPress:
                    </span>{" "}
                    Easy content management, thousands of plugins, ideal for
                    content-heavy sites
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Pricing cards */}
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`card bg-base-300 shadow-lg ${
                  plan.popular
                    ? "scale-105 border-2 border-primary hover:shadow-primary/30"
                    : "border-2 border-transparent hover:border-accent/30 hover:shadow-accent/30"
                } relative p-8 transition duration-200`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="mb-2 text-sm font-bold tracking-widest text-primary uppercase">
                  {plan.name}
                </h3>
                <div className="mb-2 text-4xl font-bold">
                  <span className="text-sm font-normal text-base-content/60 italic"></span>
                  <AnimateNumber
                    format={{
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }}
                    locales="en-US"
                    className="number text-6xl font-normal text-base-content/80"
                    suffix={"+"}
                    transition={{
                      visualDuration: 0.6,
                      type: "spring",
                      bounce: 0.25,
                      opacity: { duration: 0.2, ease: "linear" },
                    }}
                  >
                    {isCustom ? plan.customPrice : plan.builderPrice}
                  </AnimateNumber>
                </div>

                <p className="mb-6 text-base-content/80">{plan.description}</p>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <div className="mt-0.5 flex size-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                        ✓
                      </div>
                      <span className="text-sm text-base-content/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://clients.relentnet.com/index.php?rp=/store/web-design"
                  className={`block rounded-xl px-6 py-3 text-center font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${
                    plan.popular
                      ? "bg-gradient-to-r from-primary to-accent text-white"
                      : "bg-base-100 hover:bg-base-100/70"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          {/* Value proposition section */}
          <div className="mt-16 text-center">
            <p className="mx-auto max-w-3xl text-base-content/60">
              <span className="font-semibold text-base-content">
                All plans include:
              </span>{" "}
              Custom design (no templates), mobile optimization, basic training,
              and source files.
              <span className="font-medium text-primary">
                {" "}
                Save 5% when you pay in full upfront.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Platform Comparison Section */}
      <section className="relative bg-base-200 py-section">
        <span className="bg-mask-left" />
        <div className="relative container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-2 text-sm font-bold tracking-widest text-primary uppercase">
              Platform Comparison
            </div>
            <h2 className="mb-6 text-3xl font-medium md:text-4xl">
              Which Platform is Right for You?
            </h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="card bg-base-300 p-8 shadow-lg transition-shadow hover:shadow-xl">
              <h3 className="mb-2 text-2xl font-medium">
                {platformComparison.wordpress.title}
              </h3>
              <p className="mb-4 text-primary">
                {platformComparison.wordpress.subtitle}
              </p>
              <ul className="space-y-2">
                {platformComparison.wordpress.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 text-primary">•</span>
                    <span className="text-base-content/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card bg-base-300 p-8 shadow-lg transition-shadow hover:shadow-xl">
              <h3 className="mb-2 text-2xl font-medium">
                {platformComparison.nextjs.title}
              </h3>
              <p className="mb-4 text-primary">
                {platformComparison.nextjs.subtitle}
              </p>
              <ul className="space-y-2">
                {platformComparison.nextjs.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 text-primary">•</span>
                    <span className="text-base-content/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="relative py-section">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-2 text-sm font-bold tracking-widest text-primary uppercase">
            Enterprise
          </div>
          <h2 className="mb-6 text-3xl font-medium md:text-4xl">
            Need something bigger? We build enterprise-grade websites starting
            at $15,000.
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base-content/70">
            Complex integrations, custom APIs, multi-language support, and
            dedicated project management.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-lg font-semibold tracking-widest text-white transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative bg-base-200 py-section">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-2 text-sm font-bold tracking-widest text-primary uppercase">
              FAQ
            </div>
            <h2 className="mb-6 text-3xl font-medium md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="collapse-plus collapse bg-base-100 shadow-md"
              >
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg font-medium">
                  {faq.question}
                </div>
                <div className="collapse-content">
                  <p className="text-base-content/80 italic">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-section">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-2 text-sm font-bold tracking-widest text-primary uppercase">
            Ready to Start?
          </div>
          <h2 className="mb-6 text-3xl font-medium md:text-4xl">
            Let&apos;s build something amazing together.
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base-content/70">
            Schedule a free consultation to discuss your project and get a
            personalized recommendation.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-lg font-semibold tracking-widest text-white transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </>
  );
}

function Button({ children, isSelected, onClick }) {
  return (
    <button onClick={onClick}>
      <motion.span
        initial={false}
        animate={{
          color: isSelected
            ? "var(--color-primary-content)"
            : "var(--color-base-content)",
          opacity: isSelected ? 1 : 0.7,
        }}
        className={`cursor-pointer px-6 py-3 text-lg font-medium`}
      >
        {children}
      </motion.span>
      {isSelected && (
        <motion.div
          layoutId="selected"
          className="selected bg-primary"
          style={{ borderRadius: 25, zIndex: 1 }}
        />
      )}
    </button>
  );
}

/**
 * ==============   Styles   ================
 */
const StyleSheet = () => {
  return (
    <style>{`
        .number {
            letter-spacing: -0.04em;
            font-weight: 530;
        }

        .switch button {
            position: relative;
            display: flex;
        }

        .number-section-post {
            font-size: 24px;
            opacity: 0.5;
            position: relative;
            bottom: 15px;
            align-self: flex-end;
            margin-left: 5px;
            letter-spacing: -0.02em;
        }

        .switch button span {
            z-index: 2;
            position: relative;
            will-change: opacity;
            line-height: 1;
        }

        .switch .selected {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            will-change: transform;
        }
    `}</style>
  );
};
