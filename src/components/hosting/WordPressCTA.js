import Link from "next/link";

export default function WordPressCTA() {
  return (
    <section className="relative py-section">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-medium mb-6">
          Ready to <span className="italic">Launch</span> Your WordPress Site?
        </h2>
        <p className="text-base-content/80 max-w-[60ch] mx-auto mb-8">
          Join thousands of WordPress users who trust RelentNet for their hosting needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
  );
}