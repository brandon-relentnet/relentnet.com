"use client";

import { motion } from "motion/react";
import { 
  CursorArrowRaysIcon,
  CubeTransparentIcon,
  SparklesIcon,
  WrenchIcon,
  DocumentDuplicateIcon,
  AcademicCapIcon
} from "@heroicons/react/24/solid";
import SectionHeader from "@/components/sections/SectionHeader";

const iconMap = {
  CursorArrowRaysIcon,
  CubeTransparentIcon,
  SparklesIcon,
  WrenchIcon,
  DocumentDuplicateIcon,
  AcademicCapIcon
};

export default function BuilderFeatures({ features }) {
  return (
    <SectionHeader
      title={
        <>
          Everything You Need to Build <span className="italic">Amazing</span> Websites
        </>
      }
      subtitle="DIY Website Builder"
      desc="Get access to professional tools, templates, and training to build stunning websites yourself using Divi and Elementor."
    >
      <div className="grid gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => {
          const IconComponent = iconMap[feature.icon];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="card border-2 border-base-300 bg-base-300 p-6 shadow-md transition duration-250 hover:border-accent/30 hover:shadow-accent/30"
            >
              <div className="justify-left mb-4 flex items-center gap-x-4">
                <IconComponent className="size-10 text-primary" />
                <h3 className="text-xl font-medium">{feature.title}</h3>
              </div>
              <p className="text-base-content/80">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionHeader>
  );
}