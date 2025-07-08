import PageHero from "@/components/PageHero";
import Link from "next/link";
import { CubeIcon, ServerIcon, ShieldCheckIcon, WrenchIcon } from "@heroicons/react/24/solid";

export default function VPSHosting() {
  const features = [
    {
      icon: ServerIcon,
      title: "Dedicated Resources",
      description: "Get guaranteed CPU, RAM, and storage exclusively for your applications."
    },
    {
      icon: ShieldCheckIcon,
      title: "Full Root Access",
      description: "Complete control over your server environment with root/administrator access."
    },
    {
      icon: CubeIcon,
      title: "Scalable Solutions",
      description: "Easily upgrade your resources as your business grows and demands increase."
    },
    {
      icon: WrenchIcon,
      title: "Managed Options",
      description: "Choose from self-managed or fully managed VPS solutions based on your needs."
    }
  ];

  return (
    <>
      <PageHero 
        title={<>Virtual Private Server <span className="italic">Hosting</span></>}
        subtitle="VPS Hosting"
        description="Powerful VPS hosting with dedicated resources, full control, and scalable performance for demanding applications."
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
            Need More <span className="italic">Power</span>?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 text-lg rounded-xl tracking-widest font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Configure Your VPS
          </Link>
        </div>
      </section>
    </>
  );
}