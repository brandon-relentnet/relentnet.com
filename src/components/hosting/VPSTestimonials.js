"use client";

import { motion } from "motion/react";

export default function VPSTestimonials({ testimonials }) {
  return (
    <section className="relative py-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Trusted by <span className="italic">Developers</span> & Enterprises
          </h2>
          <p className="text-base-content/80 max-w-[60ch] mx-auto">
            See what developers, agencies, and technical teams say about our VPS infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-gradient-to-br from-base-300 to-base-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-base-content/10"
            >
              <div className="flex items-center mb-6">
                <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl mr-4 font-mono">
                  &gt;_
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-accent font-mono">{testimonial.business}</p>
                </div>
              </div>
              
              <div className="text-primary text-3xl mb-4 font-mono">"</div>
              <p className="text-base-content/80 leading-relaxed">
                {testimonial.quote}
              </p>

              {/* Tech indicator */}
              <div className="mt-6 flex items-center gap-2 text-xs text-base-content/60">
                <span className="size-2 bg-green-500 rounded-full"></span>
                <span>Verified technical user</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance metrics */}
        <div className="mt-16 bg-gradient-to-r from-base-300 to-base-200 rounded-2xl p-8">
          <h3 className="text-2xl font-medium mb-8 text-center">
            Infrastructure <span className="italic">Performance</span>
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2 font-mono">&lt;30s</div>
              <div className="text-sm text-base-content/70">Deployment Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2 font-mono">99.9%</div>
              <div className="text-sm text-base-content/70">Network Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2 font-mono">0s</div>
              <div className="text-sm text-base-content/70">Scaling Downtime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2 font-mono">24/7</div>
              <div className="text-sm text-base-content/70">System Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}