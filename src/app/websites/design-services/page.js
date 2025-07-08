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
import {
  trustIndicators,
  plans,
  platformComparison,
  faqs,
} from "@/data/siteData";

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
                    className="font-bold tracking-tighter"
                    style={{
                      fontSize: "inherit",
                      fontVariantNumeric: "tabular-nums",
                      fontWeight: "inherit",
                    }}
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
      <SectionHeader
        title={
          <>
            Clear Pricing. <span className="italic">Real Results</span>.
          </>
        }
        subtitle="Plans"
        id="website-plans"
        desc="Pick your package. Get your website. Start attracting customers. It's that simple."
      >
        <div className="mx-auto mb-6 text-center md:w-2/3">
          <div className="mb-6 flex justify-center">
            <div className="card !inline-flex flex-row bg-base-300 p-2 shadow-md">
              <Button isSelected={!isCustom} onClick={() => setIsCustom(false)}>
                WordPress
              </Button>
              <Button isSelected={isCustom} onClick={() => setIsCustom(true)}>
                Next.js
              </Button>
            </div>
          </div>

          {/* Platform benefits mini-section */}
          <div className="mb-20 text-center">
            <p className="text-sm text-base-content/70">
              {isCustom ? (
                <>
                  <span className="font-semibold text-primary">Next.js</span> =
                  Super fast, premium feel (perfect for busy sites)
                </>
              ) : (
                <>
                  <span className="font-semibold text-primary">WordPress</span>{" "}
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
                    suffix="+"
                    className="text-5xl font-bold tracking-tighter"
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
            Your own unique design (no templates!), looks great on phones, easy
            training, and all the files are yours.
            <span className="font-medium text-primary">
              {" "}
              Pay in full and save 5%.
            </span>
          </p>
        </div>
      </SectionHeader>

      {/* Comparison Table */}
      <SectionHeader
        title="Which Platform is Right for You?"
        subtitle="Still Deciding?"
        maskRight={false}
      >
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
      </SectionHeader>

      {/* Enterprise Section */}
      <SectionHeader
        title="Enterprise Solutions"
        desc="Building something huge? Multiple languages? Thousands of products? We
          love a challenge. Let's chat about your custom project."
        subtitle="Got a Big Project?"
      >
        <CustomButton href="/contact">Tell Us Your Ideas</CustomButton>
      </SectionHeader>

      {/* FAQ Section */}
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Your Questions Answered"
        maskRight={false}
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
    <button onClick={onClick} className="relative flex">
      <motion.span
        initial={false}
        animate={{
          color: isSelected
            ? "var(--color-primary-content)"
            : "var(--color-base-content)",
          opacity: isSelected ? 1 : 0.7,
        }}
        className="relative z-[2] cursor-pointer px-6 py-3 text-lg leading-none font-medium will-change-[opacity]"
      >
        {children}
      </motion.span>
      {isSelected && (
        <motion.div
          layoutId="selected"
          className="absolute inset-0 bg-primary will-change-transform"
          style={{ borderRadius: 25, zIndex: 1 }}
        />
      )}
    </button>
  );
}
