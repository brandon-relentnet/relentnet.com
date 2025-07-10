"use client";

import { useState } from "react";
import { PricingCard } from "@/components/PricingCard";
import SectionHeader from "@/components/sections/SectionHeader";
import PlatformToggle from "@/components/website-design/PlatformToggle";

export default function StorePricing({ plans }) {
  const [isCustom, setIsCustom] = useState(false);

  return (
    <SectionHeader
      title={
        <>
          Online Store <span className="italic">Pricing</span>
        </>
      }
      subtitle="Store Packages"
      desc="One-time payment. No monthly fees. Just a powerful online store that sells."
      maskRight={false}
      id="store-pricing"
    >
      <div className="mx-auto mb-6 text-center md:w-2/3">
        <PlatformToggle isCustom={isCustom} setIsCustom={setIsCustom} />

        {/* Platform benefits mini-section */}
        <div className="mb-20 text-center">
          <p className="text-sm text-base-content/70">
            {isCustom ? (
              <>
                <span className="font-semibold text-primary">Next.js</span> =
                Lightning fast store, handles high traffic (perfect for serious sellers)
              </>
            ) : (
              <>
                <span className="font-semibold text-primary">WordPress</span>{" "}
                = Easy to manage, cost-effective (great for most online stores)
              </>
            )}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
        {plans.map((plan, i) => (
          <PricingCard
            key={i}
            plan={plan}
            isCustom={isCustom}
            ctaText="Start My Store"
            ctaHref="https://clients.relentnet.com/index.php?rp=/store/online-store"
            showAnimation={true}
            animationDelay={i * 0.1}
          />
        ))}
      </div>

      {/* Value proposition section */}
      <div className="mt-16 text-center">
        <p className="mx-auto max-w-3xl text-base-content/60">
          <span className="font-semibold text-base-content">
            Every package includes:
          </span>{" "}
          Custom store design (no templates!), mobile optimization, payment processing setup,
          and complete training on managing your store.
          <span className="font-medium text-primary">
            {" "}
            Pay in full and save 5%.
          </span>
        </p>
      </div>
    </SectionHeader>
  );
}