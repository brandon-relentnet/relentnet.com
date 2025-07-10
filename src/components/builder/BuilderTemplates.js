"use client";

import { motion } from "motion/react";
import Link from "next/link";
import SectionHeader from "@/components/sections/SectionHeader";

export default function BuilderTemplates({ templates }) {
  return (
    <SectionHeader
      title={
        <>
          Start with <span className="italic">Professional</span> Templates
        </>
      }
      subtitle="Template Library"
      desc="Choose from our growing collection of conversion-optimized templates designed for every industry."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {templates.map((template, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="card bg-base-300 shadow-md hover:shadow-accent/30 transition duration-250 overflow-hidden group cursor-pointer"
          >
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-base-200/20 group-hover:bg-base-200/40 transition duration-250"></div>
              <div className="text-base-content/60 relative z-10 text-center">
                <div className="text-2xl font-bold mb-2">{template.name}</div>
                <div className="text-sm">{template.category}</div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{template.name}</h3>
                <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                  {template.category}
                </span>
              </div>
              <p className="text-sm text-base-content/80 mb-4">
                {template.description}
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-primary/10 hover:bg-primary/20 text-primary px-3 py-2 rounded-lg text-sm font-medium transition">
                  Preview
                </button>
                <button className="flex-1 bg-accent/10 hover:bg-accent/20 text-accent px-3 py-2 rounded-lg text-sm font-medium transition">
                  Download
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-base-content/60 mb-6">
          <span className="font-semibold">New templates added monthly!</span> Get access to our entire library with any membership plan.
        </p>
        <Link
          href="/websites/templates"
          className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-3 text-lg rounded-xl font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
        >
          View All Templates
        </Link>
      </div>
    </SectionHeader>
  );
}