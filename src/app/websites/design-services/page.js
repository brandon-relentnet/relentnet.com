"use client";

import PageHero from "@/components/PageHero";
import Link from "next/link";
import { AnimateNumber } from "motion-plus/react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import ScrollButton from "@/components/ScrollButton";
import CustomButton from "@/components/CustomButton";
import { BoltIcon, StarIcon } from "@heroicons/react/24/solid";
import Accordion from "@/components/Accordian";
import SectionHeader from "@/components/sections/SectionHeader";

const faqs = [
  {
    question: "How fast can I get my website?",
    answer:
      "Really fast! Empower sites go live in 2 weeks. Most websites are ready in 3-4 weeks. The quicker you send us your photos and text, the faster we can build.",
  },
  {
    question: "Can I update it myself? I'm not tech-savvy.",
    answer:
      "Yes! We make it super easy. Think of it like updating Facebook - if you can post there, you can update your website. We'll show you exactly how, and we're always a call away if you get stuck.",
  },
  {
    question: "Why not just use Wix or Squarespace?",
    answer:
      "Those are like buying clothes off the rack - they work, but everyone looks the same. We create a website that's uniquely yours, plus we handle all the tricky stuff like making sure Google finds you and customers actually call.",
  },
  {
    question: "What about hosting? Is that included?",
    answer:
      "Hosting is like rent for your website - it's a separate small monthly fee ($10-50 depending on your needs). We'll set it all up and pick the perfect host for you. No tech knowledge needed!",
  },
  {
    question: "What if I don't like how it looks?",
    answer:
      "We'll keep tweaking until you love it - that's our promise. You get multiple rounds of changes with every package. In 3 years, we've never had someone unhappy with their final site.",
  },
  {
    question: "Can I see what you've built before?",
    answer:
      "Absolutely! Just reach out and we'll show you sites we've built for businesses like yours. We've created 40+ websites for everyone from plumbers to boutiques.",
  },
];

const plans = [
  {
    name: "Empower",
    tagline: "Perfect Start",
    builderPrice: 1299,
    customPrice: 2499,
    description: "Everything you need to look professional online",
    features: [
      "6 stunning pages that look great everywhere",
      "Show up when people search for you on Google",
      "Get customer inquiries straight to your inbox",
      "We'll fix any issues free for 30 days",
      "Your site goes live in just 2 weeks",
    ],
    bestFor: "New businesses ready to grow",
  },
  {
    name: "Amplify",
    tagline: "Most Popular",
    builderPrice: 2799,
    customPrice: 4999,
    description: "Turn browsers into buyers with powerful features",
    features: [
      "10 pages + blog to share your expertise",
      "Sell products directly from your site",
      "Build an email list on autopilot",
      "Connect your social media seamlessly",
      "2 months of support + personal training",
      "Ready to launch in 3 weeks",
    ],
    bestFor: "Businesses ready to scale up",
    popular: true,
  },
  {
    name: "Transform",
    tagline: "Maximum Impact",
    builderPrice: 4799,
    customPrice: 8999,
    description: "The complete package for serious growth",
    features: [
      "15+ pages with every feature you could want",
      "Sell unlimited products with pro tools",
      "Let customers book and pay instantly",
      "Chat with visitors in real-time",
      "3 months support + monthly growth reports",
      "VIP delivery in 4 weeks",
    ],
    bestFor: "Established businesses going big",
  },
];

// Trust indicators
const trustIndicators = [
  { number: 41, label: "Happy Businesses" },
  { number: 98, label: "Love Their Sites" },
  { number: 4.9, label: "Star Reviews" },
  { number: 3, label: "Years Growing" },
];

const platformComparison = {
  wordpress: {
    title: "WordPress",
    subtitle: "Your Smart Choice",
    benefits: [
      "Costs less to run each month",
      "Edit your site as easy as typing an email",
      "Add new features with one click",
      "Great for selling products & blogging",
      "Powers millions of successful sites",
    ],
  },
  nextjs: {
    title: "Next.js",
    subtitle: "Premium Performance",
    benefits: [
      "Lightning fast - your visitors won't wait",
      "Handles Black Friday traffic with ease",
      "Google loves these sites (better rankings!)",
      "Cutting-edge features that wow customers",
      "Built to last for years to come",
    ],
  },
};

