'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { smallslideup } from '@/lib/framer'

export default function Footer() {
  const container = useRef(null)
  const inView = useInView(container, {
    margin: '50px 50px 50px 50px'
  })
  const leftFooter = `Website Designed and Developed by your's truly`
  const rightFooter = '©copyright 2024   Prajyot Khadse'

  return (
    <div
      className='relative mx-auto h-[75px] w-full border border-t border-gray-400 bg-[#f0f3ec] dark:border-gray-800 dark:bg-[#161616]'
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className='fixed bottom-0 flex h-[75px] w-full flex-row flex-wrap items-center justify-evenly max-[500px]:flex-col'>
        <h1
          ref={container}
          className='hidden flex-wrap gap-2 text-center leading-[0.8] md:flex md:text-lg lg:text-xl'
        >
          {leftFooter.split(' ').map((x, index) => {
            return (
              <span key={index} className='hide relative flex justify-start'>
                <motion.span
                  variants={smallslideup}
                  custom={index}
                  initial='initial'
                  animate={inView ? 'animate' : 'exit'}
                >
                  {x}
                </motion.span>
              </span>
            )
          })}
        </h1>
        <p
          ref={container}
          className='flex flex-wrap gap-2 text-center text-lg leading-[0.8] max-[400px]:text-base max-[300px]:text-sm md:text-base lg:text-lg'
        >
          {rightFooter.split(' ').map((x, index) => {
            return (
              <span key={index} className='hide relative flex justify-start'>
                <motion.span
                  variants={smallslideup}
                  custom={index}
                  initial='initial'
                  animate={inView ? 'animate' : 'exit'}
                >
                  {x}
                </motion.span>
              </span>
            )
          })}
        </p>
      </div>
    </div>
  )
}
