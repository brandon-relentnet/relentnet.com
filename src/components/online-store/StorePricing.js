"use client";

import { motion } from "motion/react";
import Link from "next/link";
import SectionHeader from "@/components/sections/SectionHeader";

export default function StorePricing({ plans }) {
  return (
    <SectionHeader
      title={
        <>
          Choose Your <span className="italic">Perfect</span> Plan
        </>
      }
      subtitle="Flexible Pricing"
      desc="Start small and grow big. Our pricing scales with your business needs."
      maskRight={false}
      id="store-pricing"
    >
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`card bg-base-300 shadow-lg ${
              plan.popular ? 'border-2 border-primary scale-105' : 'border-2 border-transparent'
            } hover:shadow-accent/30 transition duration-250 p-8 relative`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-content px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-medium mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold mb-2 text-primary">
              {plan.price}
              {plan.price !== "Custom" && <span className="text-lg font-normal text-base-content/80">/month</span>}
            </div>
            <p className="text-base-content/80 mb-6">{plan.description}</p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-2">
                  <div className="size-5 bg-primary/20 text-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-base-content/80">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={`block text-center px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 active:scale-95 ${
                plan.popular 
                  ? 'bg-gradient-to-r from-primary to-accent text-white' 
                  : 'bg-base-100 hover:bg-base-100/70'
              }`}
            >
              Get Started
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionHeader>
  );
}