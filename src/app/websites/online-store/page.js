import PageHero from "@/components/PageHero";
import Link from "next/link";
import { ShoppingCartIcon, CreditCardIcon, TruckIcon, ChartBarIcon, DevicePhoneMobileIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

export default function OnlineStore() {
  const features = [
    {
      icon: ShoppingCartIcon,
      title: "Shopping Cart",
      description: "Advanced cart functionality with saved items, wishlists, and quick checkout options."
    },
    {
      icon: CreditCardIcon,
      title: "Secure Payments",
      description: "Accept all major payment methods with PCI-compliant secure payment processing."
    },
    {
      icon: TruckIcon,
      title: "Shipping Integration",
      description: "Real-time shipping rates and tracking with major carriers integration."
    },
    {
      icon: ChartBarIcon,
      title: "Analytics Dashboard",
      description: "Track sales, inventory, and customer behavior with comprehensive analytics."
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Mobile Optimized",
      description: "Responsive design ensures seamless shopping experience on all devices."
    },
    {
      icon: ShieldCheckIcon,
      title: "Security First",
      description: "SSL certificates, fraud protection, and regular security updates included."
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small businesses just getting started",
      features: ["Up to 100 products", "Basic themes", "Standard support", "2% transaction fee"]
    },
    {
      name: "Professional",
      price: "$79",
      description: "Everything you need to grow your online business",
      features: ["Unlimited products", "Premium themes", "Priority support", "1% transaction fee"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for high-volume businesses",
      features: ["Custom features", "Dedicated support", "Custom integrations", "No transaction fees"]
    }
  ];

  return (
    <>
      <PageHero 
        title={<>Launch Your <span className="italic">Online Store</span> Today</>}
        subtitle="E-commerce Solutions"
        description="Build a powerful online store with all the features you need to sell products and grow your business."
      />

      {/* Features Section */}
      <section className="relative py-section">
        <span className="bg-mask-right" />
        <div className="container relative mx-auto px-4 py-block">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Everything You Need to <span className="italic">Sell Online</span>
            </h2>
            <p className="text-base-content/80 max-w-[80ch] mx-auto">
              Our e-commerce platform comes packed with powerful features to help you manage products, process orders, and grow your online business.
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

      {/* Pricing Section */}
      <section className="relative bg-base-200 py-section">
        <span className="bg-mask-left" />
        <div className="container relative mx-auto px-4 py-block">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Choose Your <span className="italic">Perfect</span> Plan
            </h2>
            <p className="text-base-content/80 max-w-[80ch] mx-auto">
              Flexible pricing options to match your business needs and budget.
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
                  {plan.price !== "Custom" && <span className="text-lg font-normal text-base-content/80">/month</span>}
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
            Ready to Start <span className="italic">Selling</span>?
          </h2>
          <p className="text-base-content/80 max-w-[60ch] mx-auto mb-8">
            Join thousands of successful businesses already using our e-commerce platform.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 text-lg rounded-xl tracking-widest font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Start Free Trial
            </Link>
            <Link
              href="#"
              className="inline-block bg-base-300 text-base-content px-8 py-4 text-lg rounded-xl tracking-widest font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
            >
              View Demo Store
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}