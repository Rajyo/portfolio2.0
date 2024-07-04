'use client'

import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { AnimatedTooltip } from './ui/animated-tooltip'


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
        info: string[]
        mininfo: string[]
    }
}

export function ProjectCard({
    technicalStack,
    item: { cover, title, repo, demo, tags, techStack, mainStack, info, mininfo }
}: ProjectCardProps) {
    const [transform, setTransform] = useState('translate(0%,0%) rotateZ(0deg)')

    const onMouseEnter = () => {
        setTransform('translate(0%,0%) rotateZ(0deg) scale(0.95)')
    }
    const onMouseLeave = () => {
        setTransform('translate(0%,0%) rotateZ(0deg) scale(1)')
    }
    return (
        <>
            {mainStack === technicalStack && (
                <div
                    style={{ transform: transform }}
                    className='flex h-[35rem] w-[32rem] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.1] bg-black shadow-[0_8px_16px_rgb(0_0_0/0.4)] transition duration-700'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <div className='flex h-[30rem] w-[30rem] flex-col p-4 tracking-tight text-slate-100/50'>
                        <Image
                            src={cover}
                            alt={title}
                            className='mb-4 flex w-full flex-1 rounded-lg object-contain'
                        />

                        <h3 className='!m-0 max-w-xs !pb-2 text-xl font-bold text-slate-100'>
                            {title}
                        </h3>
                        <div className='!m-0 !p-0 text-base font-normal'>
                            <span className='text-slate-500'>{mininfo}</span>
                        </div>
                        <div className='flex justify-between pt-5'>
                            <div className="flex flex-row items-center justify-around w-[40%]">
                                <AnimatedTooltip items={techStack} />
                            </div>
                            <h1>Github</h1>
                            <h1>Youtube</h1>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

