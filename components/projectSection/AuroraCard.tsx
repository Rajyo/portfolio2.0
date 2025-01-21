'use client'

import React, { useEffect } from 'react'
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate
} from 'framer-motion'
import { useTheme } from 'next-themes'

const COLORS_TOP = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C']

const AuroraCard = () => {
  const { theme } = useTheme()

  const color = useMotionValue(COLORS_TOP[0])
  const mainColor = theme === 'light' ? '#f1f5f9' : '#020617'

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror'
    })
  }, [])

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, ${mainColor} 50%, ${color})`

  return (
    <motion.section
      style={{
        backgroundImage
      }}
      className='absolute grid min-h-screen w-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200'
    ></motion.section>
  )
}

export default AuroraCard
