'use client'

import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { AnimatedTooltip } from './ui/animated-tooltip'
import { PinContainer } from './ui/3d-pin'
import { Github, Minimize2, Maximize2 } from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from './ui/tooltip'
import { MultiStepLoader as Loader } from '@/components/ui/multi-step-loader'


interface ProjectCardProps {
    technicalStack: string
    item: {
        image: StaticImageData
        cover: StaticImageData
        title: string
        repo: string
        demo: string | null
        tags: string[]
        techStack: {
            id: number
            title: string
            logo: StaticImageData
        }[]
        mainStack: string
        info: {
            text: string
        }[]
        mininfo: string[]
    }
}

export function ProjectCard({
    technicalStack,
    item: { cover, title, repo, demo, tags, techStack, mainStack, info, mininfo }
}: ProjectCardProps) {
    const [loading, setLoading] = useState(false)

    return (
        <>
            {mainStack === technicalStack && (
                <div className='group/card flex h-[34rem] w-[32rem] flex-col items-center justify-center overflow-hidden rounded-2xl border border-black/[0.1] bg-zinc-100 shadow-[0_8px_16px_rgb(0_0_0/0.4)] transition duration-700 dark:border-white/[0.1] dark:bg-black max-[550px]:h-[32rem] max-[550px]:w-[24rem] min-[350px]:px-2 max-[550px]:px-4 max-[450px]:h-[28rem] max-[450px]:w-[19rem] max-[350px]:h-[29rem] max-[350px]:w-[16rem] lg:h-[32rem] lg:w-[24rem] xl:h-[34rem] xl:w-[32rem]'>

                    <div className='flex h-[30rem] w-[30rem] flex-col min-[450px]px-2 tracking-tight text-slate-100/50 transition duration-500 ease-in-out group-hover/card:scale-[1.03] max-[550px]:h-[28rem] max-[550px]:w-[24rem] max-[450px]:h-[26rem] max-[450px]:w-[19rem] max-[350px]:h-[26rem] max-[350px]:w-[14rem] min-[350px]:px-4 lg:h-[28rem] lg:w-[24rem] xl:h-[30rem] xl:w-[30rem]'>
                        <PinContainer href={demo || repo} title={title} cover={cover} />

                        <h3 className='!m-0 max-w-xs pb-2 pt-4 text-xl font-bold text-black dark:text-slate-100'>
                            {title}
                        </h3>
                        <div className='!m-0 !p-0 text-base font-normal max-[450px]:text-sm'>
                            <span className='text-slate-500'>{mininfo}</span>
                        </div>
                        <div className='flex items-center justify-between pt-8'>
                            <div className='flex max-[350px]:w-[50%] w-[42%] items-center justify-around'>
                                <AnimatedTooltip items={techStack} />
                            </div>
                            <div className='max-[350px]:mr-2 min-[350px]:mr-4 flex max-[350px]:w-[25%] max-[450px]:w-[20%] w-[25%] items-center justify-between min-[550px]:mr-0'>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Github
                                                className='cursor-pointer text-gray-900 hover:text-[#00eeff] dark:text-gray-500 dark:hover:text-[#00eeff] w-5 min-[550px]:w-6 h-5 min-[550px]:h-6 md:w-7 md:h-7'
                                            />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Github</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Maximize2 onClick={() => setLoading(true)}
                                                className='cursor-pointer text-gray-900 hover:text-[#00eeff] dark:text-gray-500 dark:hover:text-[#00eeff] w-5 min-[550px]:w-6 h-5 min-[550px]:h-6 md:w-7 md:h-7'
                                            />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Read More</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Loader loadingStates={info} title={title} loading={loading} duration={2000} />
                </div>
            )}
            {loading && (
                <button
                    className='fixed right-4 top-4 z-[120] text-black dark:text-white'
                    onClick={() => setLoading(false)}
                >
                    <Minimize2 className='h-7 w-7 sm:h-10 sm:w-10' />
                </button>
            )}
        </>
    )
}

// 'use client'

// import React, { useState } from 'react'
// import Image, { StaticImageData } from 'next/image'
// import { AnimatedTooltip } from './ui/animated-tooltip'
// import Link from 'next/link'
// import { PinContainer } from './ui/3d-pin'

// interface ProjectCardProps {
//     technicalStack: string
//     item: {
//         image: StaticImageData
//         cover: StaticImageData
//         title: string
//         repo: string
//         demo: string | null
//         tags: string[]
//         techStack: {
//             id: number
//             title: string
//             logo: StaticImageData
//         }[]
//         mainStack: string
//         info: string[]
//         mininfo: string[]
//     }
// }

// export function ProjectCard({
//     technicalStack,
//     item: { cover, title, repo, demo, tags, techStack, mainStack, info, mininfo }
// }: ProjectCardProps) {
//     const [transform, setTransform] = useState('translate(0%,0%) rotateZ(0deg)')

//     const onMouseEnter = () => {
//         setTransform('translate(0%,0%) rotateZ(0deg) scale(0.98)')
//     }
//     const onMouseLeave = () => {
//         setTransform('translate(0%,0%) rotateZ(0deg) scale(1)')
//     }
//     return (
//         <>
//             {mainStack === technicalStack && (
//                 <div
//                     style={{ transform: transform }}
//                     className='flex h-[35rem] w-[32rem] flex-col items-center justify-center overflow-hidden rounded-2xl border dark:border-white/[0.1] border-black/[0.1] bg-zinc-100 dark:bg-black shadow-[0_8px_16px_rgb(0_0_0/0.4)] transition duration-700'
//                     onMouseEnter={onMouseEnter}
//                     onMouseLeave={onMouseLeave}
//                 >
//                     <div className='flex h-[30rem] w-[30rem] flex-col px-4 tracking-tight text-slate-100/50'>
//                         <PinContainer href={demo || repo} title={title} cover={cover} />

//                         <h3 className='!m-0 max-w-xs py-2 text-xl font-bold text-black dark:text-slate-100'>
//                             {title}
//                         </h3>
//                         <div className='!m-0 !p-0 text-base font-normal'>
//                             <span className='text-slate-500'>{mininfo}</span>
//                         </div>
//                         <div className='flex justify-between items-center pt-8 '>
//                             <div className="flex items-center justify-around w-[42%]">
//                                 <AnimatedTooltip items={techStack} />
//                             </div>
//                             <div className='flex items-center justify-between w-[30%]'>
//                                 <Link href={repo}>
//                                     <h1 className='px-[10px] py-[2px] dark:text-white text-black rounded-md bg-gray-300 dark:bg-green-700'>Github</h1>
//                                 </Link>
//                                 <Link href={demo || repo}>
//                                     <h1 className='px-[10px] py-[2px] dark:text-white text-black rounded-md bg-gray-300 dark:bg-blue-700'>More</h1>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     )
// }
