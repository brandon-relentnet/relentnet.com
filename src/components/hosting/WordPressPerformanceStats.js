"use client";

import { motion } from "motion/react";
import { AnimateNumber } from "motion-plus/react";

export default function WordPressPerformanceStats() {
  const stats = [
    { value: 2, suffix: "s", label: "Average Load Time", prefix: "<" },
    { value: 99.9, suffix: "%", label: "Uptime Guarantee" },
    { value: 24, suffix: "/7", label: "Expert Support" },
    { value: 100, suffix: "%", label: "SSD Storage" }
  ];

  return (
    <section className="relative bg-primary radial-gradient py-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-white">
            Performance That <span className="italic">Matters</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.prefix}
                <AnimateNumber
                  transition={{
                    visualDuration: 1.2,
                    type: "spring",
                    bounce: 0.25,
                  }}
                >
                  {stat.value}
                </AnimateNumber>
                {stat.suffix}
              </div>
              <div className="text-primary-content/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}