"use client";

import { motion } from "motion/react";
import { 
  ShoppingCartIcon,
  CreditCardIcon,
  TruckIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/solid";
import SectionHeader from "@/components/sections/SectionHeader";

const iconMap = {
  ShoppingCartIcon,
  CreditCardIcon,
  TruckIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon
};

export default function StoreFeatures({ features }) {
  return (
    <SectionHeader
      title={
        <>
          Everything You Need to <span className="italic">Sell Online</span>
        </>
      }
      subtitle="Complete E-commerce Solution"
      desc="Our e-commerce platform comes packed with powerful features to help you manage products, process orders, and grow your online business."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => {
          const IconComponent = iconMap[feature.icon];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="card bg-base-300 shadow-md hover:shadow-accent/30 border-2 border-base-300 hover:border-accent/30 transition duration-250 p-6"
            >
              <IconComponent className="size-10 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-base-content/80">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionHeader>
  );
}