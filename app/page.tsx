'use client'

import About from '@/components/aboutSection/About'
import Projects from '@/components/projectSection/Projects'
import Sparkles from '@/components/heroSection/Sparkles'
import dynamic from 'next/dynamic'
// import ToolsAndTechnology from '@/components/techStackSection/ToolsAndTechnology'
const TechStack = dynamic(() => import('@/components/techStackSection/TechStack'), {
  ssr: false
})
import Contact from '@/components/contactSection/ContactPage'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Preloader from '@/components/Preloader'
import LandingPage from '@/components/heroSection/LandingPage'


export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    setTimeout(() => {
      setIsLoading(false)
      document.body.style.cursor = 'default'
      window.scrollTo(0, 0)
      document.body.style.overflowY = 'auto'
    }, 2000)
  }, [])

  return (
    <main className='relative w-screen bg-[#f0f3ec] dark:bg-[#161616]'>
      {/* <main className='relative w-screen bg-[#f0f3ec] dark:bg-[#161616] dark:bg-[#111010] dark:bg-[#02010e]'> */}

      {/* <Sparkles /> */}
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>

      <LandingPage />

      <About />

      {/* Alternative to TechStack */}
      {/* <ToolsAndTechnology /> */}

      {/* Alternative to ToolsAndTechnology */}
      <TechStack />

      <Projects />

      <Contact />
    </main>
  )
}
