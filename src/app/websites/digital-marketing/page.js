import PageHero from "@/components/PageHero";
import Link from "next/link";
import { MegaphoneIcon, ChartBarIcon, UserGroupIcon, CurrencyDollarIcon, EnvelopeIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/solid";

export default function DigitalMarketing() {
  const services = [
    {
      icon: MegaphoneIcon,
      title: "Social Media Marketing",
      description: "Engage your audience and build brand awareness across all major social platforms.",
      features: ["Content Creation", "Community Management", "Paid Advertising", "Analytics & Reporting"]
    },
    {
      icon: EnvelopeIcon,
      title: "Email Marketing",
      description: "Create targeted email campaigns that convert subscribers into loyal customers.",
      features: ["Campaign Design", "List Management", "Automation", "A/B Testing"]
    },
    {
      icon: CurrencyDollarIcon,
      title: "PPC Advertising",
      description: "Drive immediate traffic and conversions with strategic pay-per-click campaigns.",
      features: ["Google Ads", "Facebook Ads", "Retargeting", "Conversion Tracking"]
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Content Marketing",
      description: "Tell your brand story with compelling content that attracts and retains customers.",
      features: ["Blog Writing", "Video Production", "Infographics", "Content Strategy"]
    }
  ];

  return (
    <>
      <PageHero 
        title={<>Digital Marketing That <span className="italic">Drives</span> Growth</>}
        subtitle="Marketing Services"
        description="Amplify your online presence and reach your target audience with our comprehensive digital marketing solutions."
      />

      {/* Services Section */}
      <section className="relative py-section">
        <span className="bg-mask-right" />
        <div className="container relative mx-auto px-4 py-block">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Full-Service Digital <span className="italic">Marketing</span>
            </h2>
            <p className="text-base-content/80 max-w-[80ch] mx-auto">
              From social media to email campaigns, we provide all the digital marketing services you need to grow your business online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const IconComponent = service.icon;
              return (
                <div key={i} className="card bg-base-300 shadow-md hover:shadow-accent/30 card-border border-base-300 hover:border-accent/30 transition duration-250 p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <IconComponent className="size-10 text-primary flex-shrink-0" />
                    <div className="flex-grow">
                      <h3 className="text-2xl font-medium mb-3">{service.title}</h3>
                      <p className="text-base-content/80 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm">
                            <div className="size-1.5 bg-primary rounded-full" />
                            <span className="text-base-content/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative bg-base-200 py-section">
        <span className="bg-mask-left" />
        <div className="container relative mx-auto px-4 py-block">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Marketing That <span className="italic">Delivers</span> Results
              </h2>
              <p className="text-base-content/80 mb-8">
                We don&apos;t just create campaigns; we create connections. Our data-driven approach ensures every marketing dollar works harder for your business.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: UserGroupIcon, metric: "2.5M+", label: "Audience Reached" },
                  { icon: ChartBarIcon, metric: "325%", label: "Average ROI" },
                  { icon: CurrencyDollarIcon, metric: "$1.2M", label: "Revenue Generated" }
                ].map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-4 bg-base-100 p-4 rounded-lg">
                      <IconComponent className="size-8 text-primary" />
                      <div>
                        <div className="text-2xl font-bold">{item.metric}</div>
                        <div className="text-sm text-base-content/80">{item.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <ChartBarIcon className="size-24 text-primary/40 mx-auto mb-4" />
                  <p className="text-base-content/60">Campaign Analytics Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Ready to <span className="italic">Accelerate</span> Your Growth?
          </h2>
          <p className="text-base-content/80 max-w-[60ch] mx-auto mb-8">
            Let&apos;s create a digital marketing strategy that transforms your business.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 text-lg rounded-xl tracking-widest font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Get Started
            </Link>
            <Link
              href="/websites/seo-services"
              className="inline-block bg-base-300 text-base-content px-8 py-4 text-lg rounded-xl tracking-widest font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Learn About SEO
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}