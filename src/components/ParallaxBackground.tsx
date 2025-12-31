import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

interface ParallaxBackgroundProps {
  src?: string
  alt?: string
  opacity?: string
  className?: string
}

export default function ParallaxBackground({
  src = '/images/software-15.png',
  alt = 'Hero Background',
  opacity = 'opacity-80',
  className = 'absolute inset-0',
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <div ref={ref} className={className}>
      <motion.div
        className="absolute inset-0"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ y }}
      >
        <img
          src={src}
          alt={alt}
          className={`h-full w-full object-cover ${opacity}`}
          loading="lazy"
          decoding="async"
        />
      </motion.div>
    </div>
  )
}
