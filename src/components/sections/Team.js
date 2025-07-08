import React from "react";
import Image from "next/image";
import { teamMembers } from "@/data/siteData";
import ScrollButton from "../ScrollButton";

const TeamSection = () => {
  return (
    <section id="team-info" className="relative scroll-m-20 py-section">
      <span className="bg-mask-right" />
      <div className="relative container mx-auto px-4 py-block">
        <div className="mx-auto mb-12 px-4 text-center lg:w-1/2">
          <div className="mb-2 text-sm font-bold tracking-widest text-primary uppercase">
            People
          </div>
          <h2 className="mb-6 text-4xl font-medium md:text-5xl">
            The <span className="italic">relentless</span> leadership.
          </h2>
          <p className="mb-4 max-w-[80ch] text-base-content/80">
            We are a team of dedicated professionals committed to delivering
            excellence in web development, design, and digital marketing. With a
            passion for innovation and a focus on results, we work
            collaboratively to bring your online vision to life.
          </p>
        </div>
        <div className="mb-8 grid grid-cols-1 place-content-center gap-12 lg:grid-cols-2 2xl:grid-cols-4">
          {teamMembers.map((member, i) => (
            <div key={member.name} className="grid-card gap-y-4 text-center">
              <Image
                src={member.image}
                className="mx-auto mb-6 rounded-xl"
                alt={member.name}
                quality={100}
                width={400}
                height={400}
                sizes="(max-width: 768px) 350px, 400px"
              />
              <div className="mx-auto w-3/4">
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p
                  className="mb-2 tracking-wide text-base-content/80 italic"
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
