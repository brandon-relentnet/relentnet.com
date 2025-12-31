import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

import type { Service } from '@/data/siteData'
import { servicesProvided } from '@/data/siteData'

export default function AnimatedCards() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      {servicesProvided.map((service, index) => (
        <motion.div
          key={`${service.name}-${index}`}
          initial={{ opacity: 0, y: 25, x: -25 }}
          whileInView={isMounted ? { opacity: 1, y: 0, x: 0 } : {}}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.6 }}
        >
          {service.link && service.link !== '#' ? (
            <a href={service.link} className="group relative block h-full">
              <CardContent service={service} />
            </a>
          ) : (
            <div className="group relative block h-full">
              <CardContent service={service} />
            </div>
          )}
        </motion.div>
      ))}
    </>
  )
}

function CardContent({ service }: { service: Service }) {
  const IconComponent = service.icon

  return (
    <div className="flex h-full flex-col items-start justify-center rounded-2xl border border-white/5 bg-white/5 p-12 text-left backdrop-blur-sm transition duration-500 hover:border-primary/20 hover:bg-white/10">
      <div className="mb-6 flex items-center gap-4">
        <IconComponent className="size-8 flex-shrink-0 text-primary" />
        <h3 className="text-xl font-light tracking-wide text-white uppercase">
          {service.name}
        </h3>
      </div>
      <p className="text-base-content/60 font-light leading-relaxed">
        {service.description}
      </p>
      {service.link && service.link !== '#' && (
        <ArrowTopRightOnSquareIcon className="absolute right-6 top-6 size-4 text-primary opacity-0 transition duration-300 group-hover:opacity-100" />
      )}
    </div>
  )
}
