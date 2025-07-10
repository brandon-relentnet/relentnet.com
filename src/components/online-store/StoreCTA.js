import CustomButton from "@/components/CustomButton";
import Link from "next/link";

export default function StoreCTA() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-section">
      <div className="container mx-auto px-4 py-block text-center">
        <div className="section-subtitle">Ready to Launch</div>
        <h2 className="section-title">
          Start <span className="italic">Selling Online</span> Today
        </h2>
        <p className="section-desc mb-8">
          Join thousands of successful businesses already using our e-commerce platform.
          <br />
          No setup fees. No long-term contracts. Cancel anytime.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CustomButton href="/contact" gradient={true}>
            Start Free Trial
          </CustomButton>
          <span className="text-base-content/60">or</span>
          <Link
            href="#"
            className="inline-block bg-base-300 text-base-content px-6 py-3 text-lg rounded-xl font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
          >
            View Demo Store
          </Link>
        </div>
        <p className="mt-6 text-sm text-base-content/60">
          💳 No credit card required • 🚀 Set up in minutes • 📞 24/7 support
        </p>
      </div>
    </section>
  );
}