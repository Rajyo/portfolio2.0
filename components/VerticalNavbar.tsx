"use client"

import { Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import { LinkPreview } from "./ui/link-preview";

let deviceHeight = "790px";
export default function VerticalNavbar() {
  useEffect(() => {
    deviceHeight = window?.innerHeight + "px"
    console.log(deviceHeight)
  }, [])
  return (
    <nav className={`fixed -mt-[58px] w-[${deviceHeight}] rotate-[90deg] origin-bottom-left flex justify-between py-2 px-10 mx-10`}>
      <div className='flex items-center rotate-180'>
        <Link href={'/'}>
          <p>Logo</p>
        </Link>
      </div>

      <div className='flex gap-x-5 items-center'>
        <Link className="rotate-180 px-2 hover:decoration-[#00eeff] hover:decoration-4 hover:text hover:line-through font-semibold" href={'/contact'}>
          About
        </Link>
        <Link className="rotate-180 px-2 hover:decoration-[#00eeff] hover:decoration-4 hover:text hover:line-through font-semibold" href={'/contact'}>
          Education
        </Link>
        <Link className="rotate-180 px-2 hover:decoration-[#00eeff] hover:decoration-4 hover:text hover:line-through font-semibold" href={'/contact'}>
          Projects
        </Link>
        <Link className="rotate-180 px-2 hover:decoration-[#00eeff] hover:decoration-4 hover:text hover:line-through font-semibold" href={'/contact'}>
          Contact
        </Link>
      </div>

      <div className='flex gap-x-3 items-center'>
        <p className='-rotate-90 p-2.5'>
          <LinkPreview url="https://github.com/Rajyo" className="hover:text-[#00eeff] dark:hover:text-[#00eeff]">
            <Github className='h-[1.5rem] w-[1.5rem]' />
          </LinkPreview>
        </p>
        <p className='-rotate-90 p-2.5'>
          <LinkPreview url="https://in.linkedin.com/in/prajyot-khadse" className="hover:text-[#00eeff] dark:hover:text-[#00eeff]">
            <Linkedin className='h-[1.5rem] w-[1.5rem]' />
          </LinkPreview>
        </p>
      </div>
      
    </nav >
  )
}
