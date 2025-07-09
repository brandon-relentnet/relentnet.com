"use client";

import { motion } from "motion/react";
import Link from "next/link";
import SectionHeader from "@/components/sections/SectionHeader";

export default function VPSPlans({ plans }) {
  return (
    <SectionHeader
      title={
        <>
          Configure Your <span className="italic">Perfect</span> VPS
        </>
      }
      subtitle="VPS Specifications"
      desc="Choose the exact resources you need. All plans include full root access, instant scaling, and enterprise-grade infrastructure."
      maskLeft={true}
      id="vps-plans"
      className="bg-base-200"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`card bg-base-100 shadow-lg ${
              plan.popular ? 'border-2 border-primary scale-105' : 'border-2 border-transparent'
            } hover:shadow-accent/30 transition duration-250 p-6 relative`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                Most Popular
              </div>
            )}
            
            <div className="mb-1 text-xs font-semibold tracking-wider text-accent uppercase">
              {plan.tagline}
            </div>
            <h3 className="text-xl font-medium mb-4">{plan.name}</h3>
            
            {/* Technical specs prominently displayed */}
            <div className="mb-6 space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-base-300">
                <span className="text-sm text-base-content/70">CPU</span>
                <span className="font-mono text-sm">{plan.cpu}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-base-300">
                <span className="text-sm text-base-content/70">RAM</span>
                <span className="font-mono text-sm">{plan.ram}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-base-300">
                <span className="text-sm text-base-content/70">Storage</span>
                <span className="font-mono text-sm">{plan.storage}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-base-300">
                <span className="text-sm text-base-content/70">Bandwidth</span>
                <span className="font-mono text-sm">{plan.bandwidth}</span>
              </div>
            </div>

            <div className="text-center mb-4">
              <div className="text-3xl font-bold mb-1">
                ${plan.monthlyPrice}
                <span className="text-lg font-normal text-base-content/80">/mo</span>
              </div>
              <p className="text-xs text-base-content/70">{plan.description}</p>
            </div>
            
            <ul className="space-y-2 mb-6 text-sm">
              {plan.features.slice(0, 4).map((feature, j) => (
                <li key={j} className="flex items-start gap-2">
                  <div className="size-4 bg-primary/20 text-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                    ✓
                  </div>
                  <span className="text-base-content/80 text-xs">{feature}</span>
                </li>
              ))}
              {plan.features.length > 4 && (
                <li className="text-xs text-accent">+ {plan.features.length - 4} more features</li>
              )}
            </ul>

            <div className="mb-4 rounded-lg bg-base-300/50 p-3">
              <p className="text-xs text-base-content/70">
                <span className="font-semibold">Ideal for:</span> {plan.bestFor}
              </p>
            </div>
            
            <Link
              href="/contact"
              className={`block text-center px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 ${
                plan.popular 
                  ? 'bg-gradient-to-r from-primary to-accent text-white' 
                  : 'bg-base-300 hover:bg-base-300/70'
              }`}
            >
              Deploy Now
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Configuration options */}
      <div className="mt-16 text-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-primary/10 text-primary px-6 py-4 rounded-full">
          <span className="text-2xl">⚡</span>
          <span className="font-semibold text-sm">
            Custom configurations available • Root access included • Instant scaling
          </span>
        </div>
      </div>
    </SectionHeader>
  );
}