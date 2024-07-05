'use client'
import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'

export default function Education() {
    return (
        <section className='m-auto h-screen max-w-[100%] md:max-w-[86%]'>
            <div className='mx-auto flex h-full max-w-[95%] flex-col items-center justify-around p-4 md:p-8'>
                <h1 className='font-bold text-4xl w-full text-center md:text-5xl'>My Education</h1>
                <StickyScroll />
            </div>
        </section>
    )
}
