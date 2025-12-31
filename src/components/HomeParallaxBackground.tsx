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
    }
  }, [wordsComplete])

  function animateText() {
    // Animate "Digital" text
    const empowerContainer = ref.current?.querySelector('#empower-heading-text')
    if (empowerContainer) {
      const element = empowerContainer as HTMLElement
      element.style.visibility = 'visible'
      animate(
        splitText(element).chars,
        {
          opacity: [0, 1],
          y: [20, 0],
          scale: [0.95, 1],
        },
        {
          type: 'spring',
          duration: 1.5,
          bounce: 0,
          delay: stagger(0.1),
          onComplete: () => {
            setWordsComplete(true)
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
          opacity: [0, 1],
          y: [20, 0],
        },
        {
          type: 'spring',
          duration: 1.5,
          bounce: 0,
          delay: stagger(0.05),
        },
      )
    }
  }

  // Create parallax effect - image moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={animationComplete ? { y } : {}}
        className="radial-gradient absolute top-0 left-0 z-10 hero min-h-[calc(100vh-5rem)] bg-transparent!"
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          bounce: 0,
          duration: 2,
        }}
      />

      <motion.div
        style={animationComplete ? { y } : {}}
        className="absolute inset-0 hero-content z-20 mx-auto text-center"
      >
        <div className="relative flex h-auto max-w-4xl flex-col items-center justify-center space-y-8">
          <h1
            id="empower-heading-text"
            className={`invisible relative inline-block text-6xl font-light tracking-[0.2em] text-primary uppercase md:text-8xl`}
          >
            Digital
          </h1>

          <h1
            id="vision-heading-text"
            className="invisible text-center text-3xl font-extralight tracking-widest text-base-content uppercase md:text-4xl"
          >
            Stewardship
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 2.5,
              ease: 'easeOut',
            }}
            className="pt-12"
          >
            <ScrollButton targetId="services">Begin the Journey</ScrollButton>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-20 w-full flex justify-center opacity-60 mix-blend-overlay"
        initial={{ opacity: 0, y: 100 }}
        animate={isMounted ? { opacity: 0.6, y: 0 } : {}}
        transition={{
          type: 'spring',
          bounce: 0,
          delay: 0.5,
          duration: 2,
        }}
        onAnimationComplete={() => setAnimationComplete(true)}
        style={animationComplete ? { y } : {}}
      >
        <img
          src={src}
          alt={alt}
          className={`max-w-4xl object-contain ${opacity}`}
        />
      </motion.div>
    </div>
  )
}
