'use client'

import { LinkPreview } from '@/components/ui/link-preview'
import { TypeAnimation } from 'react-type-animation'
import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic'
const Light3DCanvas = dynamic(() => import('./canvas/Light3DCanvas'), {
    ssr: false
})
const Dark3DCanvas = dynamic(() => import('./canvas/Dark3DCanvas'), {
    ssr: false
})
const MobileLandingPage = dynamic(() => import('./MobileLandingPage'), {
    ssr: false
})
import Sparkles from './Sparkles'
import { StaticMobileNavbar } from './Navbar'



export default function LandingPage() {
    const { theme } = useTheme()

    return (
        <section
            id='home'
            className='relative w-full bg-[#f2f2f2] dark:bg-[#111111]'
        >
            <StaticMobileNavbar />

            <div className='inset-0 top-0 h-screen w-full'>
                <div className='absolute mx-auto hidden md:flex h-screen w-full max-w-[100%] md:max-w-[86%]'>
                    <div className='m-auto flex h-[35%] w-[90%] flex-col items-center max-[400px]:w-[95%] sm:h-[45%] sm:w-[75%] md:w-[69%] md:items-start xl:h-[40%]'>
                        <h1 className='z-30 flex flex-wrap gap-7 py-2 pl-[6px] text-2xl font-semibold uppercase tracking-tight text-gray-800 dark:text-gray-400 max-[400px]:text-xl md:text-gray-600'>
                            <span>p r a j y o t</span> <span>k h a d s e</span>
                        </h1>

                        <TypeAnimation
                            sequence={[
                                'Full Stack Developer',
                                1000,
                                'Frontend Developer',
                                1000,
                                'Backend Developer',
                                1000,
                                'Mobile App Developer',
                                1000,
                                'Devops Engineer',
                                1000
                            ]}
                            wrapper='span'
                            speed={50}
                            className='z-30 inline-block h-full w-full py-2 text-center text-[3em] font-bold sm:text-[4em] md:text-start lg:text-[5em]'
                            repeat={Infinity}
                        />

                        <LinkPreview
                            url='https://drive.google.com/file/d/1zcbqPT8vW6J5HXpyDbGjqtOfmwLI_bGx/view?usp=drive_link'
                            className='z-50 h-16 w-36 self-center font-bold md:self-auto md:pl-1'
                        >
                            <button className='inline-flex h-full w-full animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
                                Resume
                            </button>
                        </LinkPreview>
                    </div>
                </div>

                {/* Mobile */}
                <div className='absolute z-10 h-screen w-screen md:hidden'>
                    {theme === 'light' ? <MobileLandingPage theme={"light"} /> : <MobileLandingPage theme={"dark"} />}
                </div>

                {/* Web */}
                <Sparkles />

                <div className='absolute -top-[7rem] z-20 max-[767px]:hidden md:-right-[40rem] xl:-right-[50rem]'>
                    {theme === 'light' ? <Light3DCanvas /> : <Dark3DCanvas />}
                </div>
            </div>
        </section>
    )
}
