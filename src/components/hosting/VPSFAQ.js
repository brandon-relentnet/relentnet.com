"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function VPSFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative bg-base-200 py-section">
      <span className="bg-mask-right" />
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Technical <span className="italic">Documentation</span>
          </h2>
          <p className="text-base-content/80 max-w-[60ch] mx-auto">
            Common questions from developers and system administrators about our VPS infrastructure.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="mb-4">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full text-left p-6 bg-base-100 hover:bg-base-100/80 rounded-xl transition-colors duration-200 border-2 border-transparent hover:border-accent/30"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-medium pr-4 leading-tight font-mono text-sm">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === i ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-primary text-2xl flex-shrink-0"
                    >
                      +
                    </motion.div>
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-base-content/80 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Technical specifications */}
        <div className="mt-16 bg-base-100 rounded-2xl p-8">
          <h3 className="text-xl font-medium mb-6 text-center">
            Infrastructure <span className="italic">Specifications</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3 text-primary">Hardware</h4>
              <ul className="space-y-2 text-base-content/80">
                <li>• Intel Xeon processors</li>
                <li>• DDR4 ECC RAM</li>
                <li>• NVMe SSD storage</li>
                <li>• 10Gb network interfaces</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary">Operating Systems</h4>
              <ul className="space-y-2 text-base-content/80">
                <li>• Ubuntu (18.04, 20.04, 22.04)</li>
                <li>• CentOS (7, 8, Stream)</li>
                <li>• Debian (10, 11)</li>
                <li>• Windows Server 2019/2022</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary">Management</h4>
              <ul className="space-y-2 text-base-content/80">
                <li>• API access</li>
                <li>• Web console</li>
                <li>• SSH key management</li>
                <li>• Custom ISO uploads</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}