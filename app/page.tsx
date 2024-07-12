'use client'

import About from '@/components/About'
import Projects from '@/components/Projects'
import Sparkles from '@/components/Sparkles'
import dynamic from 'next/dynamic'
const LandingPage = dynamic(
  () => import('@/components/LandingPage'),
  {
    ssr: false
  }
)
// import ToolsAndTechnology from '@/components/ToolsAndTechnology'
const TechStack = dynamic(
  () => import('@/components/TechStack'),
  {
    ssr: false
  }
)
import Contact from '@/components/ContactPage'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Preloader from '@/components/Preloader'



export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    setTimeout(() => {
      setIsLoading(false)
      document.body.style.cursor = 'default'
      window.scrollTo(0, 0)
      document.body.style.overflowY = "auto"
    }, 2000)
  }, [])


  return (
    <main className='relative w-screen bg-[#f2f2f2] dark:bg-[#111111]'>

      {/* <Sparkles /> */}
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>

      <LandingPage />

      <About />

      {/* Alternative to TechStack */}
      {/* <ToolsAndTechnology /> */}

      <TechStack />

      <Projects />

      <Contact />
    </main>
  )
}
