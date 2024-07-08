"use client"

import { Moon, Star, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link href={'/'} className='fixed left-[42px] hidden md:flex top-10 z-[60] p-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-100/10'>
      <Star className='h-[2rem] w-[2rem]' />
    </Link>
  )
}


export default function ToggleTheme() {
  const { setTheme, theme } = useTheme()

  return (
    <section onClick={theme === "light" ? () => setTheme("dark") : () => setTheme("light")} className="p-3 rounded-br-2xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-100/10 ">
      {
        theme === "light"
          ? <Moon className="h-[1.5rem] w-[1.5rem] md:h-[2rem] md:w-[2rem] dark:rotate-90 dark:scale-0 transition-all rotate-0 scale-100 " />
          : <Sun className="h-[1.5rem] w-[1.5rem] md:h-[2rem] md:w-[2rem] dark:rotate-0 dark:scale-100 transition-all -rotate-90 scale-0 " />
      }
    </section>
  )
}