import CustomButton from "@/components/CustomButton";
import Link from "next/link";

export default function BuilderCTA() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-section">
      <div className="container mx-auto px-4 py-block text-center">
        <div className="section-subtitle">Ready to Build</div>
        <h2 className="section-title">
          Start Building <span className="italic">Amazing</span> Websites Today
        </h2>
        <p className="section-desc mb-8">
          Join thousands of users creating stunning websites with our premium templates and tools.
          <br />
          Cancel anytime. No long-term commitments.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CustomButton href="/contact" gradient={true}>
            Start Free Trial
          </CustomButton>
          <span className="text-base-content/60">or</span>
          <Link
            href="/websites/templates"
            className="inline-block bg-base-300 text-base-content px-6 py-3 text-lg rounded-xl font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Browse Templates
          </Link>
        </div>
        <p className="mt-6 text-sm text-base-content/60">
          🚀 Instant access • 📱 Mobile-ready templates • 🎥 Video tutorials included
        </p>
      </div>
    </section>
  );
}