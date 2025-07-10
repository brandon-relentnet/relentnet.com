import PageHero from "@/components/PageHero";
import Link from "next/link";
import { ShieldCheckIcon, LockClosedIcon, EyeIcon, ExclamationTriangleIcon } from "@heroicons/react/24/solid";

export default function WebsiteSecurity() {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: "Malware Protection",
      description: "Advanced scanning and removal of malicious code and security threats."
    },
    {
      icon: LockClosedIcon,
      title: "SSL Certificates",
      description: "Secure data transmission with industry-standard SSL encryption."
    },
    {
      icon: EyeIcon,
      title: "24/7 Monitoring",
      description: "Continuous monitoring for suspicious activity and security breaches."
    },
    {
      icon: ExclamationTriangleIcon,
      title: "Vulnerability Scanning",
      description: "Regular scans to identify and patch security vulnerabilities."
    }
  ];

  return (
    <>
      <PageHero 
        title={<>Website <span className="italic">Security</span> Solutions</>}
        subtitle="Security Services"
        description="Comprehensive website security to protect your business from cyber threats, malware, and data breaches."
      />

      <section className="relative py-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Protect Your <span className="italic">Digital Assets</span>
            </h2>
            <p className="text-base-content/80 max-w-[80ch] mx-auto">
              Don&apos;t let security vulnerabilities put your business at risk. Our comprehensive security solutions keep your website safe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => {
              const IconComponent = feature.icon;
              return (
                <div key={i} className="card bg-base-300 shadow-md hover:shadow-accent/30 p-6">
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
            Secure Your Website <span className="italic">Today</span>
          </h2>
          <p className="text-base-content/80 max-w-[60ch] mx-auto mb-8">
            Don&apos;t wait for a security breach. Protect your website and customer data now.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 text-lg rounded-xl tracking-widest font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Get Security Audit
          </Link>
        </div>
      </section>
    </>
  );
}