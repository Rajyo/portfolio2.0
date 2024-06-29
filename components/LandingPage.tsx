"use client"

import { LinkPreview } from "@/components/ui/link-preview";
import { TypeAnimation } from "react-type-animation";


export default function LandingPage() {
  return (
    <section className="w-full">
        {/* Add Canvas */}
        <div className="max-w-[86%] mx-auto h-screen flex">

          <div className="flex flex-col sm:ml-28 md:ml-auto sm:w-[75%] md:w-[69%] m-auto sm:h-[45%] xl:h-[40%]">
            <h1 className="pl-[6px] py-2 text-2xl font-bold uppercase flex gap-7 text-gray-600 dark:text-gray-400 tracking-tight">
              <span>p r a j y o t</span> <span>k h a d s e</span>
            </h1>

            <TypeAnimation
              sequence={[
                'Full Stack Developer', 1000,
                'Frontend Developer', 1000,
                'Backend Developer', 1000,
                'Mobile App Developer', 1000,
                'Devops Engineer', 1000
              ]}
              wrapper="span"
              speed={50}
              className="sm:text-[4em] lg:text-[5em] font-bold inline-block h-full w-full py-2"
              repeat={Infinity}
            />

            <LinkPreview url="https://drive.google.com/file/d/1zcbqPT8vW6J5HXpyDbGjqtOfmwLI_bGx/view?usp=drive_link" className="font-bold w-36 h-16 pl-1">
              <button className="inline-flex w-full h-full animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Resume
              </button>
            </LinkPreview>
          </div>

        </div>

      </section>
  )
}
