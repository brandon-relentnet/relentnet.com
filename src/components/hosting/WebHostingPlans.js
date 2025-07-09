"use client";

import { motion } from "motion/react";
import Link from "next/link";
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
      maskRight={true}
      id="web-hosting-plans"
      className="bg-base-200"
    >
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`card bg-base-100 shadow-lg ${
              plan.popular ? 'border-2 border-primary scale-105' : 'border-2 border-transparent'
            } hover:shadow-accent/30 transition duration-250 p-8 relative`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            )}
            
            <div className="mb-1 text-xs font-semibold tracking-wider text-accent uppercase">
              {plan.tagline}
            </div>
            <h3 className="text-2xl font-medium mb-2">{plan.name}</h3>
            
            <div className="mb-4">
              <div className="text-4xl font-bold mb-2">
                ${plan.monthlyPrice}
                <span className="text-lg font-normal text-base-content/80">/month</span>
              </div>
              
              {plan.supportHours > 0 && (
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  📞 {plan.supportHours} hours phone support
                </div>
              )}
            </div>
            
            <p className="text-base-content/80 mb-6">{plan.description}</p>
            
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-3">
                  <div className="size-5 bg-primary/20 text-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-sm text-base-content/80">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mb-6 rounded-lg bg-gradient-to-r from-base-300/50 to-base-200/50 p-4">
              <p className="text-xs text-base-content/70">
                <span className="font-semibold">Perfect for:</span> {plan.bestFor}
              </p>
            </div>
            
            <Link
              href="/contact"
              className={`block text-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${
                plan.popular 
                  ? 'bg-gradient-to-r from-primary to-accent text-white' 
                  : 'bg-base-300 hover:bg-base-300/70'
              }`}
            >
              Get Started Today
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Value proposition */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
          <span className="text-2xl">🎯</span>
          <span className="font-semibold">
            All plans include: SSL certificates, daily backups, 24/7 monitoring, and white-glove setup
          </span>
        </div>
      </div>
    </SectionHeader>
  );
}