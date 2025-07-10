"use client";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { servicesProvided, builderFeatures } from "@/data/siteData";
import { useMemo } from "react";

export default function AnimatedCards({ servicesData }) {
  const [isMounted, setIsMounted] = useState(false);

  const data = useMemo(() => {
    const dataMap = {
      homepage: servicesProvided,
      builderpage: builderFeatures,
    };
    return dataMap[servicesData] || null;
  }, [servicesData]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {data &&
        data.map((service, i) => (
          <motion.div
            initial={{ opacity: 0, y: 25, x: -25 }}
            whileInView={isMounted ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            key={i}
          >
            {service.link && service.link !== "#" ? (
              <Link href={service.link} className="group relative h-full">
                <CardContent service={service} />
              </Link>
            ) : (
              <div className="group relative h-full">
                <CardContent service={service} />
              </div>
            )}
          </motion.div>
        ))}
    </>
  );
}

const CardContent = ({ service }) => {
  let IconComponent = service.icon;
  return (
    <div className="card-border card flex h-full flex-col items-start justify-center border-base-300 bg-base-300 p-8 text-left shadow-md transition duration-250 hover:border-accent/30 hover:shadow-accent/30">
      <div className="mb-4 flex items-center gap-x-4">
        <IconComponent className="size-8 flex-shrink-0 text-primary" />
        <h3 className="text-2xl font-medium">{service.name}</h3>
      </div>
      <p className="text-base-content/80">{service.description}</p>
      {service.link && service.link !== "#" && (
        <ArrowTopRightOnSquareIcon className="absolute top-2 right-2 size-5 text-secondary opacity-0 transition duration-200 group-hover:opacity-70" />
      )}
    </div>
  );
};
