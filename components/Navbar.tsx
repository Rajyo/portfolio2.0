'use client'

import { AlignJustify, Github, Linkedin, Star, X } from 'lucide-react'
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
import { navLinks } from '@/lib/data'


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

export const StaticMobileNavbar = () => {
  const [slider, setSlider] = useState(false)

  return (
    <header className='absolute inset-x-0 top-0 z-[50] flex w-full items-center justify-between border-b border-black/[0.2] bg-transparent py-2 pl-4 pr-6 dark:border-white/[0.2] md:hidden'>
      <div>
        <Link href={'/'}>
          <Star />
        </Link>
      </div>

      <div className='flex items-center max-[300px]:gap-x-4 max-[400px]:gap-x-6 gap-x-10 sm:gap-x-16'>
        <AlignJustify
          className='hover:cursor-pointer'
          onClick={() => setSlider(true)}
        />

        <ToggleTheme />
      </div>

      {slider && (
        <div className='fixed inset-y-0 right-0 z-50 h-full w-3/4 gap-4 border-l bg-background bg-white p-6 shadow-lg dark:bg-black sm:max-w-sm transition-all delay-500 ease-in-out duration-700'>
          <div className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none'>
            <X
              className='h-6 w-6 hover:cursor-pointer'
              onClick={() => setSlider(false)}
            />
          </div>
          <nav className='mt-10 flex w-full flex-col items-center gap-y-5'>
            {navLinks.map(item => (
              <Link
                key={item.id}
                className='w-full rounded-md p-2 text-center hover:scale-105 hover:bg-slate-50 hover:font-semibold hover:dark:bg-black/50'
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
        </div>
      )}
    </header>
  )
}