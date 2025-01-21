'use client'

import React, { useRef, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { educations } from '@/lib/constants'

export default function Education() {
  const [activeCard, setActiveCard] = useState(0)
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
    <section
      id='education'
      className='m-auto h-[90vh] max-w-[100%] sm:mt-20 md:max-w-[86%]'
    >
      <div className='mx-auto flex h-full max-w-[95%] flex-col items-center justify-evenly p-4 md:p-8'>
        <h1 className='w-full text-center text-4xl font-bold md:text-5xl'>
          My Education
        </h1>
        <motion.div
          animate={{
            backgroundColor:
              backgroundColors[activeCard % backgroundColors.length]
          }}
          className='relative flex h-[80%] justify-center space-x-10 overflow-y-auto rounded-md px-4 md:w-[90%] md:px-10'
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
                    className='my-10 flex max-w-sm flex-col gap-5 text-base text-slate-300'
                  >
                    <span>
                      {item.degree} ({item.work})
                    </span>
                    <span>Course: {item.course}</span>
                    <span>Percentage: {item.percentage}</span>
                  </motion.p>
                </div>
              ))}
              <div className='h-40' />
            </div>
          </div>
          <div className='sticky top-10 hidden h-60 w-80 flex-col items-center justify-around overflow-hidden rounded-md text-white md:flex'>
            <Image
              src={educations[activeCard].icon}
              alt='name'
              className='h-45 aspect-auto overflow-hidden object-cover'
            />
            <p>{educations[activeCard].date}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
