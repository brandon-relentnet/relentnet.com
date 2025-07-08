"use client";

import React from "react";
import Image from "next/image";
import { teamMembers } from "@/data/siteData";
import { PlayIcon } from "@heroicons/react/24/solid";

const TeamSection = () => {
  const handleScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="team-info" className="relative py-section scroll-m-20">
      <span className="bg-mask-right" />
      <div className="container relative mx-auto px-4 py-block">
        <div className="text-center lg:w-1/2 mx-auto px-4 mb-12">
          <div className="text-sm uppercase font-bold tracking-widest text-primary mb-2">
            People
          </div>
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            The <span className="italic">relentless</span> individuals.
          </h2>
          <p className="text-base-content/80 max-w-[80ch] mb-4">
            We are a team of dedicated professionals committed to delivering
            excellence in web development, design, and digital marketing. With a
            passion for innovation and a focus on results, we work
            collaboratively to bring your online vision to life.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 place-content-center mb-8">
          {teamMembers.map((member, i) => (
            <div key={member.name} className="text-center grid-card gap-y-4">
              <Image
                src={member.image}
                className="rounded-xl mx-auto mb-6"
                alt={member.name}
                quality={100}
                width={400}
                height={400}
                sizes="(max-width: 768px) 350px, 400px"
              />
              <div className="w-3/4 mx-auto">
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p
                  className="italic text-base-content/80 tracking-wide mb-2"
                  style={{ fontFamily: "'AdamBold', sans-serif" }}
                >
                  {member.role}
                </p>
                <p className="text-base-content/80">{member.blurb}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            className="group hover:scale-105 active:scale-95 transition-all duration-200 inline-block bg-gradient-to-r from-primary to-accent text-white px-6 py-3 text-lg rounded-xl tracking-widest font-semibold cursor-pointer"
            onClick={() => handleScrollTo("the-difference")}
          >
            <span className="italic">More</span> about us
            <PlayIcon className="size-3 ml-2 -mt-0.5 inline-block group-hover:rotate-[90deg] transition-transform duration-200 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
