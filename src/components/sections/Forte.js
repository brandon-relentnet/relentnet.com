"use client";

import React from "react";
import Image from "next/image";
import { PlayIcon } from "@heroicons/react/24/solid";

const ForteSection = () => {
  const handleScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="forte" className="relative bg-base-200 py-section">
      <span className="bg-mask-left"></span>
      <div className="container relative mx-auto px-4 py-block">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-x-12">
          <Image
            src="/images/software-33.png"
            className="object-contain"
            alt="Revolutionizing the web with relentless results."
            quality={100}
            width={500}
            height={500}
            sizes="(max-width: 768px) 350px, 500px"
          />
          <div className="lg:w-1/3 text-center lg:text-left mb-12 lg:mb-0">
            <div className="text-sm uppercase font-bold tracking-widest text-primary mb-2">
              Forte
            </div>
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              Revolutionizing the web with
              <span className="italic"> relentless</span> results.
            </h2>
            <p className="text-base-content/80 mb-6">
              In a rapidly evolving digital landscape, RelentNet combines
              innovation, creativity, and technical expertise to deliver web
              solutions that drive business growth. That's why we approach every
              project with relentless determination to deliver exceptional
              results. Our team of experts combines innovation, creativity, and
              technical prowess to provide you with web services that stand out
              in the online world. With RelentNet, you're not just getting web
              services; you're getting a partner committed to achieving
              relentless success for your online presence.
            </p>
            <button
              className="group hover:scale-105 active:scale-95 transition-all duration-200 inline-block bg-gradient-to-r from-primary to-accent text-white px-6 py-3 text-lg rounded-xl tracking-widest font-semibold cursor-pointer"
              onClick={() => handleScrollTo("team-info")}
            >
              Learn about us
              <PlayIcon className="size-3 ml-2 -mt-0.5 inline-block group-hover:rotate-[90deg] transition-transform duration-200 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForteSection;
