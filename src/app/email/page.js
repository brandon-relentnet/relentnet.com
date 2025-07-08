import PageHero from "@/components/PageHero";
import Link from "next/link";
import { EnvelopeIcon, ShieldCheckIcon, CloudIcon, DevicePhoneMobileIcon, UsersIcon, ChartBarIcon } from "@heroicons/react/24/solid";

export default function EmailServices() {
  const features = [
    {
      icon: EnvelopeIcon,
      title: "Professional Email",
      description: "Get custom email addresses with your domain name for a professional appearance."
    },
    {
      icon: ShieldCheckIcon,
      title: "Advanced Security",
      description: "Built-in spam filtering, virus protection, and encryption keep your emails safe."
    },
    {
      icon: CloudIcon,
      title: "Cloud Access",
      description: "Access your email from anywhere with webmail, mobile apps, and desktop clients."
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Mobile Sync",
      description: "Seamlessly sync your email, contacts, and calendar across all devices."
    },
    {
      icon: UsersIcon,
      title: "Team Collaboration",
      description: "Shared calendars, contacts, and collaboration tools for your team."
    },
    {
      icon: ChartBarIcon,
      title: "Email Analytics",
      description: "Track email performance and engagement with detailed analytics."
    }
  ];

  const plans = [
    {
      name: "Basic",
      price: "$5",
      storage: "10 GB",
      features: ["Custom domain email", "Webmail access", "Basic security", "Mobile sync"],
      accounts: "1 Account"
    },
    {
      name: "Business",
      price: "$12",
      storage: "50 GB",
      features: ["Everything in Basic", "Advanced security", "Calendar & contacts", "Priority support"],
      accounts: "Up to 10 Accounts",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$25",
      storage: "Unlimited",
      features: ["Everything in Business", "Advanced collaboration", "Email archiving", "Dedicated support"],
      accounts: "Unlimited Accounts"
    }
  ];

  return (
    <>
      <PageHero 
        title={<>Professional <span className="italic">Email</span> Solutions</>}
        subtitle="Email Services"
        description="Enhance your business communication with secure, reliable email hosting and collaboration tools."
      />

      {/* Features Section */}
      <section className="relative py-section">
        <span className="bg-mask-right" />
        <div className="container relative mx-auto px-4 py-block">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Everything You Need for <span className="italic">Business</span> Email
            </h2>
            <p className="text-base-content/80 max-w-[80ch] mx-auto">
              Professional email hosting with enterprise-grade security, reliability, and collaboration features to keep your business connected.
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

      {/* Why Choose Us */}
      <section className="relative bg-base-200 py-section">
        <span className="bg-mask-left" />
        <div className="container relative mx-auto px-4 py-block">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Why Choose RelentNet <span className="italic">Email</span>?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="size-12 bg-primary/20 text-primary rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    99.9%
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Uptime Guarantee</h3>
                    <p className="text-base-content/80">Reliable email service with industry-leading uptime and redundancy.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-12 bg-primary/20 text-primary rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    24/7
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Expert Support</h3>
                    <p className="text-base-content/80">Round-the-clock technical support from our email specialists.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-12 bg-primary/20 text-primary rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    SSL
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Secure by Default</h3>
                    <p className="text-base-content/80">End-to-end encryption and advanced security protocols protect your data.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <EnvelopeIcon className="size-24 text-primary/40 mx-auto mb-4" />
                  <p className="text-base-content/60">Secure Email Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-section">
        <span className="bg-mask-right" />
        <div className="container relative mx-auto px-4 py-block">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Simple, <span className="italic">Transparent</span> Pricing
            </h2>
            <p className="text-base-content/80 max-w-[80ch] mx-auto">
              Choose the perfect email plan for your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div 
                key={i} 
                className={`card bg-base-300 shadow-lg ${
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
                <div className="text-primary font-medium mb-2">{plan.storage} Storage</div>
                <div className="text-sm text-base-content/80 mb-6">{plan.accounts}</div>
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
                      : 'bg-base-200 hover:bg-base-200/70'
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
      <section className="relative bg-base-200 py-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Ready to Upgrade Your <span className="italic">Email</span>?
          </h2>
          <p className="text-base-content/80 max-w-[60ch] mx-auto mb-8">
            Join thousands of businesses using RelentNet for their email needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 text-lg rounded-xl tracking-widest font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </>
  );
}