"use client";

import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { servicesProvided } from "@/data/siteData";
import { PlayIcon } from "@heroicons/react/24/solid";

const ServicesSection = () => {
  const handleScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="relative py-section scroll-m-20">
      <span className="bg-mask-right" />
      <div className="container relative mx-auto px-4 py-block">
        <div className="md:w-2/3 text-center mx-auto mb-12">
          <div className="text-sm uppercase font-bold tracking-widest text-primary mb-2">
            Services
          </div>
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Your success, our <span className="italic">commitment</span>.
          </h2>
          <p className="text-subtle max-w-[80ch] mx-auto text-base-content/80">
            We bring ideas to life with stunning websites, powerful apps, and
            strategic online growth. Whether you need a new digital home,
            marketing that converts, or reliable hosting and support, we're here
            to make it happen.
          </p>
        </div>
        <div className="my-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesProvided.map((service, i) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={service.name}
                href={service.link}
                className="group relative"
              >
                <div className="card bg-base-300 shadow-md hover:shadow-accent/30 card-border border-base-300 hover:border-accent/30 transition duration-250 p-8 flex items-center justify-center h-full gap-x-4">
                  <div className="flex items-center gap-x-4 w-full mb-2">
                    <IconComponent className="size-8 text-primary flex-shrink-0" />
                    <h3 className="text-2xl font-medium flex-grow">
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-base-content/80 max-w-[40ch]">
                    {service.description}
                  </p>
                </div>
                <ArrowTopRightOnSquareIcon className="size-5 text-secondary opacity-0 group-hover:opacity-70 transition duration-200 absolute top-2 right-2" />
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center">
          <button
            className="group hover:scale-105 active:scale-95 transition-all duration-200 inline-block bg-gradient-to-r from-primary to-accent text-white px-6 py-3 text-lg rounded-xl tracking-widest font-semibold cursor-pointer"
            onClick={() => handleScrollTo("forte")}
          >
            Why
            <PlayIcon className="size-3 ml-2 -mt-0.5 inline-block group-hover:rotate-[90deg] transition-transform duration-200 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
