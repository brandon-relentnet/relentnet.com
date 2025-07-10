"use client";

import { motion } from "motion/react";
import SectionHeader from "@/components/sections/SectionHeader";

export default function VPSTestimonials({ testimonials }) {
  return (
    <SectionHeader
      title={
        <>
          Trusted by <span className="italic">Developers</span> & Enterprises
        </>
      }
      subtitle="Technical Reviews"
      desc="See what developers, agencies, and technical teams say about our VPS infrastructure."
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
                <span className="text-primary text-lg font-mono">&gt;_</span>
              </div>
              <span className="text-sm font-medium text-primary">Developer Verified</span>
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
                <div className="text-sm text-base-content/60 font-mono">{testimonial.business}</div>
              </div>
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
    </SectionHeader>
  );
}