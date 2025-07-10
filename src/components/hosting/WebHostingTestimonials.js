"use client";

import { motion } from "motion/react";
import SectionHeader from "@/components/sections/SectionHeader";

export default function WebHostingTestimonials({ testimonials }) {
  return (
    <SectionHeader
      title={
        <>
          Why Business Owners <span className="italic">Love</span> Our Service
        </>
      }
      subtitle="Business Success"
      desc="Don't just take our word for it. Here's what our business clients say about our managed hosting."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="card bg-base-300 p-6 shadow-md"
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-full bg-primary/20">
                <span className="text-lg text-primary">💼</span>
              </div>
              <span className="text-sm font-medium text-primary">
                Fully Managed
              </span>
            </div>
            <p className="mb-4 text-base-content/80 italic">
              &quot;{testimonial.quote}&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/20">
                <span className="font-semibold text-primary">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-base-content/60">
                  {testimonial.business}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Business benefits callout */}
      <div className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 p-8 text-center">
        <h3 className="mb-4 text-2xl font-medium">
          Focus on Your Business, Not Your Website
        </h3>
        <p className="mx-auto max-w-[70ch] text-base-content/80">
          Join hundreds of business owners who&apos;ve made the switch to fully
          managed hosting. Let our team handle the technical details while you
          focus on what you do best.
        </p>
      </div>
    </SectionHeader>
  );
}
