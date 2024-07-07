'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { educations } from '@/lib/constants'


export const StickyScroll = () => {
  const [activeCard, setActiveCard] = React.useState(0)
  const ref = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ['start start', 'end start']
  })

  const cardLength = educations.length

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    const cardsBreakpoints = educations.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint)
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index
        }
        return acc
      },
      0
    )
    setActiveCard(closestBreakpointIndex)
  })

  const backgroundColors = [
    'var(--slate-900)',
    'var(--black)',
    'var(--neutral-900)',
    'var(--cyan-600)'
  ]

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length]
      }}
      className='relative flex md:w-[90%] h-[90%] justify-center space-x-10 overflow-y-auto rounded-md px-4 md:px-10'
      ref={ref}
    >
      <div className='div relative flex items-start md:px-4'>
        <div className='max-w-2xl'>
          {educations.map((item, index) => (
            <div key={item.name + index} className='py-10 md:py-20'>
              <motion.h2
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3
                }}
                className='text-2xl font-bold text-slate-100'
              >
                {item.name}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3
                }}
                className='text-base my-10 max-w-sm text-slate-300 flex flex-col gap-5'
              >
                <span>
                  {item.degree} ({item.work})
                </span>
                <span>
                  Course: {item.course}
                </span>
                <span>
                  Percentage: {item.percentage}
                </span>
              </motion.p>
            </div>
          ))}
          <div className='h-40' />
        </div>
      </div>
      <div className='sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md md:flex flex-col justify-around items-center text-white' >

        <Image src={educations[activeCard].icon} alt="name" className='h-45 aspect-auto object-cover overflow-hidden' />
        <p>{educations[activeCard].date}</p>

      </div>
    </motion.div>
  )
}
