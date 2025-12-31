import { useEffect, useRef, useState } from 'react'
import { animate, motion, stagger, useScroll, useTransform } from 'motion/react'
import { splitText } from 'motion-plus'

import ScrollButton from '@/components/ScrollButton'

interface HomeParallaxBackgroundProps {
  src?: string
  alt?: string
  opacity?: string
  className?: string
}

export default function HomeParallaxBackground({
  src = '/images/software-15.png',
  alt = 'Hero background',
  opacity = 'opacity-80',
  className = 'absolute inset-0 radial-gradient',
}: HomeParallaxBackgroundProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)
  const [wordsComplete, setWordsComplete] = useState(false)

  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    animateText()
  }, [isMounted])

  useEffect(() => {
    if (wordsComplete) {
      animateVisionText()
      const timer = setTimeout(() => applyShieldEffect(), 1700)
      return () => clearTimeout(timer)
    }
  }, [wordsComplete])

  const applyShieldEffect = () => {
    const empowerContainer = ref.current?.querySelector(
      '#empower-heading-text',
    )
    empowerContainer?.classList.add('empower-text')
  }

  const animateText = () => {
    const empowerContainer = ref.current?.querySelector(
      '#empower-heading-text',
    ) as HTMLElement | null

    if (empowerContainer) {
      empowerContainer.style.visibility = 'visible'
      animate(
        splitText(empowerContainer).chars,
        {
          opacity: [0, 1],
          y: [15, 0],
          scale: [0.8, 1],
        },
        {
          type: 'spring',
          duration: 0.8,
          bounce: 0,
          delay: stagger(0.05),
          onComplete: () => setWordsComplete(true),
        },
      )
    }
  }

  const animateVisionText = () => {
    const visionContainer = ref.current?.querySelector(
      '#vision-heading-text',
    ) as HTMLElement | null

    if (visionContainer) {
      visionContainer.style.visibility = 'visible'
      animate(
        splitText(visionContainer).chars,
        {
          height: [0, 'auto'],
          opacity: [0, 1],
          y: [-15, 0],
          scale: [0.8, 1],
        },
        {
          type: 'spring',
          duration: 0.6,
          bounce: 0,
          delay: stagger(0.03),
        },
      )
    }
  }

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={animationComplete ? { y } : undefined}
        className="radial-gradient absolute inset-0 z-10 min-h-[calc(100vh-5rem)]"
        initial={{ scale: 2.5 }}
        animate={{ scale: 1.2 }}
        transition={{ type: 'spring', bounce: 0.4, delay: 1.8, duration: 1.2 }}
      />

      <motion.div
        style={animationComplete ? { y } : undefined}
        className="absolute inset-0 z-20 mx-auto flex items-center justify-center text-center"
      >
        <div className="relative flex h-auto max-w-md flex-col items-center justify-center">
          <h1
            id="empower-heading-text"
            className="invisible relative inline-block overflow-hidden rounded-xl p-2 text-5xl font-medium italic text-primary md:text-6xl"
          >
            Empower
          </h1>

          <h2
            id="vision-heading-text"
            className="invisible mb-6 text-center text-3xl font-medium text-base-content md:text-4xl lg:text-5xl"
          >
            your online vision.
          </h2>

          <motion.div
            initial={{ opacity: 0, height: 0, scale: 0 }}
            animate={{ opacity: 1, height: 'auto', scale: 1 }}
            transition={{
              type: 'spring',
              bounce: 0.4,
              delay: 1.8,
              duration: 1.2,
            }}
          >
            <ScrollButton targetId="services">Explore</ScrollButton>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 -bottom-20"
        initial={{ opacity: 0, y: 250, scale: 0 }}
        animate={isMounted ? { opacity: 1, y: 0, scale: 1.1 } : {}}
        transition={{
          type: 'spring',
          bounce: 0.4,
          delay: 1.8,
          duration: 1.2,
        }}
        onAnimationComplete={() => setAnimationComplete(true)}
        style={animationComplete ? { y } : undefined}
      >
        <img
          src={src}
          alt={alt}
          className={`h-full w-full object-cover ${opacity}`}
          loading="eager"
          decoding="async"
        />
      </motion.div>
    </div>
  )
}
