'use client'

import About from '@/components/aboutSection/About'
import Projects from '@/components/projectSection/Projects'
import ToolsAndTechnology from '@/components/techStackSection/ToolsAndTechnology'
import TechStack from '@/components/techStackSection/TechStack'
import Contact from '@/components/contactSection/ContactPage'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Preloader from '@/components/Preloader'
import LandingPage from '@/components/heroSection/LandingPage'
import CheckNewPortfolio from '@/components/CheckNewPortfolio'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [checkNewPortfolio, setCheckNewPortfolio] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    !checkNewPortfolio &&
      setTimeout(() => {
        setIsLoading(false)
        document.body.style.cursor = 'default'
        window.scrollTo(0, 0)
        document.body.style.overflowY = 'auto'
      }, 2000)
  }, [checkNewPortfolio])

  return (
    <main className='relative w-screen bg-[#f0f3ec] dark:bg-[#161616]'>
      {isLoading && checkNewPortfolio && (
        <CheckNewPortfolio setCheckNewPortfolio={setCheckNewPortfolio} />
      )}
      
      <AnimatePresence mode='wait'>
        {isLoading && !checkNewPortfolio && <Preloader />}
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
