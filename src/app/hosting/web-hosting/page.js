import PageHero from "@/components/PageHero";
import Link from "next/link";
import { CloudIcon, ShieldCheckIcon, RocketLaunchIcon, CogIcon } from "@heroicons/react/24/solid";

export default function WebHosting() {
  const features = [
    {
      icon: RocketLaunchIcon,
      title: "High-Speed Performance",
      description: "SSD storage and optimized servers ensure lightning-fast website loading speeds."
    },
    {
      icon: ShieldCheckIcon,
      title: "Advanced Security",
      description: "DDoS protection, SSL certificates, and regular security updates keep your site safe."
    },
    {
      icon: CloudIcon,
      title: "99.9% Uptime",
      description: "Reliable hosting infrastructure with guaranteed uptime and 24/7 monitoring."
    },
    {
      icon: CogIcon,
      title: "Easy Management",
      description: "User-friendly control panel with one-click installs and automated backups."
    }
  ];

  return (
    <>
      <PageHero 
        title={<>Reliable <span className="italic">Web Hosting</span></>}
        subtitle="Web Hosting"
        description="Fast, secure, and reliable web hosting solutions for websites of all sizes. Get your site online with confidence."
      />

      <section className="relative py-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => {
              const IconComponent = feature.icon;
              return (
                <div key={i} className="card bg-base-300 p-6">
                  <IconComponent className="size-10 text-primary mb-4" />
                  <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                  <p className="text-base-content/80">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-base-200 py-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Ready to Get <span className="italic">Started</span>?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 text-lg rounded-xl tracking-widest font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Choose Your Plan
          </Link>
        </div>
      </section>
    </>
  );
}