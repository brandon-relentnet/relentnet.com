import React from "react";
import Image from "next/image";
import { teamMembers } from "@/data/siteData";
import ScrollButton from "../ScrollButton";

const TeamSection = () => {
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
          <ScrollButton targetId="the-difference">
            <span className="italic">More</span> about us
          </ScrollButton>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
