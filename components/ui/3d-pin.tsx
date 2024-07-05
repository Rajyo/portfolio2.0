'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'

export const PinContainer = ({
    cover,
    title,
    href,
    className,
    containerClassName
}: {
    cover: StaticImageData
    title: string
    href?: string
    className?: string
    containerClassName?: string
}) => {
    const [transform, setTransform] = useState(
        'translate(-50%,-50%) rotateX(0deg)'
    )
    const [loading, setLoading] = useState(false)

    const onMouseEnter = () => {
        setTransform('translate(-50%,-50%) rotateX(40deg) scale(0.8)')
        setLoading(true)
    }
    const onMouseLeave = () => {
        setTransform('translate(-50%,-50%) rotateX(0deg) scale(1)')
        setLoading(false)
    }

    return (
        <section
            className={cn(
                'group/pin relative z-40 h-[16.5rem] w-[28rem] self-center max-[350px]:h-[8.5rem] max-[350px]:w-[14rem] max-[450px]:h-[10.5rem] max-[450px]:w-[17rem] max-[550px]:h-[13.5rem] max-[550px]:w-[22rem] lg:h-[13.5rem] lg:w-[22rem] xl:h-[16.5rem] xl:w-[28rem]',
                containerClassName
            )}
        >
            <div
                style={{
                    perspective: '1000px',
                    transform: 'rotateX(70deg) translateZ(0deg)'
                }}
                className='relative left-1/2 top-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2'
            >
                <div
                    style={{
                        transform: transform
                    }}
                    className='absolute left-1/2 top-1/2 flex items-center justify-center overflow-hidden rounded-md border border-white/[0.1] transition duration-700 group-hover/pin:border-white/[0.2]'
                >
                    <Link
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        href={href || '/'}
                        className={cn('relative z-50 cursor-pointer', className)}
                    >
                        <Image
                            src={cover}
                            alt={title}
                            className='flex w-full flex-1 object-cover'
                        />
                    </Link>
                </div>
            </div>
            <PinPerspective title={title} href={href} loading={loading} />
        </section>
    )
}

export const PinPerspective = ({
    title,
    href,
    loading
}: {
    title?: string
    href?: string
    loading: boolean
}) => {
    return (
        <>
            {loading && (
                <motion.div className='pointer-events-none z-[60] flex h-[30rem] w-[30rem] items-center justify-center opacity-0 transition duration-500 group-hover/pin:opacity-100'>
                    <div className='inset-0 -mt-7 h-full w-full flex-none'>
                        <div className='absolute inset-x-0 top-0 flex justify-center'>
                            <a
                                href={href}
                                target={'_blank'}
                                className='relative z-10 flex items-center space-x-2 rounded-full bg-zinc-950 dark:bg-white px-4 py-0.5 ring-1 ring-white/10'
                            >
                                <span className='relative z-20 inline-block py-0.5 text-xs font-bold text-white dark:text-black'>
                                    Visit <span className='text-violet-400 dark:text-violet-800'>{title}</span>
                                </span>

                                <span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40'></span>
                            </a>
                        </div>

                        <div
                            style={{
                                perspective: '1000px',
                                transform: 'rotateX(70deg) translateZ(0)'
                            }}
                            className='absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2'
                        >
                            <>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scale: 0,
                                        x: '-50%',
                                        y: '-50%'
                                    }}
                                    animate={{
                                        opacity: [0, 1, 0.5, 0],
                                        scale: 1,

                                        z: 0
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        delay: 0
                                    }}
                                    className='absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]'
                                ></motion.div>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scale: 0,
                                        x: '-50%',
                                        y: '-50%'
                                    }}
                                    animate={{
                                        opacity: [0, 1, 0.5, 0],
                                        scale: 1,

                                        z: 0
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        delay: 2
                                    }}
                                    className='absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]'
                                ></motion.div>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scale: 0,
                                        x: '-50%',
                                        y: '-50%'
                                    }}
                                    animate={{
                                        opacity: [0, 1, 0.5, 0],
                                        scale: 1,

                                        z: 0
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        delay: 4
                                    }}
                                    className='absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]'
                                ></motion.div>
                            </>
                        </div>

                        <>
                            <motion.div className='absolute bottom-1/2 right-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-cyan-500 blur-[2px] group-hover/pin:h-40' />
                            <motion.div className='absolute bottom-1/2 right-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-cyan-500 group-hover/pin:h-40' />
                            <motion.div className='absolute bottom-1/2 right-1/2 z-40 h-[4px] w-[4px] translate-x-[1.5px] translate-y-[14px] rounded-full bg-cyan-600 blur-[3px]' />
                            <motion.div className='absolute bottom-1/2 right-1/2 z-40 h-[2px] w-[2px] translate-x-[0.5px] translate-y-[14px] rounded-full bg-cyan-300' />
                        </>
                    </div>
                </motion.div>
            )}
        </>
    )
}

