'use client'

import { animate, motion, stagger, useScroll, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
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
  alt = 'Hero Background',
  opacity = 'opacity-80',
  className = 'absolute inset-0 radial-gradient',
}: HomeParallaxBackgroundProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)
  const [wordsComplete, setWordsComplete] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    animateText()
  }, [isMounted])

  // Animate vision text when words are complete
  useEffect(() => {
    if (wordsComplete) {
      animateVisionText()
      setTimeout(applyShieldEffect, 1700)
    }
  }, [wordsComplete])

  function applyShieldEffect() {
    const empowerContainer = ref.current?.querySelector('#empower-heading-text')
    if (empowerContainer) {
      ;(empowerContainer as HTMLElement).classList.add('empower-text')
    }
  }

  function animateText() {
    // Animate "Empower" text
    const empowerContainer = ref.current?.querySelector('#empower-heading-text')
    if (empowerContainer) {
      const element = empowerContainer as HTMLElement
      element.style.visibility = 'visible'
      animate(
        splitText(element).chars,
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
          onComplete: () => {
            setWordsComplete(true)
            console.log('running')
          },
        },
      )
    }
  }

  const animateVisionText = () => {
    const visionContainer = ref.current?.querySelector('#vision-heading-text')
    if (visionContainer) {
      const element = visionContainer as HTMLElement
      element.style.visibility = 'visible'
      animate(
        splitText(element).chars,
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

  // Create parallax effect - image moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={animationComplete ? { y } : {}}
        className="radial-gradient absolute top-0 left-0 z-10 hero min-h-[calc(100vh-5rem)] bg-transparent!"
        initial={{ scale: 2.5 }}
        animate={{ scale: 1.2 }}
        transition={{
          type: 'spring',
          bounce: 0.4,
          delay: 1.8,
          duration: 1.2,
        }}
      />

      <motion.div
        style={animationComplete ? { y } : {}}
        className="absolute inset-0 hero-content z-20 mx-auto text-center"
      >
        <div className="relative flex h-auto max-w-md flex-col items-center justify-center">
          <h1
            id="empower-heading-text"
            className={`invisible relative inline-block overflow-hidden rounded-xl p-2 text-5xl font-medium text-primary italic md:text-6xl`}
          >
            Empower
          </h1>

          <h1
            id="vision-heading-text"
            className="invisible mb-6 text-center text-3xl font-medium text-base-content md:text-4xl lg:text-5xl"
          >
            your online vision.
          </h1>

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
        className="absolute -bottom-20"
        initial={{ opacity: 0, y: 250, scale: 0 }}
        animate={isMounted ? { opacity: 1, y: 0, scale: 1.1 } : {}}
        transition={{
          type: 'spring',
          bounce: 0.4,
          delay: 1.8,
          duration: 1.2,
        }}
        onAnimationComplete={() => setAnimationComplete(true)}
        style={animationComplete ? { y } : {}}
      >
        <img
          src={src}
          alt={alt}
          className={`h-full w-full object-cover ${opacity}`}
        />
      </motion.div>
    </div>
  )
}
