import PageHero from "@/components/PageHero";
import Link from "next/link";
import { PencilIcon, PaintBrushIcon, DevicePhoneMobileIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";

export default function WebsiteDesignServices() {
  const services = [
    {
      icon: PencilIcon,
      title: "Custom Design",
      description: "Unique, tailored designs that reflect your brand identity and resonate with your target audience."
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Responsive Development",
      description: "Mobile-first websites that look stunning and function flawlessly on all devices and screen sizes."
    },
    {
      icon: PaintBrushIcon,
      title: "UI/UX Excellence",
      description: "Intuitive user interfaces and seamless experiences that keep visitors engaged and convert them into customers."
    },
    {
      icon: RocketLaunchIcon,
      title: "Performance Optimized",
      description: "Lightning-fast loading times and optimized code for superior search engine rankings and user satisfaction."
    }
  ];

  const process = [
    { step: "01", title: "Discovery", description: "We learn about your business, goals, and target audience to create a strategic design plan." },
    { step: "02", title: "Design", description: "Our creative team crafts stunning mockups and prototypes for your review and feedback." },
    { step: "03", title: "Development", description: "We bring your design to life with clean, efficient code and cutting-edge technologies." },
    { step: "04", title: "Launch", description: "Your website goes live with our full support, ensuring a smooth and successful deployment." }
  ];

  return (
    <>
      <PageHero 
        title={<>Professional Website <span className="italic">Design</span> Services</>}
        subtitle="Build & Design"
        description="Transform your online presence with stunning, custom websites that captivate visitors and drive business growth."
      />

      {/* Services Section */}
      <section className="relative py-section">
        <span className="bg-mask-right" />
        <div className="container relative mx-auto px-4 py-block">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Design That <span className="italic">Delivers</span> Results
            </h2>
            <p className="text-base-content/80 max-w-[80ch] mx-auto">
              Our expert designers and developers work together to create websites that not only look amazing but also perform exceptionally, ensuring your business stands out in the digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, i) => {
              const IconComponent = service.icon;
              return (
                <div key={i} className="card bg-base-300 shadow-md hover:shadow-accent/30 card-border border-base-300 hover:border-accent/30 transition duration-250 p-6">
                  <IconComponent className="size-12 text-primary mb-4" />
                  <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                  <p className="text-base-content/80">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative bg-base-200 py-section">
        <span className="bg-mask-left" />
        <div className="container relative mx-auto px-4 py-block">
          <div className="text-center mb-12">
            <div className="text-sm uppercase font-bold tracking-widest text-primary mb-2">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              From Concept to <span className="italic">Creation</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">{item.step}</div>
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-base-content/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Ready to <span className="italic">Transform</span> Your Website?
          </h2>
          <p className="text-base-content/80 max-w-[60ch] mx-auto mb-8">
            Let&apos;s discuss your project and create a website that exceeds your expectations.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 text-lg rounded-xl tracking-widest font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}