"use client";

import { motion, stagger } from "motion/react";
import {
  ShoppingCartIcon,
  CreditCardIcon,
  TruckIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import SectionHeader from "@/components/sections/SectionHeader";

const iconMap = {
  ShoppingCartIcon,
  CreditCardIcon,
  TruckIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
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
      <div className="grid gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => {
          const IconComponent = iconMap[feature.icon];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card border-2 border-base-300 bg-base-300 p-6 shadow-md transition duration-250 hover:border-accent/30 hover:shadow-accent/30"
            >
              <div className="justify-left mb-4 flex items-center gap-x-4">
                <IconComponent className="size-10 text-primary" />
                <h3 className="text-xl font-medium">{feature.title}</h3>
              </div>
              <p className="text-base-content/80">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionHeader>
  );
}
