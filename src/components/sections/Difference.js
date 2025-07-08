import React from "react";
import Link from "next/link";
import { theDifferences } from "@/data/siteData";
import { PlayIcon } from "@heroicons/react/24/solid";

const DifferenceSection = () => {
  return (
    <section
      id="the-difference"
      className="relative bg-base-200 py-section scroll-m-40"
    >
      <span className="bg-mask-left" />
      <div className="container relative mx-auto py-block px-4 lg:px-14 xl:px-24 2xl:px-34 flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-x-12">
        <div className="grid grid-cols-1 gap-8 w-full">
          {theDifferences.map((difference, index) => {
            const IconComponent = difference.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-x-4 bg-base-300 p-6 rounded-xl border-2 border-transparent hover:border-accent/30 active:border-accent transition duration-200 shadow-md hover:shadow-accent/30 hover:shadow-lg"
              >
                <IconComponent className="size-8 text-primary" />
                <div>
                  <h3 className="text-2xl font-medium">{difference.title}</h3>
                  <p
                    className="text-base-content/80 italic mb-1.5"
                    style={{ fontFamily: "'AdamBold', sans-serif" }}
                  >
                    {difference.subtitle}
                  </p>
                  <p className="text-base-content/80">
                    {difference.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="lg:w-1/2 inline-block text-center lg:text-left mb-12 lg:mb-0">
          <div className="text-sm uppercase font-bold tracking-widest text-primary mb-2">
            Difference
          </div>
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            A website agency that <span className="italic">stays</span> with
            you.
          </h2>
          <p className="text-base-content/80 max-w-[80ch] mb-4">
            At RelentNet, we don&apos;t just design websites and provide hosting – we
            cultivate lasting partnerships. In a digital landscape cluttered
            with faceless corporations, we stand out as a beacon of
            customer-centric commitment.
          </p>
          <p className="text-base-content/80 max-w-[80ch] mb-6">
            Unlike the giants who hand you a product and disappear, at
            RelentNet, we build lasting partnerships. Our commitment extends
            beyond creating websites; we provide ongoing support to help your
            digital presence grow and thrive. Our journey with you extends far
            beyond the transaction; it&apos;s a perpetual collaboration focused on
            your success.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link
              href="/about"
              className="group hover:scale-105 active:scale-95 transition-all duration-200 inline-block bg-gradient-to-r from-primary to-accent text-white px-6 py-3 text-lg rounded-xl tracking-widest font-semibold cursor-pointer"
            >
              The <span className="italic">most</span> about us
              <PlayIcon className="size-3 -mt-0.5 ml-2 inline-block group-hover:rotate-[360deg] transition-transform duration-200 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
