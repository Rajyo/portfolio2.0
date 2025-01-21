'use client'

import { AlignJustify, Github, Linkedin, ShieldOff, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
const ToggleTheme = dynamic(() => import('@/components/ToggleTheme'), {
  ssr: false
})
import { AnimatePresence, motion } from 'framer-motion'
import { mobileNavLinks, navLinks } from '@/lib/data'
import { LinkPreview } from '../ui/link-preview'
import lightLogo from '@/public/images/logo_light.png'
import darkLogo from '@/public/images/logo_dark.png'
import dynamic from 'next/dynamic'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '../ui/tooltip'

export default function StaticMobileNavbar() {
  const [slider, setSlider] = useState(false)
  const outsideRef = useRef<HTMLDivElement | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const handleClickOutside = (e: KeyboardEvent | MouseEvent | TouchEvent) => {
      if (
        outsideRef?.current &&
        !outsideRef?.current?.contains(e?.target as Node)
      ) {
        setSlider(false)
      }
    }

    window.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [outsideRef])

  return (
    <header className='absolute inset-x-0 top-0 z-[50] flex h-16 w-full items-center justify-between border-b border-black/[0.1] bg-white/50 py-2 pl-4 pr-6 dark:border-white/[0.1] dark:bg-black/20 md:hidden'>
      <div>
        <Link
          href={'/'}
          className='rounded-md hover:bg-gray-50 dark:hover:bg-gray-100/10'
        >
          {theme === 'dark' ? (
            <Image
              src={lightLogo}
              alt='logo'
              width={30}
              height={30}
              className='rounded-full'
            />
          ) : (
            <Image
              src={darkLogo}
              alt='logo'
              width={30}
              height={30}
              className='rounded-full'
            />
          )}
        </Link>
      </div>

      <div className='flex items-center gap-x-10 max-[400px]:gap-x-6 max-[300px]:gap-x-2'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={'/fight-club'}
                className='p-3 hover:bg-gray-50 dark:hover:bg-gray-100/10'
              >
                <ShieldOff className='h-[1.5rem] w-[1.5rem]' />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p className='p-1'>I have some info about FIGHT CLUB</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className='p-3 hover:cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-100/10'>
          <AlignJustify onClick={() => setSlider(true)} />
        </div>

        <ToggleTheme />
      </div>

      <AnimatePresence mode='wait'>
        {slider ? (
          <motion.div
            ref={outsideRef}
            initial={{ x: '100%' }}
            exit={{ x: '100%' }}
            animate={{ x: '0%' }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className='fixed inset-y-0 right-0 z-50 h-full w-3/4 gap-4 border-l bg-background bg-white p-6 shadow-lg dark:bg-neutral-950 sm:max-w-sm'
          >
            <div className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none'>
              <X
                className='h-6 w-6 hover:cursor-pointer'
                onClick={() => setSlider(false)}
              />
            </div>
            <nav className='mt-10 flex w-full flex-col items-center gap-y-5'>
              {mobileNavLinks.map(item => (
                <Link
                  key={item.id}
                  className='w-full rounded-md p-2 text-center hover:scale-105 hover:bg-slate-50 hover:font-semibold hover:dark:bg-black'
                  href={item.link}
                  onClick={() => setSlider(false)}
                >
                  {item.title}
                </Link>
              ))}
              <div className='flex w-full items-center justify-around gap-x-3 pt-10'>
                <div className='p-2.5'>
                  <LinkPreview
                    url='https://in.linkedin.com/in/prajyot-khadse'
                    className='hover:text-[#00eeff] dark:hover:text-[#00eeff]'
                  >
                    <Linkedin className='h-[1.5rem] w-[1.5rem]' />
                  </LinkPreview>
                </div>
                <div className='p-2.5'>
                  <LinkPreview
                    url='https://github.com/Rajyo'
                    className='hover:text-[#00eeff] dark:hover:text-[#00eeff]'
                  >
                    <Github className='h-[1.5rem] w-[1.5rem]' />
                  </LinkPreview>
                </div>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
