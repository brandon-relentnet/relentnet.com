import PageHero from "@/components/PageHero";
import Link from "next/link";
import { DocumentIcon, FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function WebsiteTemplates() {
  const categories = [
    "All Templates",
    "Business",
    "E-commerce",
    "Portfolio",
    "Blog",
    "Landing Page",
    "Restaurant",
    "Real Estate",
    "Healthcare",
    "Education"
  ];

  const templates = [
    { name: "Corporate Pro", category: "Business", description: "Modern corporate website template with all essential business features" },
    { name: "Shop Master", category: "E-commerce", description: "Full-featured online store template with product galleries and checkout" },
    { name: "Creative Portfolio", category: "Portfolio", description: "Stunning portfolio template for designers and creative professionals" },
    { name: "Blog Writer", category: "Blog", description: "Clean and minimal blog template perfect for content creators" },
    { name: "Startup Landing", category: "Landing Page", description: "High-converting landing page template for startups and products" },
    { name: "Restaurant Deluxe", category: "Restaurant", description: "Beautiful restaurant template with menu and reservation features" },
    { name: "Real Estate Pro", category: "Real Estate", description: "Property listing template with advanced search and filtering" },
    { name: "Medical Care", category: "Healthcare", description: "Professional healthcare template with appointment booking" },
    { name: "Education Hub", category: "Education", description: "Complete education template with course management features" },
  ];

  return (
    <>
      <PageHero 
        title={<>Professional Website <span className="italic">Templates</span></>}
        subtitle="Templates Gallery"
        description="Choose from our collection of stunning, professionally designed templates to jumpstart your website project."
      />

      {/* Filter Section */}
      <section className="relative py-12 border-b border-base-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2 items-center">
              <FunnelIcon className="size-5 text-primary" />
              <span className="font-medium">Filter by Category:</span>
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 5).map((cat) => (
                  <button
                    key={cat}
                    className={`px-4 py-1 rounded-full text-sm transition-all ${
                      cat === "All Templates" 
                        ? "bg-primary text-white" 
                        : "bg-base-300 hover:bg-base-300/70"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative">
              <MagnifyingGlassIcon className="size-5 absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50" />
              <input
                type="text"
                placeholder="Search templates..."
                className="pl-10 pr-4 py-2 bg-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="relative py-section">
        <span className="bg-mask-right" />
        <div className="container relative mx-auto px-4 py-block">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="card bg-base-300 shadow-md hover:shadow-accent/30 transition duration-250 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <DocumentIcon className="size-16 text-base-content/20" />
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Link
                        href="#"
                        className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:scale-105 transition-transform"
                      >
                        Preview
                      </Link>
                      <Link
                        href="/websites/builder"
                        className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:scale-105 transition-transform"
                      >
                        Use Template
                      </Link>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-medium">{template.name}</h3>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                        {template.category}
                      </span>
                    </div>
                    <p className="text-base-content/80 text-sm">{template.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-block bg-base-300 text-base-content px-8 py-4 text-lg rounded-xl tracking-widest font-semibold hover:scale-105 active:scale-95 transition-all duration-200">
              Load More Templates
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-base-200 py-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Can&apos;t Find What You&apos;re <span className="italic">Looking For</span>?
          </h2>
          <p className="text-base-content/80 max-w-[60ch] mx-auto mb-8">
            Our design team can create a custom template tailored specifically to your needs and brand.
          </p>
          <Link
            href="/websites/design-services"
            className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 text-lg rounded-xl tracking-widest font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Get Custom Design
          </Link>
        </div>
      </section>
    </>
  );
}