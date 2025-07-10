"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { PricingCard } from "@/components/PricingCard";
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
          <PricingCard
            key={i}
            plan={plan}
            isYearly={isYearly}
            ctaText="Start Membership"
            ctaHref="/contact"
            featureLabel="What's Included:"
            showAnimation={true}
            animationDelay={i * 0.1}
          />
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