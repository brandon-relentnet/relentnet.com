"use client";

import { motion } from "motion/react";
import { StarIcon } from "@heroicons/react/24/solid";
import SectionHeader from "@/components/sections/SectionHeader";

export default function StoreTestimonials({ testimonials }) {
  return (
    <SectionHeader
      title={
        <>
          What Our <span className="italic">Store Owners</span> Say
        </>
      }
      subtitle="Success Stories"
      desc="Real businesses, real results. See how our platform helped them grow their online sales."
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
              {[...Array(5)].map((_, j) => (
                <StarIcon key={j} className="size-5 text-accent" />
              ))}
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