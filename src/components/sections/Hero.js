"use client";

import { motion } from "motion/react";
import ScrollButton from "@/components/ScrollButton";
import ParallaxBackground from "@/components/ParallaxBackground";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-primary">
      <ParallaxBackground
        src="/images/software-35.webp"
        className="absolute inset-0 z-1"
        opacity=""
      />

      <div className="radial-gradient relative z-10 hero min-h-[calc(100vh-5rem)] !bg-transparent">
        <div className="hero-content text-center">
          <div className="relative max-w-md">
            <motion.h1
              className="empower-text relative inline-block overflow-hidden rounded-xl p-2 text-5xl font-medium text-primary italic md:text-6xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              Empower
            </motion.h1>
            <motion.h1
              className="mb-6 text-center text-3xl font-medium md:text-4xl lg:text-5xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              your online vision.
            </motion.h1>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <ScrollButton targetId="services">Explore</ScrollButton>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
