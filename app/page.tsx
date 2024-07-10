'use client'

import About from '@/components/About'
import LandingPage from '@/components/LandingPage'
import Projects from '@/components/Projects'
import Sparkles from '@/components/Sparkles'
import dynamic from 'next/dynamic'
const ToolsAndTechnology = dynamic(
  () => import('@/components/ToolsAndTechnology'),
  {
    ssr: false
  }
)
import Contact from '@/components/ContactPage'



export default function Home() {

  return (
    <main className='relative w-screen bg-[#f2f2f2] dark:bg-[#111111]'>
      {/* <Sparkles /> */}

      <LandingPage />

      <About />

      <ToolsAndTechnology />

      <Projects />

      <Contact />
    </main>
  )
}
