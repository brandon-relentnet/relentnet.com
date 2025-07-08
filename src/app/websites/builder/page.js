import PageHero from "@/components/PageHero";
import Link from "next/link";
import { WrenchIcon, CubeTransparentIcon, SparklesIcon, CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function WebsiteBuilder() {
  const features = [
    {
      icon: CursorArrowRaysIcon,
      title: "Drag & Drop Editor",
      description: "Build beautiful pages with our intuitive drag-and-drop interface. No coding required."
    },
    {
      icon: CubeTransparentIcon,
      title: "Pre-Built Blocks",
      description: "Choose from hundreds of professionally designed blocks and sections."
    },
    {
      icon: SparklesIcon,
      title: "Smart Customization",
      description: "Customize every element with easy-to-use controls and real-time preview."
    },
    {
      icon: WrenchIcon,
      title: "Advanced Tools",
      description: "Access powerful features like SEO optimization, analytics, and more."
    }
  ];

  return (
    <>
      <PageHero 
        title={<>Build Websites <span className="italic">Effortlessly</span></>}
        subtitle="Website Builder"
        description="Create stunning websites in minutes with our powerful, user-friendly website builder. No coding skills needed."
      />

      {/* Features Section */}
      <section className="relative py-section">
        <span className="bg-mask-right" />
        <div className="container relative mx-auto px-4 py-block">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Everything You Need to Build <span className="italic">Amazing</span> Websites
              </h2>
              <p className="text-base-content/80 mb-8">
                Our website builder comes packed with all the tools and features you need to create professional websites without writing a single line of code.
              </p>
              <div className="grid gap-6">
                {features.map((feature, i) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={i} className="flex gap-4">
                      <IconComponent className="size-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                        <p className="text-base-content/80">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-base-300 rounded-xl p-8 shadow-lg">
                <div className="aspect-video bg-base-200 rounded-lg flex items-center justify-center">
                  <WrenchIcon className="size-24 text-primary/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section className="relative bg-base-200 py-section">
        <span className="bg-mask-left" />
        <div className="container relative mx-auto px-4 py-block">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Start with <span className="italic">Professional</span> Templates
            </h2>
            <p className="text-base-content/80 max-w-[80ch] mx-auto">
              Choose from our collection of beautifully designed templates and customize them to match your brand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card bg-base-300 shadow-md hover:shadow-accent/30 transition duration-250 overflow-hidden group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-base-content/40">Template Preview {i}</div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">Business Template {i}</h3>
                  <p className="text-sm text-base-content/80">Perfect for professional services and corporate websites</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/websites/templates"
              className="inline-block bg-gradient-to-r from-primary to-accent text-white px-6 py-3 text-lg rounded-xl tracking-widest font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
            >
              View All Templates
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Ready to Start <span className="italic">Building</span>?
          </h2>
          <p className="text-base-content/80 max-w-[60ch] mx-auto mb-8">
            Join thousands of users who are creating stunning websites with our builder.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 text-lg rounded-xl tracking-widest font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Start Free Trial
            </Link>
            <Link
              href="/websites/templates"
              className="inline-block bg-base-300 text-base-content px-8 py-4 text-lg rounded-xl tracking-widest font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Browse Templates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}