"use client";

import { motion } from "motion/react";
import SectionHeader from "@/components/sections/SectionHeader";

export default function WordPressTestimonials({ testimonials }) {
  return (
    <SectionHeader
      title={
        <>
          What Our <span className="italic">WordPress Users</span> Say
        </>
      }
      subtitle="Performance Stories"
      desc="Real WordPress sites, real performance improvements. See how our hosting made the difference."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="card bg-base-300 shadow-md p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="size-8 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary text-lg">⚡</span>
              </div>
              <span className="text-sm font-medium text-primary">WordPress Optimized</span>
            </div>
            <p className="text-base-content/80 mb-4 italic">
              &quot;{testimonial.quote}&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="size-10 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-base-content/60">{testimonial.business}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionHeader>
  );
}