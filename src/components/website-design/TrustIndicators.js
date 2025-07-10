"use client";

import { motion } from "motion/react";
import { AnimateNumber } from "motion-plus/react";
import { StarIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

export default function TrustIndicators({ indicators }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="bg-base-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {indicators.map((indicator, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="mb-2 flex items-center justify-center text-4xl font-medium text-primary">
                <AnimateNumber
                  className="font-bold tracking-tighter"
                  style={{
                    fontSize: "inherit",
                    fontVariantNumeric: "tabular-nums",
                    fontWeight: "inherit",
                  }}
                  transition={{ duration: 2, delay: i * 0.3 }}
                >
                  {mounted ? indicator.number : 0}
                </AnimateNumber>
                {indicator.label === "Happy Businesses" && "+"}
                {indicator.label === "Love Their Sites" && "%"}
                {indicator.label === "Years Growing" && ""}
                {indicator.label === "Star Reviews" && (
                  <StarIcon className="ml-1 inline-block size-6" />
                )}
              </div>
              <div className="text-sm text-slate-300">{indicator.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}