export default function WebsiteDesignServices() {
  const [isCustom, setIsCustom] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <PageHero
        title={
          <>
            Websites that <span className="italic">just work</span>.
          </>
        }
        subtitle="Simple, Beautiful Web Design"
        description="Get a stunning website that's easy to manage. No tech degree required."
        button={{ label: "See Pricing", target: "website-plans" }}
      />

      {/* Trust Indicators Section */}
      <section className="bg-base-200 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {trustIndicators.map((indicator, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <div className="mb-2 flex items-center justify-center text-4xl font-medium text-primary">
                  <AnimateNumber
                    style={trustNumberStyle}
                    transition={{ duration: 2, delay: i * 0.3 }}
                  >
                    {mounted ? indicator.number : 0}
                  </AnimateNumber>
                  {indicator.label === "Happy Businesses" && "+"}
                  {indicator.label === "Love Their Sites" && "%"}
                  {indicator.label === "Years Growing" && ""}
                  {indicator.label === "Star Reviews" && (
                    <StarIcon className="ml-1 inline-block size-6" />
                  )}
                </div>
                <div className="text-sm text-slate-300">{indicator.label}</div>
              </motion.div>
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
                Clear Pricing. <span className="italic">Real Results</span>.
              </h2>
              <p className="section-desc">
                Pick your package. Get your website. Start attracting customers.
                It&apos;s that simple.
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
                    = Super fast, premium feel (perfect for busy sites)
                  </>
                ) : (
                  <>
                    <span className="font-semibold text-primary">
                      WordPress
                    </span>{" "}
                    = Simple to use, great value (our top pick for most)
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
                Every package includes:
              </span>{" "}
              Your own unique design (no templates!), looks great on phones,
              easy training, and all the files are yours.
              <span className="font-medium text-primary">
                {" "}
                Pay in full and save 5%.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative bg-base-200 py-section">
        <span className="bg-mask-left" />
        <div className="relative container mx-auto px-4 py-block">
          <div className="mb-8 text-center">
            <div className="section-subtitle">Still Deciding?</div>
            <h2 className="section-title">
              Which Platform Is <span className="italic">Right for You</span>?
            </h2>
          </div>

          <div className="mx-auto mb-8 grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="card bg-base-300 p-8 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl">
              <div className="mb-4 text-center">
                <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-sm font-semibold text-primary">
                  Best choice for most businesses
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
                  When every second counts
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
              <span className="font-semibold">Still confused?</span> Don&apos;t
              worry! We&apos;ll pick the perfect one for you.
              <br />
              Most of our clients love WordPress - it just works.
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="relative py-section">
        <span className="bg-mask-right" />
        <div className="relative container mx-auto px-4 py-block text-center">
          <div className="section-subtitle">Enterprise Solutions</div>
          <h2 className="section-title">
            Got a <span className="italic">Big Project</span>?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base-content/70">
            Building something huge? Multiple languages? Thousands of products?
            We love a challenge. Let&apos;s chat about your custom project.
          </p>
          <CustomButton href="/contact">Tell Us Your Ideas</CustomButton>
        </div>
      </section>

      {/* FAQ Section */}
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Your Questions Answered"
      >
        {/* FAQ Accordion */}
        <Accordion faqs={faqs} />
      </SectionHeader>

      {/* Final CTA Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-section">
        <div className="container mx-auto px-4 py-block text-center">
          <div className="section-subtitle">Let&apos;s Do This</div>
          <h2 className="section-title">
            Ready for a Website that{" "}
            <span className="italic">Actually Works</span>?
          </h2>
          <p className="section-desc mb-6">
            Join 40+ happy businesses who finally have websites they&apos;re
            proud of.
            <br />
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CustomButton href="/contact" gradient={false}>
              Start My Website Today
            </CustomButton>
            <span className="text-base-content/60">or</span>
            <ScrollButton targetId="website-plans" up={true}>
              Check Prices Again
            </ScrollButton>
          </div>
          <p className="mt-6 text-sm text-base-content/60">
            <BoltIcon className="inline-block size-4 text-accent/70" /> We
            usually reply within 2 hours (during business hours)
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

const trustNumberStyle = {
  fontSize: "inherit",
  fontVariantNumeric: "tabular-nums",
  fontWeight: "inherit",
};
