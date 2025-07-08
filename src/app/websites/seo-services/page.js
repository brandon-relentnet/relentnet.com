import PageHero from "@/components/PageHero";
import Link from "next/link";
import { ChartBarIcon, MagnifyingGlassIcon, ArrowTrendingUpIcon, DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function SEOServices() {
  const services = [
    {
      icon: DocumentMagnifyingGlassIcon,
      title: "SEO Audit",
      description: "Comprehensive analysis of your website to identify optimization opportunities and technical issues."
    },
    {
      icon: MagnifyingGlassIcon,
      title: "Keyword Research",
      description: "In-depth research to find the most valuable keywords for your business and target audience."
    },
    {
      icon: ArrowTrendingUpIcon,
      title: "On-Page Optimization",
      description: "Optimize your content, meta tags, and site structure for maximum search engine visibility."
    },
    {
      icon: ChartBarIcon,
      title: "Performance Tracking",
      description: "Monitor your rankings, traffic, and conversions with detailed analytics and reporting."
    }
  ];

  const stats = [
    { value: "150%", label: "Average Traffic Increase" },
    { value: "87%", label: "Client Retention Rate" },
    { value: "3.5x", label: "Average ROI" },
    { value: "500+", label: "Keywords Ranked" }
  ];

  return (
    <>
      <PageHero 
        title={<>SEO Services That <span className="italic">Deliver</span> Results</>}
        subtitle="Search Engine Optimization"
        description="Boost your online visibility and drive organic traffic with our proven SEO strategies and expert optimization services."
      />

      {/* Services Section */}
      <section className="relative py-section">
        <span className="bg-mask-right" />
        <div className="container relative mx-auto px-4 py-block">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Comprehensive SEO <span className="italic">Solutions</span>
            </h2>
            <p className="text-base-content/80 max-w-[80ch] mx-auto">
              Our data-driven approach to SEO combines technical expertise with creative content strategies to help your website rank higher and attract more qualified traffic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const IconComponent = service.icon;
              return (
                <div key={i} className="card bg-base-300 shadow-md hover:shadow-accent/30 card-border border-base-300 hover:border-accent/30 transition duration-250 p-6 text-center">
                  <IconComponent className="size-12 text-primary mb-4 mx-auto" />
                  <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                  <p className="text-base-content/80">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-primary radial-gradient py-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-white">
              Proven <span className="italic">Results</span> That Speak
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-primary-content/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative bg-base-200 py-section">
        <span className="bg-mask-left" />
        <div className="container relative mx-auto px-4 py-block">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Our SEO <span className="italic">Process</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { title: "Discovery & Audit", description: "We analyze your current SEO performance and identify opportunities for improvement." },
                { title: "Strategy Development", description: "Create a customized SEO strategy tailored to your business goals and target audience." },
                { title: "Implementation", description: "Execute on-page and off-page optimization techniques to improve your search rankings." },
                { title: "Monitoring & Optimization", description: "Continuously track performance and refine strategies for sustained growth." }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="size-12 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                    <p className="text-base-content/80">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Ready to <span className="italic">Dominate</span> Search Results?
          </h2>
          <p className="text-base-content/80 max-w-[60ch] mx-auto mb-8">
            Let&apos;s create an SEO strategy that drives real business results.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 text-lg rounded-xl tracking-widest font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Get Free SEO Audit
          </Link>
        </div>
      </section>
    </>
  );
}