"use client";

import PageHero from "@/components/PageHero";
import Link from "next/link";
import { AnimateNumber } from "motion-plus/react";
import { motion } from "motion/react";
import { useState } from "react";
import ScrollButton from "@/components/ScrollButton";
import CustomButton from "@/components/CustomButton";

const faqs = [
  {
    question: "How quickly can my website be live?",
    answer:
      "We can have your website live in as little as 2 weeks for Empower plans. Most clients are up and running within 3-4 weeks, depending on how quickly you can provide content and feedback.",
  },
  {
    question: "Will I be able to update my website myself?",
    answer:
      "Absolutely! We provide training with every package and build your site with easy-to-use tools. WordPress sites are especially user-friendly for content updates. We're always here to help if you need us.",
  },
  {
    question: "What makes you different from DIY website builders?",
    answer:
      "We create custom designs that make your business stand out, not cookie-cutter templates. Plus, we handle all the technical setup, SEO optimization, and ensure your site actually brings in customers - things that take months to learn on your own.",
  },
  {
    question: "Do I need to pay extra for hosting?",
    answer:
      "Hosting is separate and typically costs $10-30/month for WordPress or $20-50/month for Next.js sites. We'll set everything up and recommend the best hosting for your needs.",
  },
  {
    question: "What if I'm not happy with the design?",
    answer:
      "Your satisfaction is guaranteed. Each package includes multiple revision rounds, and we don't stop until you love your website. We've never had a client walk away unhappy.",
  },
  {
    question: "Can I see examples of your work?",
    answer:
      "Of course! Contact us for a personalized portfolio showcase featuring websites similar to what you're looking for. We have hundreds of happy clients across every industry.",
  },
];

const plans = [
  {
    name: "Empower",
    tagline: "Get Online Fast",
    builderPrice: 1299,
    customPrice: 2499,
    description: "Start attracting customers with a professional website",
    features: [
      "Beautiful 6-page website that works on all devices",
      "Get found on Google with local SEO",
      "Contact forms that send leads to your email",
      "Free updates for 30 days after launch",
      "2-week turnaround time",
    ],
    bestFor: "Service businesses, consultants, startups",
  },
  {
    name: "Amplify",
    tagline: "Grow Your Business",
    builderPrice: 2799,
    customPrice: 4999,
    description: "Everything you need to sell online and build your brand",
    features: [
      "Stunning 10-page website with blog",
      "Sell up to 50 products online",
      "Collect emails & grow your audience",
      "Instagram & Facebook integration",
      "60 days of support + training included",
      "3-week turnaround time",
    ],
    bestFor: "Growing businesses, online stores, content creators",
    popular: true,
  },
  {
    name: "Transform",
    tagline: "Dominate Your Market",
    builderPrice: 4799,
    customPrice: 8999,
    description: "Advanced features to stay ahead of your competition",
    features: [
      "Premium 15-page website with all the bells & whistles",
      "Unlimited products & advanced e-commerce",
      "Book appointments & accept payments online",
      "Live chat to convert more visitors",
      "3 months of support + monthly performance reports",
      "Priority 4-week delivery",
    ],
    bestFor: "Established businesses ready to scale",
  },
];

// Trust indicators
const trustIndicators = [
  { number: "40+", label: "Websites Launched" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "5★", label: "Average Rating" },
  { number: "3yr", label: "In Business" },
];

