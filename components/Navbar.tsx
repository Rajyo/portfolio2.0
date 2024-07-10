'use client'

import { AlignJustify, Github, Linkedin, Star } from 'lucide-react'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { LinkPreview } from './ui/link-preview'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
const ToggleTheme = dynamic(() => import('@/components/ToggleTheme'), {
  ssr: false
})
import { FloatingNav } from './ui/floating-navbar'
import dynamic from 'next/dynamic'

export const navLinks = [
  {
    id: 1,
    title: 'About',
    link: '#about'
  },
  {
    id: 2,
    title: 'Tech Stack',
    link: '#toolsAndTechnology'
  },
  {
    id: 3,
    title: 'Projects',
    link: '#projects'
  },
  {
    id: 4,
    title: 'Contact',
    link: '#contact'
  }
]

export default function Navbar() {
  const [windowSize, setWindowSize] = useState<number | null>(null)

  const handleWindowResize = useCallback(() => {
    setWindowSize(window.innerHeight)
  }, [])

  windowSize === null && handleWindowResize()

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [handleWindowResize, windowSize])

  return (
    <>
      {/* Web Header View */}
      {windowSize && windowSize > 750 ? (
        <header className='fixed z-50 mx-10 -mt-[58px] hidden w-[790px] origin-bottom-left rotate-90 justify-between px-10 py-2 md:flex'>
          <div className='flex items-center'>
            <p></p>
          </div>

          <nav className='flex items-center gap-x-5'>
            {navLinks.map(item => (
              <Link
                key={item.id}
                className='px-2 font-semibold hover:line-through hover:decoration-[#00eeff] hover:decoration-4 rotate-180'
                href={item.link}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div
            className='flex items-center rotate-180 gap-x-3'>
            <div
              className='p-2.5 rotate-90' >
              <LinkPreview
                url='https://in.linkedin.com/in/prajyot-khadse'
                className='hover:text-[#00eeff] dark:hover:text-[#00eeff]'
              >
                <Linkedin className='h-[1.5rem] w-[1.5rem]' />
              </LinkPreview>
            </div>
            <div
              className='p-2.5 rotate-90' >
              <LinkPreview
                url='https://github.com/Rajyo'
                className='hover:text-[#00eeff] dark:hover:text-[#00eeff]'
              >
                <Github className='h-[1.5rem] w-[1.5rem]' />
              </LinkPreview>
            </div>
          </div>
        </header>
      ) : (
        <>
          <header className='absolute inset-x-0 top-10 z-[40] md:flex w-full items-center justify-evenly space-x-4 border-transparent bg-transparent py-2 hidden'>
            <WebNavbarContent />
          </header>
          <header className='fixed z-50 mx-10 justify-between px-10 py-2 hidden md:flex'>
            <FloatingNav>
              <WebNavbarContent />
            </FloatingNav>
          </header>
        </>
      )}

      {/* Mobile Header View */}
      <header className='md:hidden'>
        <FloatingNav>
          <MobileNavbarContent />
        </FloatingNav>
      </header>
    </>
  )
}

export const StaticMobileNavbar = () => {
  return (
    <header className='absolute inset-x-0 top-0 z-[50] flex w-full items-center justify-between border bg-transparent py-2 border-black/[0.2] dark:border-white/[0.2] md:hidden pr-6 pl-4'>
      <MobileNavbarContent />
    </header>
  )
}

const MobileNavbarContent = () => {
  return (
    <>
      <div>
        <Link href={'/'} ><Star /></Link>
      </div>

      <div className='flex items-center gap-x-2'>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='ghost'>
              <AlignJustify className='h-[1.5rem] w-[1.5rem]' />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <nav className='mt-10 flex flex-col items-center gap-y-5'>
              {navLinks.map(item => (
                <SheetClose asChild key={item.id}>
                  <Link
                    className='w-full rounded-md p-2 text-center hover:scale-105 hover:bg-slate-50 hover:font-semibold hover:dark:bg-black/50'
                    href={item.link}
                  >
                    {item.title}
                  </Link>
                </SheetClose>
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
            <SheetFooter></SheetFooter>
          </SheetContent>
        </Sheet>

        <ToggleTheme />
      </div>
    </>
  )
}

const WebNavbarContent = () => {
  return (
    <>
      <nav className='flex items-center gap-x-5'>
        {navLinks.map(item => (
          <Link
            key={item.id}
            className='px-2 font-semibold hover:line-through hover:decoration-[#00eeff] hover:decoration-4'
            href={item.link}
          >
            {item.title}
          </Link>
        ))}
      </nav>

      <div
        className='flex items-center gap-x-3'>
        <div
          className='p-2.5' >
          <LinkPreview
            url='https://in.linkedin.com/in/prajyot-khadse'
            className='hover:text-[#00eeff] dark:hover:text-[#00eeff]'
          >
            <Linkedin className='h-[1.5rem] w-[1.5rem]' />
          </LinkPreview>
        </div>
        <div
          className='p-2.5' >
          <LinkPreview
            url='https://github.com/Rajyo'
            className='hover:text-[#00eeff] dark:hover:text-[#00eeff]'
          >
            <Github className='h-[1.5rem] w-[1.5rem]' />
          </LinkPreview>
        </div>
      </div>
    </>
  )
}