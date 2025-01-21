'use client'

import React, { useEffect } from 'react'
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate
} from 'framer-motion'
import { useTheme } from 'next-themes'

const LIGHT_COLOR = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C']
const DARK_COLOR = ['#01C17C', '#0256C4', '#BB00BD', '#C5012F']

const AuroraHero = () => {
  const { theme } = useTheme()

  const COLORS_TOP = theme === 'light' ? LIGHT_COLOR : DARK_COLOR

  const color = useMotionValue(COLORS_TOP[0])
  const mainColor = theme === 'light' ? '#f0f3ec' : '#161616'

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror'
    })
  }, [COLORS_TOP, color])

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 100%, ${mainColor} 50%, ${color})`

  return (
    <motion.section
      style={{
        backgroundImage
      }}
      className='absolute grid min-h-screen w-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200'
    ></motion.section>
  )
}

export default AuroraHero
