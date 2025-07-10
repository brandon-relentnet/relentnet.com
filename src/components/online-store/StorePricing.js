"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { AnimateNumber } from "motion-plus/react";
import SectionHeader from "@/components/sections/SectionHeader";
import PlatformToggle from "@/components/website-design/PlatformToggle";

export default function StorePricing({ plans }) {
  const [isCustom, setIsCustom] = useState(false);

  return (
    <SectionHeader
      title={
        <>
          Online Store <span className="italic">Pricing</span>
        </>
      }
      subtitle="Store Packages"
      desc="One-time payment. No monthly fees. Just a powerful online store that sells."
      maskRight={false}
      id="store-pricing"
    >
      <div className="mx-auto mb-6 text-center md:w-2/3">
        <PlatformToggle isCustom={isCustom} setIsCustom={setIsCustom} />

        {/* Platform benefits mini-section */}
        <div className="mb-20 text-center">
          <p className="text-sm text-base-content/70">
            {isCustom ? (
              <>
                <span className="font-semibold text-primary">Next.js</span> =
                Lightning fast store, handles high traffic (perfect for serious sellers)
              </>
            ) : (
              <>
                <span className="font-semibold text-primary">WordPress</span>{" "}
                = Easy to manage, cost-effective (great for most online stores)
              </>
            )}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`card bg-base-300 shadow-lg ${
              plan.popular ? 'border-2 border-primary scale-105 hover:shadow-primary/30' : 'border-2 border-transparent hover:border-accent/30 hover:shadow-accent/30'
            } transition duration-250 p-8 relative`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-content px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            )}
            <div className="mb-1 text-xs font-semibold tracking-wider text-accent uppercase">
              {plan.tagline}
            </div>
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-sm text-base-content/70 mb-4">{plan.description}</p>

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
                    <span className="text-sm text-base-content/80">{feature}</span>
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
              href="https://clients.relentnet.com/index.php?rp=/store/online-store"
              className={`block text-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${
                plan.popular 
                  ? 'bg-gradient-to-r from-primary to-accent text-white' 
                  : 'bg-base-100 hover:bg-base-100/70'
              }`}
            >
              Start My Store
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Value proposition section */}
      <div className="mt-16 text-center">
        <p className="mx-auto max-w-3xl text-base-content/60">
          <span className="font-semibold text-base-content">
            Every package includes:
          </span>{" "}
          Custom store design (no templates!), mobile optimization, payment processing setup,
          and complete training on managing your store.
          <span className="font-medium text-primary">
            {" "}
            Pay in full and save 5%.
          </span>
        </p>
      </div>
    </SectionHeader>
  );
}