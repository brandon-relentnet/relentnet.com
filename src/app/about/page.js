import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";
import { teamMembers, theDifferences } from "@/data/siteData";
import { RocketLaunchIcon, LightBulbIcon, HeartIcon } from "@heroicons/react/24/solid";

export default function AboutPage() {
  const values = [
    {
      icon: RocketLaunchIcon,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions for our clients."
    },
    {
      icon: LightBulbIcon,
      title: "Creativity",
      description: "Every project is approached with fresh perspectives and creative problem-solving."
    },
    {
      icon: HeartIcon,
      title: "Commitment",
      description: "We&apos;re dedicated to your success and build lasting partnerships with our clients."
    }
  ];

  return (
    <>
      <PageHero 
        title={<>About <span className="italic">RelentNet</span></>}
        subtitle="Our Story"
        description="Revolutionizing the web with relentless results. We're passionate about creating digital experiences that drive business growth."
      />

      {/* Mission Section */}
      <section className="relative py-section">
        <span className="bg-mask-right" />
        <div className="container relative mx-auto px-4 py-block">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Our <span className="italic">Mission</span>
              </h2>
              <p className="text-base-content/80 mb-6 text-lg">
                At RelentNet, we believe every business deserves a powerful online presence. Our mission is to provide comprehensive web solutions that not only look stunning but deliver measurable results.
              </p>
              <p className="text-base-content/80 mb-6">
                In a rapidly evolving digital landscape, we combine innovation, creativity, and technical expertise to deliver web solutions that drive business growth. We approach every project with relentless determination to deliver exceptional results.
              </p>
              <p className="text-base-content/80">
                Our team of experts combines innovation, creativity, and technical prowess to provide you with web services that stand out in the online world. With RelentNet, you&apos;re not just getting web services; you&apos;re getting a partner committed to achieving relentless success for your online presence.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/images/software-33.png"
                className="object-contain"
                alt="RelentNet mission - Revolutionizing the web"
                quality={100}
                width={500}
                height={500}
                sizes="(max-width: 768px) 350px, 500px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative bg-base-200 py-section">
        <span className="bg-mask-left" />
        <div className="container relative mx-auto px-4 py-block">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Our <span className="italic">Values</span>
            </h2>
            <p className="text-base-content/80 max-w-[80ch] mx-auto">
              These core principles guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const IconComponent = value.icon;
              return (
                <div key={i} className="text-center">
                  <div className="size-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="size-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-medium mb-4">{value.title}</h3>
                  <p className="text-base-content/80">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-section">
        <span className="bg-mask-right" />
        <div className="container relative mx-auto px-4 py-block">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Meet Our <span className="italic">Team</span>
            </h2>
            <p className="text-base-content/80 max-w-[80ch] mx-auto">
              We are a team of dedicated professionals committed to delivering excellence in web development, design, and digital marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 place-content-center">
            {teamMembers.map((member, i) => (
              <div key={member.name} className="text-center">
                <Image
                  src={member.image}
                  className="rounded-xl mx-auto mb-6"
                  alt={member.name}
                  quality={100}
                  width={300}
                  height={300}
                  sizes="(max-width: 768px) 250px, 300px"
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
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="relative bg-base-200 py-section">
        <span className="bg-mask-left" />
        <div className="container relative mx-auto px-4 py-block">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              What Makes Us <span className="italic">Different</span>
            </h2>
            <p className="text-base-content/80 max-w-[80ch] mx-auto">
              We don&apos;t just design websites and provide hosting – we cultivate lasting partnerships.
            </p>
          </div>

          <div className="grid gap-8">
            {theDifferences.map((difference, index) => {
              const IconComponent = difference.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start gap-6 bg-base-100 p-8 rounded-xl border-2 border-transparent hover:border-accent/30 transition duration-200 shadow-md hover:shadow-accent/30"
                >
                  <IconComponent className="size-12 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-medium mb-2">{difference.title}</h3>
                    <p
                      className="text-base-content/80 italic mb-3"
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Ready to Work <span className="italic">Together</span>?
          </h2>
          <p className="text-base-content/80 max-w-[60ch] mx-auto mb-8">
            Let&apos;s discuss how we can help transform your online presence and drive your business forward.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 text-lg rounded-xl tracking-widest font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}