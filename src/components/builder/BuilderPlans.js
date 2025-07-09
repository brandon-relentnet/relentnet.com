"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { AnimateNumber } from "motion-plus/react";
import SectionHeader from "@/components/sections/SectionHeader";

function PricingToggle({ isYearly, setIsYearly }) {
  return (
    <div className="mb-6 flex justify-center">
      <div className="card !inline-flex flex-row bg-base-300 p-2 shadow-md">
        <Button isSelected={!isYearly} onClick={() => setIsYearly(false)}>
          Monthly
        </Button>
        <Button isSelected={isYearly} onClick={() => setIsYearly(true)}>
          Yearly
        </Button>
      </div>
    </div>
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
          layoutId="selected-pricing"
          className="absolute inset-0 bg-primary will-change-transform"
          style={{ borderRadius: 25, zIndex: 1 }}
        />
      )}
    </button>
  );
}

export default function BuilderPlans({ plans }) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <SectionHeader
      title={
        <>
          Choose Your <span className="italic">Membership</span> Plan
        </>
      }
      subtitle="Builder Memberships"
      desc="Get unlimited access to premium templates, elements, and tools. Cancel anytime."
      maskRight={false}
      id="builder-plans"
    >
      <div className="mx-auto mb-6 text-center md:w-2/3">
        <PricingToggle isYearly={isYearly} setIsYearly={setIsYearly} />

        {/* Savings indicator */}
        <div className="mb-20 text-center">
          <p className="text-sm text-base-content/70">
            {isYearly ? (
              <>
                <span className="font-semibold text-primary">Yearly</span> =
                Save 2 months! Plus get bonus templates and priority support.
              </>
            ) : (
              <>
                <span className="font-semibold text-primary">Monthly</span> =
                Flexible billing, cancel anytime. Perfect for testing the
                waters.
              </>
            )}
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl gap-8 text-left md:grid-cols-3">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`card bg-base-300 shadow-lg ${
              plan.popular
                ? "scale-105 border-2 border-primary hover:shadow-primary/30"
                : "border-2 border-transparent hover:border-accent/30 hover:shadow-accent/30"
            } relative p-8 transition duration-250`}
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
                <span className="text-lg text-base-content/80">$</span>
                <AnimateNumber
                  className="text-5xl font-bold tracking-tighter"
                  transition={{
                    visualDuration: 0.6,
                    type: "spring",
                    bounce: 0.25,
                    opacity: { duration: 0.2, ease: "linear" },
                  }}
                >
                  {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </AnimateNumber>
                <span className="text-lg text-base-content/80">
                  {isYearly ? "/year" : "/month"}
                </span>
              </div>
              <motion.p
                animate={{
                  opacity: isYearly ? 1 : 0,
                  height: isYearly ? "auto" : 0,
                  marginTop: isYearly ? 4 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden text-sm text-accent"
              >
                Save ${plan.monthlyPrice * 12 - plan.yearlyPrice} per year!
              </motion.p>
            </div>

            <div className="mb-6">
              <div className="mb-3 text-xs font-semibold tracking-wider text-primary uppercase">
                What&apos;s Included:
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
                <span className="font-semibold">Best for:</span> {plan.bestFor}
              </p>
            </div>

            <Link
              href="/contact"
              className={`block rounded-xl px-6 py-3 text-center font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${
                plan.popular
                  ? "bg-gradient-to-r from-primary to-accent text-white"
                  : "bg-base-100 hover:bg-base-100/70"
              }`}
            >
              Start Membership
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Value proposition section */}
      <div className="mt-16 text-center">
        <p className="mx-auto max-w-3xl text-base-content/60">
          <span className="font-semibold text-base-content">
            All memberships include:
          </span>{" "}
          Divi and Elementor pro licenses, premium WordPress plugins, unlimited
          downloads, and access to our private community.
          <span className="font-medium text-primary">
            {" "}
            Cancel anytime, no questions asked.
          </span>
        </p>
      </div>
    </SectionHeader>
  );
}
