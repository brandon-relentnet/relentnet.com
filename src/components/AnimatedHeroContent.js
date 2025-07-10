"use client";

import { motion } from "motion/react";
import ScrollButton from "@/components/ScrollButton";

export default function AnimatedHeroContent({
  title,
  subtitle,
  description,
  button,
}) {
  return (
    <>
      {/* Optional SubTitle */}
      {subtitle && (
        <motion.span
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="relative z-10 mb-2 block text-sm font-bold tracking-widest text-base-content uppercase"
        >
          {subtitle}
        </motion.span>
      )}

      {/* Required Title */}
      <motion.h1
        className="empower-text relative inline-block overflow-hidden rounded-xl p-2 text-5xl font-medium text-primary md:text-6xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {title}
      </motion.h1>

      {/* Optional Description */}
      {description && (
        <motion.h2
          className="mb-6 text-center text-2xl font-medium md:text-3xl lg:text-4xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {description}
        </motion.h2>
      )}

      {/* Optional Button */}
      {button && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <ScrollButton targetId={button.target}>
            {button.label}
          </ScrollButton>
        </motion.div>
      )}
    </>
  );
}