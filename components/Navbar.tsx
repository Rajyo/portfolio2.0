"use client"

import { AlignJustify, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import { LinkPreview } from "./ui/link-preview";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import ToggleTheme from "./ToggleTheme";


export default function Navbar() {
  const [windowSize, setWindowSize] = useState<number | null>(null)

  const handleWindowResize = useCallback(() => {
    setWindowSize(window.innerHeight);
  }, []);

  windowSize === null && handleWindowResize()

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize, windowSize]);

  const navLinks = [
    {
      id: 1,
      title: "About",
      link: "/about"
    },
    {
      id: 2,
      title: "Education",
      link: "/education"
    },
    {
      id: 3,
      title: "Projects",
      link: "/projects"
    },
    {
      id: 4,
      title: "Contact",
      link: "/contact"
    },
  ]

  return (
    <>
      {/* Web Header View */}
      <header className={cn("fixed origin-bottom-left hidden md:flex justify-between py-2 px-10 mx-10 z-50", windowSize && windowSize > 750 ? "rotate-90 -mt-[58px] w-[790px]" : "rotate-0 mt-10 w-[85%] h-14")}>

        <div className={cn('flex items-center', windowSize && windowSize > 750 ? "rotate-180" : "rotate-0")}>
          <Link href={'/'}>
            <p>Logo</p>
          </Link>
        </div>

        <nav className='flex gap-x-5 items-center'>
          {
            navLinks.map((item) => (
              <Link key={item.id} className={cn("px-2 hover:decoration-[#00eeff] hover:decoration-4 hover:line-through font-semibold", windowSize && windowSize > 750 ? "rotate-180" : "rotate-0")} href={item.link}>
                {item.title}
              </Link>
            ))
          }
        </nav>

        <div className={cn('flex gap-x-3 items-center', windowSize && windowSize > 750 ? "rotate-180" : "rotate-0")}>
          <div className={cn('p-2.5', windowSize && windowSize > 750 ? "rotate-90" : "rotate-0")}>
            <LinkPreview url="https://in.linkedin.com/in/prajyot-khadse" className="hover:text-[#00eeff] dark:hover:text-[#00eeff]">
              <Linkedin className='h-[1.5rem] w-[1.5rem]' />
            </LinkPreview>
          </div>
          <div className={cn('p-2.5', windowSize && windowSize > 750 ? "rotate-90" : "rotate-0")}>
            <LinkPreview url="https://github.com/Rajyo" className="hover:text-[#00eeff] dark:hover:text-[#00eeff]">
              <Github className='h-[1.5rem] w-[1.5rem]' />
            </LinkPreview>
          </div>
        </div>

      </header >


      {/* Mobile Header View */}
      <header className="fixed md:hidden top-5 w-[100%] flex justify-between px-5 z-50 items-center">
        <div>
          <Link href={'/'}>Home</Link>
        </div>

        <div className="flex items-center gap-x-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost">
                <AlignJustify className="h-[1.5rem] w-[1.5rem]" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-y-5 items-center mt-10">
                {
                  navLinks.map((item) => (
                    <Link key={item.id} className="p-2 w-full text-center hover:bg-slate-50 hover:dark:bg-black/50 rounded-md hover:scale-105 hover:font-semibold" href={item.link}>
                      {item.title}
                    </Link>
                  ))
                }
              </nav>
              <SheetFooter>
                {/* <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose> */}
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <ToggleTheme />
        </div>

      </header>
    </>
  )
}
