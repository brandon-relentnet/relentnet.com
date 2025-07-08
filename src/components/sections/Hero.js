"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import ScrollButton from "@/components/ScrollButton";
import Image from "next/image";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Create parallax effect - image moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={ref} className="relative overflow-hidden bg-primary">
      <motion.div
        className="absolute inset-0 z-1"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        style={{ y }}
      >
        <Image
          src="/images/software-35.webp"
          alt="Hero Background"
          className="object-cover w-full h-full"
          width={1920}
          height={1080}
          quality={80}
          priority
        />
      </motion.div>

      <div className="hero !bg-transparent relative z-10 radial-gradient min-h-[calc(100vh-5rem)]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <motion.h1
              className="empower-text text-5xl md:text-6xl font-medium relative italic inline-block overflow-hidden rounded-xl text-primary p-2"
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
              className="text-3xl md:text-4xl lg:text-5xl text-center font-medium mb-6"
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