const platformComparison = {
  wordpress: {
    title: "WordPress",
    subtitle: "Best for Most Businesses",
    benefits: [
      "Save money with affordable hosting",
      "Update content without calling us",
      "Add features easily as you grow",
      "Perfect for blogs & online stores",
      "Trusted by 40% of all websites",
    ],
  },
  nextjs: {
    title: "Next.js",
    subtitle: "When Speed Matters Most",
    benefits: [
      "3x faster page loads than competitors",
      "Handle massive traffic without crashing",
      "Better Google rankings with superior SEO",
      "Modern features your customers will love",
      "Future-proof technology investment",
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
            Websites that <span className="italic">get results</span>.
          </>
        }
        subtitle="Custom Web Design"
        description="Stop losing customers to your competition. Get a website that turns visitors into buyers."
        button={{ label: "See Pricing", target: "website-plans" }}
      />

      {/* Trust Indicators Section */}
      <section className="bg-base-200 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {trustIndicators.map((indicator, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {indicator.number}
                </div>
                <div className="text-sm text-base-content/70">
                  {indicator.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Plans Section */}
      <section id="website-plans" className="relative scroll-mt-40 py-section">
        <span className="bg-mask-right" />
        <div className="relative container mx-auto px-4 py-block">
          <div className="mx-auto mb-6 text-center md:w-2/3">
            <div className="mb-8">
              <div className="section-subtitle">Plans</div>
              <h2 className="section-title">
                Simple Pricing. <span className="italic">No Surprises</span>.
              </h2>
              <p className="section-desc">
                One-time payment. No hidden fees. Just a beautiful website that
                grows your business.
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
                    <span className="font-semibold text-primary">Next.js</span>{" "}
                    = Lightning fast, premium experience (recommended for
                    high-traffic sites)
                  </>
                ) : (
                  <>
                    <span className="font-semibold text-primary">
                      WordPress
                    </span>{" "}
                    = Easy to manage, budget-friendly (recommended for most
                    businesses)
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Pricing cards */}
          <div className="mx-auto mb-12 grid max-w-5xl gap-8 md:grid-cols-3">
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
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-content">
                    Most Popular
                  </div>
                )}
                <div className="mb-1 text-xs font-semibold tracking-wider text-accent uppercase">
                  {plan.tagline}
                </div>
                <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                <p className="mb-4 text-sm text-base-content/70">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <AnimateNumber
                      format={{
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }}
                      locales="en-US"
                      suffix={"+"}
                      className="number text-5xl font-bold"
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
                </div>

                <div className="mb-6">
                  <div className="mb-3 text-xs font-semibold tracking-wider text-primary uppercase">
                    What You Get:
                  </div>
                  <ul className="space-y-3">
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
                </div>

                <div className="mb-6 rounded-lg bg-base-100/50 p-3">
                  <p className="text-xs text-base-content/70">
                    <span className="font-semibold">Best for:</span>{" "}
                    {plan.bestFor}
                  </p>
                </div>

                <Link
                  href="https://clients.relentnet.com/index.php?rp=/store/web-design"
                  className={`block rounded-xl px-6 py-3 text-center font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${
                    plan.popular
                      ? "bg-gradient-to-r from-primary to-accent text-white"
                      : "bg-base-100 hover:bg-base-100/70"
                  }`}
                >
                  Start My Project
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

      {/* Comparison Table */}
      <section className="relative bg-base-200 py-section">
        <span className="bg-mask-left" />
        <div className="relative container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="section-subtitle">Still Deciding?</div>
            <h2 className="section-title">
              Choose the Right Platform for Your Business
            </h2>
          </div>

          <div className="mx-auto mb-8 grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="card bg-base-300 p-8 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl">
              <div className="mb-4 text-center">
                <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-sm font-semibold text-primary">
                  Recommended for 80% of businesses
                </span>
              </div>
              <h3 className="mb-2 text-center text-2xl font-bold">
                {platformComparison.wordpress.title}
              </h3>
              <p className="mb-6 text-center font-semibold text-accent">
                {platformComparison.wordpress.subtitle}
              </p>
              <ul className="space-y-3">
                {platformComparison.wordpress.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="font-bold text-primary">✓</span>
                    <span className="text-base-content/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card bg-base-300 p-8 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl">
              <div className="mb-4 text-center">
                <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-sm font-semibold text-accent">
                  For high-performance needs
                </span>
              </div>
              <h3 className="mb-2 text-center text-2xl font-bold">
                {platformComparison.nextjs.title}
              </h3>
              <p className="mb-6 text-center font-semibold text-accent">
                {platformComparison.nextjs.subtitle}
              </p>
              <ul className="space-y-3">
                {platformComparison.nextjs.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="font-bold text-primary">✓</span>
                    <span className="text-base-content/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-12 text-center">
            <p className="text-base-content/60">
              <span className="font-semibold">Not sure which to choose?</span>{" "}
              Most businesses do great with WordPress.
              <br />
              We'll recommend the best option during your free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="relative py-section">
        <span className="bg-mask-right" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="section-subtitle">Enterprise Solutions</div>
          <h2 className="section-title">Need Something Bigger?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-base-content/70">
            Custom quotes available for complex projects, multi-language sites,
            and enterprise applications starting at $15,000.
          </p>
          <CustomButton href="/contact">Let&apos;s Talk</CustomButton>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative bg-base-200 py-section">
        <span className="bg-mask-left" />
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="section-subtitle">Common Questions</div>
            <h2 className="section-title">Everything You Need to Know</h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="collapse-plus collapse bg-base-300 shadow-md"
              >
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg font-medium">
                  {faq.question}
                </div>
                <div className="collapse-content">
                  <p className="text-base-content/80">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-section">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-2 text-sm font-bold tracking-widest text-primary uppercase">
            Let&apos;s Do This
          </div>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Ready to Grow Your Business?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-base-content/80">
            Join 40+ businesses that trust us with their online presence.
            <br />
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CustomButton href="/contact" gradient={false}>
              Get My Free Consultation
            </CustomButton>
            <span className="text-base-content/60">or</span>
            <ScrollButton targetId="website-plans" up={true}>
              View Pricing Again
            </ScrollButton>
          </div>
          <p className="mt-6 text-sm text-base-content/60">
            ⚡ Average response time: 2 hours during business days
          </p>
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
            font-weight: 700;
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
