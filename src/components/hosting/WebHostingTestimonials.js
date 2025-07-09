"use client";

import { motion } from "motion/react";

export default function WebHostingTestimonials({ testimonials }) {
  return (
    <section className="relative py-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Why Business Owners <span className="italic">Love</span> Our Service
          </h2>
          <p className="text-base-content/80 max-w-[60ch] mx-auto">
            Don't just take our word for it. Here's what our business clients say about our managed hosting.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-gradient-to-br from-base-100 to-base-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl mr-4">
                  💼
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-accent">{testimonial.business}</p>
                </div>
              </div>
              
              <div className="text-primary text-3xl mb-4">"</div>
              <p className="text-base-content/80 leading-relaxed italic">
                {testimonial.quote}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Business benefits callout */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-medium mb-4">
            Focus on Your Business, Not Your Website
          </h3>
          <p className="text-base-content/80 max-w-[70ch] mx-auto">
            Join hundreds of business owners who've made the switch to fully managed hosting. 
            Let our team handle the technical details while you focus on what you do best.
          </p>
        </div>
      </div>
    </section>
  );
}