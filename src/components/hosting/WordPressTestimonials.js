"use client";

import { motion } from "motion/react";

export default function WordPressTestimonials({ testimonials }) {
  return (
    <section className="relative py-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            What Our <span className="italic">Customers</span> Say
          </h2>
          <p className="text-base-content/80 max-w-[60ch] mx-auto">
            Join thousands of WordPress users who trust RelentNet for their hosting needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="card bg-base-300 shadow-md hover:shadow-accent/30 transition duration-250 p-6"
            >
              <div className="text-primary text-2xl mb-4">"</div>
              <p className="text-base-content/80 mb-6 italic">
                {testimonial.quote}
              </p>
              <div className="border-t border-base-content/20 pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-base-content/70">{testimonial.business}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}