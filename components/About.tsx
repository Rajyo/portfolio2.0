'use client'

import { Crown, SendHorizonal } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import Link from 'next/link'
import Image from 'next/image'
import img from '@/public/lachlan-dempsey.jpg'
import { StickyScroll } from './ui/sticky-scroll-reveal'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { testimonials } from '@/lib/data'
import { useInView, motion } from 'framer-motion'
import { scaleAnimations, smallslideup } from '@/lib/framer'

export default function About() {
    const [timer, setTimer] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setTimer(true)
        }, 12250)
    }, [timer])

    const container = useRef(null)
    const inView = useInView(container, {
        margin: "0px 100px -50px 0px",
    })

    const aboutTitle = `Hi there,`
    const aboutMe = `About me`

    const container1 = useRef(null)
    const inView1 = useInView(container1, {
        margin: "50px 50px 50px 50px",
    })

    return (
        <section
            id='about'
            className='mx-auto h-auto max-w-[100%] border border-orange-500/0 p-2 md:max-w-[86%] lg:p-10'
        >
            <div className='w-full md:flex md:h-[160vh] md:flex-col lg:h-[140vh] lg:flex-row'>
                <div className='border border-red-500/0 lg:basis-1/2'>
                    <div className='mx-auto flex h-full w-[95%] flex-col justify-start pt-10 min-[400px]:w-[90%] md:float-end md:p-4 md:pt-20 lg:p-8'>
                        <span ref={container} className='flex flex-wrap gap-2 text-2xl font-semibold text-gray-800 dark:text-gray-50 sm:text-3xl lg:text-4xl'>
                            {aboutTitle.split(" ").map((x, index) => {
                                return (
                                    <span
                                        key={index}
                                        className="flex hide relative justify-start"
                                    >
                                        <motion.span
                                            variants={smallslideup}
                                            custom={index}
                                            initial="initial"
                                            animate={inView ? "animate" : "exit"}
                                        >
                                            {x}
                                        </motion.span>
                                    </span>
                                );
                            })}
                        </span>
                        <br />

                        <TextGenerateEffect
                            words={`I'm Prajyot, a self-taught web developer, a tech enthusiast and a product builder with a knack for tackling tough technical challenges. As a jack-of-all-trades, I can learn any technology quickly and deliver high-quality results with an eye for detail and a focus on user experience. I take pride in owning my work and always striving for excellence.`}
                        />

                        {timer && (
                            <TextGenerateEffect
                                className='pt-4'
                                words={`When I'm not exploring the latest tech trends, you'll find me indulging in my love for music or seeking out new and creative ways to solve problems.`}
                            />
                        )}

                        <span className='flex items-center gap-2 pt-6 text-lg font-bold text-[#00eeff] sm:pt-10 sm:text-xl'>
                            <SendHorizonal />
                            <Link href={'#contact'}>Send me a message</Link>
                        </span>
                    </div>
                </div>

                <div className='flex-col gap-y-5 border border-green-500/0 md:flex lg:basis-1/2 lg:self-end'>
                    <p ref={container} className='mx-auto hidden w-[90%] gap-x-2 text-xl font-semibold text-[#00eeff] lg:flex'>
                        <Crown />
                        {aboutMe.split(" ").map((x, index) => {
                            return (
                                <span
                                    key={index}
                                    className="flex hide relative justify-start"
                                >
                                    <motion.span
                                        variants={smallslideup}
                                        custom={index}
                                        initial="initial"
                                        animate={inView ? "animate" : "exit"}
                                    >
                                        {x}
                                    </motion.span>
                                </span>
                            );
                        })}
                    </p>
                    <motion.div ref={container1} variants={scaleAnimations} initial="initial" animate={inView1 ? "animate" : "exit"}>
                        <Image
                            src={img}
                            alt='skater'
                            className='m-auto my-5 aspect-auto w-[80%] self-center rounded-xl sm:w-[70%] lg:w-[90%]'
                        />
                    </motion.div>
                </div>
            </div>

            {/* <div className='m-auto h-[70vh] max-w-[100%] md:max-w-[86%]'>
                <div className='mx-auto flex h-full max-w-[95%] flex-col items-center justify-evenly'>
                    <StickyScroll />
                </div>
            </div> */}

            <div className='dark:bg-grid-white/[0.05] relative flex h-[25rem] flex-col items-center justify-center overflow-hidden rounded-md antialiased'>
                <InfiniteMovingCards
                    items={testimonials}
                    direction='right'
                    speed='slow'
                />
            </div>
        </section>
    )
}
