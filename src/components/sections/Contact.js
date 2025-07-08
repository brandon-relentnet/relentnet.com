import React from "react";
import Link from "next/link";
import { PlayIcon } from "@heroicons/react/24/solid";

const ContactSection = () => {
  return (
    <section className="relative bg-base-200 py-section">
      <span className="bg-mask-left" />
      <div className="container relative mx-auto py-block px-4">
        <div className="lg:w-1/2 text-center mx-auto">
          <div className="text-sm uppercase font-bold tracking-widest text-primary mb-2">
            Contact
          </div>
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Enough talk, let&apos;s grow <span className="italic">together</span>.
          </h2>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="group hover:scale-105 active:scale-95 transition-all duration-200 inline-block bg-gradient-to-r from-primary to-accent text-white px-6 py-3 text-lg rounded-xl tracking-widest font-semibold cursor-pointer"
            >
              Get in touch
              <PlayIcon className="size-3 -mt-0.5 ml-2 inline-block group-hover:rotate-[360deg] transition-transform duration-200 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
