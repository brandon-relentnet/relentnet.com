"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import ScrollButton from "@/components/ScrollButton";

export default function PageHero({
  title,
  subtitle,
  description,
  button = null,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Create parallax effect - image moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section className="relative overflow-hidden" ref={ref}>
      <motion.div
        className="absolute inset-0"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        style={{ y }}
      >
        <Image
          src="/images/software-15.png"
          alt="Hero Background"
          className="h-full w-full object-cover opacity-80"
          width={1920}
          height={1080}
          quality={80}
          priority
        />
      </motion.div>
      <Image
        src="/images/hero_bg.webp"
        alt="Hero Background"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        width={1920}
        height={1080}
        quality={80}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent mix-blend-multiply"></div>
      <div className="relative flex min-h-[calc(50vh-5rem)] scroll-m-20 items-center justify-center !bg-neutral/50 py-section">
        <div className="container mx-auto px-4 text-center">
          <div className="relative mx-auto max-w-6xl p-20">
            {/* Background Blur */}
            <div className="absolute inset-0 z-1 rounded-xl bg-neutral/40 blur-3xl backdrop-blur"></div>

            {/* Hero Content */}
            <div className="relative z-10">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
