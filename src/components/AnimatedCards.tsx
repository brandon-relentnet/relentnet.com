import { useEffect, useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

import {
  builderFeatures,
  servicesProvided,
  type Service,
} from '@/data/siteData'

export type CardSource = 'homepage' | 'builderpage'

interface AnimatedCardsProps {
  servicesData: CardSource
}

export default function AnimatedCards({ servicesData }: AnimatedCardsProps) {
  const [isMounted, setIsMounted] = useState(false)

  const data = useMemo(() => {
    const map: Record<CardSource, Service[]> = {
      homepage: servicesProvided,
      builderpage: builderFeatures,
    }
    return map[servicesData]
  }, [servicesData])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      {data.map((service, index) => (
        <motion.div
          key={`${service.name}-${index}`}
          initial={{ opacity: 0, y: 25, x: -25 }}
          whileInView={isMounted ? { opacity: 1, y: 0, x: 0 } : {}}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.6 }}
        >
          {service.link && service.link !== '#' ? (
            <a
              href={service.link}
              className="group relative block h-full"
            >
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
    <div className="flex h-full flex-col items-start justify-center rounded-2xl border border-base-300 bg-base-300/80 p-8 text-left shadow-lg transition duration-200 hover:border-accent/30 hover:shadow-accent/30">
      <div className="mb-4 flex items-center gap-4">
        <IconComponent className="size-8 flex-shrink-0 text-primary" />
        <h3 className="text-2xl font-semibold text-base-content">
          {service.name}
        </h3>
      </div>
      <p className="text-base-content/80">{service.description}</p>
      {service.link && service.link !== '#' && (
        <ArrowTopRightOnSquareIcon className="absolute right-4 top-4 size-5 text-secondary opacity-0 transition duration-200 group-hover:opacity-80" />
      )}
    </div>
  )
}
