"use client";

import Link from "next/link";
import { AnimateNumber } from "motion-plus/react";
import SectionHeader from "@/components/sections/SectionHeader";

export default function WebHostingPlans({ plans }) {
  return (
    <SectionHeader
      title={
        <>
          Choose Your <span className="italic">Service</span> Level
        </>
      }
      subtitle="Managed Hosting Plans"
      desc="All plans include fully managed hosting. Higher tiers include dedicated phone support to help you grow your business."
      id="web-hosting-plans"
    >
      <div className="mx-auto mb-12 grid max-w-5xl gap-8 text-left md:grid-cols-3">
        {plans.map((plan, i) => (
          <PricingCard key={i} plan={plan} />
        ))}
      </div>

      {/* Value proposition section */}
      <div className="mt-16 text-center">
        <p className="mx-auto max-w-3xl text-base-content/60">
          <span className="font-semibold text-base-content">
            All plans include:
          </span>{" "}
          SSL certificates, daily backups, 24/7 monitoring, white-glove setup, and dedicated account management.
          <span className="font-medium text-primary">
            {" "}
            No setup fees. Cancel anytime.
          </span>
        </p>
      </div>
    </SectionHeader>
  );
}

function PricingCard({ plan }) {
  return (
    <div
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
            className="text-5xl font-bold tracking-tighter"
            transition={{
              visualDuration: 0.6,
              type: "spring",
              bounce: 0.25,
              opacity: { duration: 0.2, ease: "linear" },
            }}
          >
            {plan.monthlyPrice}
          </AnimateNumber>
          <span className="text-lg font-normal text-base-content/80">/mo</span>
        </div>
        {plan.supportHours > 0 && (
          <div className="mt-2 text-sm text-primary font-medium">
            Includes {plan.supportHours} hours phone support
          </div>
        )}
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
        href="/contact"
        className={`block rounded-xl px-6 py-3 text-center font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${
          plan.popular
            ? "bg-gradient-to-r from-primary to-accent text-white"
            : "bg-base-100 hover:bg-base-100/70"
        }`}
      >
        Get Started Today
      </Link>
    </div>
  );
}