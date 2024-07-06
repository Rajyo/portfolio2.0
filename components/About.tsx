"use client"

import { Crown, SendHorizonal } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import Link from 'next/link'
import Image from 'next/image'
import img from "@/public/lachlan-dempsey.jpg"

export default function About() {
    const [timer, setTimer] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setTimer(true)
        }, 12250)
    }, [timer])


    return (
        <section className="max-w-[100%] md:max-w-[86%] mx-auto h-auto md:h-[160vh] lg:h-[140vh] border border-orange-500/0 md:flex md:flex-col lg:flex-row lg:p-10 p-2">

            <div className=' lg:basis-1/2 border border-red-500/0'>
                <div className='md:p-4 lg:p-8 flex flex-col mx-auto md:float-end w-[95%] min-[400px]:w-[90%] h-full justify-start pt-10 md:pt-20'>
                    <span className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-50'>Hi there,</span><br />

                    <TextGenerateEffect words={`I'm Prajyot, a self-taught web developer, a tech enthusiast and a product builder with a knack for tackling tough technical challenges. As a jack-of-all-trades, I can learn any technology quickly and deliver high-quality results with an eye for detail and a focus on user experience. I take pride in owning my work and always striving for excellence.`} />

                    {timer && <TextGenerateEffect className='pt-4' words={`When I'm not exploring the latest tech trends, you'll find me indulging in my love for music or seeking out new and creative ways to solve problems.`}
                    />}

                    <span className='flex gap-2 pt-6 sm:pt-10 text-lg sm:text-xl text-[#00eeff] font-bold items-center'>
                        <SendHorizonal />
                        <Link href={'/contact'}>Send me a message</Link>
                    </span>
                </div>
            </div>

            <div className='lg:basis-1/2 border border-green-500/0 md:flex flex-col gap-y-5 lg:self-end'>
                <p className='w-[90%] mx-auto text-xl font-semibold text-[#00eeff] gap-x-2 hidden lg:flex'><Crown />About me</p>
                <Image src={img} alt='skater' className='w-[80%] sm:w-[70%] lg:w-[90%] self-center aspect-auto my-5 m-auto rounded-xl' />
            </div>
        </section>
    )
}
