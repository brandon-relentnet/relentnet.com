"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function WebHostingFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative bg-base-200 py-section">
      <span className="bg-mask-left" />
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Business Owner <span className="italic">Questions</span>
          </h2>
          <p className="text-base-content/80 max-w-[60ch] mx-auto">
            Common questions from business owners about our managed hosting service.
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
                    <h3 className="text-lg font-medium pr-4 leading-tight">{faq.question}</h3>
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

        {/* Business guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-6 py-4 rounded-full">
            <span className="text-2xl">🤝</span>
            <span className="font-semibold">
              30-day money-back guarantee. No questions asked.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}