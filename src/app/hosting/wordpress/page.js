import PageHero from "@/components/PageHero";
import Link from "next/link";
import { ServerIcon, RocketLaunchIcon, ShieldCheckIcon, ClockIcon, WrenchIcon, ChartBarIcon } from "@heroicons/react/24/solid";

export default function WordPressHosting() {
  const features = [
    {
      icon: RocketLaunchIcon,
      title: "Lightning Fast",
      description: "Optimized servers and caching ensure your WordPress site loads in under 2 seconds."
    },
    {
      icon: ShieldCheckIcon,
      title: "WordPress Security",
      description: "Advanced security measures including malware scanning, firewall, and automated updates."
    },
    {
      icon: WrenchIcon,
      title: "Easy Management",
      description: "One-click WordPress installation and automatic updates keep your site running smoothly."
    },
    {
      icon: ClockIcon,
      title: "Daily Backups",
      description: "Automated daily backups ensure your content is always safe and recoverable."
    },
    {
      icon: ChartBarIcon,
      title: "Performance Monitoring",
      description: "Real-time monitoring and optimization to keep your site performing at its best."
    },
    {
      icon: ServerIcon,
      title: "99.9% Uptime",
      description: "Reliable hosting infrastructure with guaranteed uptime and redundant systems."
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "$8",
      description: "Perfect for personal blogs and small websites",
      features: [
        "1 WordPress Site",
        "10 GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "Daily Backups",
        "WordPress Security"
      ]
    },
    {
      name: "Professional",
      price: "$15",
      description: "Ideal for business websites and growing blogs",
      features: [
        "5 WordPress Sites",
        "50 GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "Daily Backups",
        "WordPress Security",
        "Performance Optimization",
        "Priority Support"
      ],
      popular: true
    },
    {
      name: "Business",
      price: "$25",
      description: "For high-traffic sites and online businesses",
      features: [
        "Unlimited WordPress Sites",
        "100 GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "Daily Backups",
        "WordPress Security",
        "Performance Optimization",
        "Priority Support",
        "Staging Environment",
        "Developer Tools"
      ]
    }
  ];

  return (
    <>
      <PageHero 
        title={<>WordPress <span className="italic">Hosting</span> Optimized</>}
        subtitle="WordPress Hosting"
        description="Lightning-fast, secure WordPress hosting with expert support. Built specifically for WordPress performance and security."
      />

      {/* Features Section */}
      <section className="relative py-section">
        <span className="bg-mask-right" />
        <div className="container relative mx-auto px-4 py-block">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              WordPress Hosting <span className="italic">Done Right</span>
            </h2>
            <p className="text-base-content/80 max-w-[80ch] mx-auto">
              Our WordPress hosting platform is specifically designed and optimized for WordPress websites, providing superior performance, security, and ease of use.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const IconComponent = feature.icon;
              return (
                <div key={i} className="card bg-base-300 shadow-md hover:shadow-accent/30 card-border border-base-300 hover:border-accent/30 transition duration-250 p-6">
                  <IconComponent className="size-10 text-primary mb-4" />
                  <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                  <p className="text-base-content/80">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="relative bg-primary radial-gradient py-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-white">
              Performance That <span className="italic">Matters</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">&lt;2s</div>
              <div className="text-primary-content/80">Average Load Time</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.9%</div>
              <div className="text-primary-content/80">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-primary-content/80">Expert Support</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-primary-content/80">SSD Storage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative bg-base-200 py-section">
        <span className="bg-mask-left" />
        <div className="container relative mx-auto px-4 py-block">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Choose Your <span className="italic">Perfect</span> Plan
            </h2>
            <p className="text-base-content/80 max-w-[80ch] mx-auto">
              All plans include everything you need to run a successful WordPress website.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div 
                key={i} 
                className={`card bg-base-100 shadow-lg ${
                  plan.popular ? 'border-2 border-primary scale-105' : 'border-2 border-transparent'
                } hover:shadow-accent/30 transition duration-250 p-8 relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-medium mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">
                  {plan.price}
                  <span className="text-lg font-normal text-base-content/80">/month</span>
                </div>
                <p className="text-base-content/80 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <div className="size-5 bg-primary/20 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-base-content/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center px-6 py-3 rounded-xl font-semibold transition-all ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary to-accent text-white hover:scale-105' 
                      : 'bg-base-300 hover:bg-base-300/70'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Ready to <span className="italic">Launch</span> Your WordPress Site?
          </h2>
          <p className="text-base-content/80 max-w-[60ch] mx-auto mb-8">
            Join thousands of WordPress users who trust RelentNet for their hosting needs.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 text-lg rounded-xl tracking-widest font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Start Free Trial
            </Link>
            <Link
              href="/hosting/web-hosting"
              className="inline-block bg-base-300 text-base-content px-8 py-4 text-lg rounded-xl tracking-widest font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Compare Hosting
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}