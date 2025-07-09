import Link from "next/link";

export default function WebHostingCTA() {
  return (
    <section className="relative py-section">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-medium mb-6">
          Ready to <span className="italic">Focus</span> on Your Business?
        </h2>
        <p className="text-base-content/80 max-w-[60ch] mx-auto mb-8">
          Stop worrying about website technical issues. Let our expert team handle everything 
          while you concentrate on growing your business.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 text-lg rounded-xl tracking-widest font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Get Started Today
          </Link>
          <Link
            href="/hosting/wordpress"
            className="inline-block bg-base-300 text-base-content px-8 py-4 text-lg rounded-xl tracking-widest font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Compare Options
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-base-content/70">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>Free setup & migration</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>30-day money back guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>No long-term contracts</span>
          </div>
        </div>
      </div>
    </section>
  );
}