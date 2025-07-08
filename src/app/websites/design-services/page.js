import PageHero from "@/components/PageHero";
import Link from "next/link";
import Image from "next/image";
import { CheckIcon, StarIcon } from "@heroicons/react/24/solid";

export default function WebsiteDesignServices() {
  const packages = [
    {
      name: "Starter",
      price: 1500,
      popular: false,
      features: [
        "Up to 6 Pages: Home, About, Services, Contact, plus 2 additional pages",
        "Enhanced Design and SEO: Advanced design features and local SEO enhancements",
        "SSL Certificate: Basic security for safe browsing",
      ],
      upgrades: [
        { name: "Add an additional page", price: 150, unit: "page" },
        { name: "Content Creation Assistance", price: 300 },
        { name: "Social Media Integration", price: 200 },
      ],
    },
    {
      name: "Growth",
      price: 3000,
      popular: true,
      badge: "Most Popular",
      features: [
        "Up to 8 Pages: More comprehensive content options",
        "E-commerce Setup: Basic online store functionalities",
        "Blog/News Section: For regular content updates",
        "Enhanced Design and SEO: Advanced design features and local SEO enhancements",
      ],
      upgrades: [
        { name: "Add an additional page", price: 150, unit: "page" },
        { name: "Content Creation Assistance", price: 300 },
        { name: "Social Media Integration", price: 200 },
        { name: "Custom Widgets", price: 500 },
        { name: "Advanced SEO Package", price: 500 },
      ],
    },
    {
      name: "Premium",
      price: 5000,
      popular: false,
      features: [
        "Up to 12 Pages: Additional pages for detailed information",
        "Full E-commerce Capabilities: Comprehensive online store management",
        "Custom Widgets: Such as appointment booking or live chat",
        "Social Media Integration: Enhance online presence through social media",
        "Advanced SEO: Covering keyword optimization and meta tags for better search ranking",
        "Regular Analytics Reports: Monthly website performance reviews",
      ],
      upgrades: [
        { name: "Add an additional page", price: 150, unit: "page" },
        { name: "Content Creation Assistance", price: 300 },
        { name: "Social Media Integration", price: 200 },
        { name: "Custom Widgets", price: 500 },
        { name: "Advanced SEO Package", price: 500 },
        { name: "Security Package", price: 500 },
        { name: "Custom API Integrations", price: 1000 },
      ],
    },
  ];

  const faqs = [
    {
      question: "What's included in the one-time fee?",
      answer:
        "The one-time fee covers the initial design, development, and setup of your website, including all features listed in your selected package.",
    },
    {
      question: "How do I sign up for a support plan?",
      answer:
        "After selecting your package, you'll have the option to choose a support plan that fits your needs. You can also add or change your support plan at any time.",
    },
    {
      question: "What if I need more than what's included in a package?",
      answer:
        "You can easily upgrade your package with add-ons or opt for custom services tailored to your needs.",
    },
    {
      question: "How does the payment process work?",
      answer:
        "You can pay for your package in full upfront. Support plans are billed monthly and can be canceled or adjusted at any time.",
    },
    {
      question: "Can I switch plans after my website is built?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time to better suit your business needs.",
    },
    {
      question: "What happens if I need help outside of my support plan?",
      answer:
        "If you require assistance beyond what's covered in your current support plan, you can easily request additional services on an as-needed basis. We offer flexible options for one-time tasks or can help you upgrade to a higher-tier support plan that better suits your ongoing needs.",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "$1500",
      description: "Perfect for small businesses and professional services",
      features: [
        "Up to 6 Pages: Home, About, Services, Contact, plus 2 additional pages",
        "Enhanced Design and SEO: Advanced design features and local SEO enhancements",
        "SSL Certificate: Basic security for safe browsing",
      ],
    },
    {
      name: "Growth",
      price: "$3000",
      description: "Ideal for growing businesses with e-commerce needs",
      features: [
        "Up to 8 Pages: More comprehensive content options",
        "E-commerce Setup: Basic online store functionalities",
        "Blog/News Section: For regular content updates",
        "Enhanced Design and SEO: Advanced design features and local SEO enhancements",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "$5000",
      description:
        "For established businesses requiring comprehensive online presence",
      features: [
        "Up to 12 Pages: Additional pages for detailed information",
        "Full E-commerce Capabilities: Comprehensive online store management",
        "Custom Widgets: Such as appointment booking or live chat",
        "Social Media Integration: Enhance online presence through social media",
        "Advanced SEO: Covering keyword optimization and meta tags for better search ranking",
        "Regular Analytics Reports: Monthly website performance reviews",
      ],
    },
  ];

  return (
    <>
      <PageHero
        title={
          <>
            What we do <span className="italic">best</span>.
          </>
        }
        subtitle="Web Design"
        description="Every business deserves a powerful online presence."
        button={{ label: "View Plans", target: "website-plans" }}
      />

      {/* Pricing Section */}
      <section id="website-plans" className="scroll-mt-40 relative py-section">
        <span className="bg-mask-right" />
        <div className="container relative mx-auto px-4 py-block">
          <div className="md:w-2/3 text-center mx-auto mb-section">
            <div className="text-sm uppercase font-bold tracking-widest text-primary mb-2">
              Plans
            </div>
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              Choose Your <span className="italic">Perfect</span> Plan
            </h2>
            <p className="text-subtle max-w-[80ch] mx-auto text-base-content/80">
              Let us bring your vision to life with our tailored web design
              plans.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`card bg-base-300 shadow-lg ${
                  plan.popular
                    ? "border-2 border-primary scale-105 hover:shadow-primary/30"
                    : "border-2 border-transparent hover:border-accent/30 hover:shadow-accent/30"
                }  transition duration-200 p-8 relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-medium mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">
                  {plan.price}
                  <span className="text-lg font-normal text-base-content/80">
                    /one-time
                  </span>
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
                  href="https://clients.relentnet.com/index.php?rp=/store/web-design"
                  className={`block text-center px-6 py-3 rounded-xl hover:scale-105 active:scale-95 font-semibold duration-200 transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-primary to-accent text-white "
                      : "bg-base-100 hover:bg-base-100/70"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="relative py-section">
        <div className="container mx-auto px-4 text-center">
          <div className="text-sm uppercase font-bold tracking-widest text-primary mb-2">
            Enterprise
          </div>
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            For extremely large or lengthy, 100% custom websites, contact us for
            a quote.
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 text-lg rounded-xl tracking-widest font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Contact
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative bg-base-200 py-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm uppercase font-bold tracking-widest text-primary mb-2">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="collapse collapse-plus bg-base-100 shadow-md"
              >
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg font-medium">
                  {faq.question}
                </div>
                <div className="collapse-content">
                  <p className="text-base-content/80 italic">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-section">
        <div className="container mx-auto px-4 text-center">
          <div className="text-sm uppercase font-bold tracking-widest text-primary mb-2">
            Curious
          </div>
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Still have questions? Contact us.
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 text-lg rounded-xl tracking-widest font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Contact
          </Link>
        </div>
      </section>
    </>
  );
}
