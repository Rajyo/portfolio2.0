'use client'

import { useInView, useScroll, motion } from 'framer-motion'
import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
const Card = dynamic(() => import('./Card'), {
  ssr: false
})
import { technicalStack } from '@/lib/constants'
import { useTheme } from 'next-themes'
import { smallslideup } from '@/lib/framer'

export default function TechStack() {
  const container = useRef(null)
  const { theme } = useTheme()

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ['start start', 'end end']
  })

  const container1 = useRef(null)
  const inView = useInView(container1, {
    margin: '0px 100px -50px 0px'
  })
  const techStackTitle = `My Tech Stack`

  return (
    <div
      id='toolsAndTechnology'
      className='relative mx-auto mb-[10vh] w-[95%] max-[300px]:w-[98%] md:max-w-[86%]'
    >
      <h1
        ref={container1}
        className='sticky top-10 mx-auto flex h-[15vh] w-[95%] flex-wrap justify-center gap-2 text-center text-4xl font-bold min-[200px]:py-3 min-[400px]:py-5 sm:py-5 md:text-5xl 2xl:text-6xl'
      >
        {techStackTitle.split(' ').map((x, index) => {
          return (
            <span key={index} className='hide relative flex justify-start'>
              <motion.span
                variants={smallslideup}
                initial='initial'
                animate={inView ? 'animate' : 'exit'}
              >
                {x}
              </motion.span>
            </span>
          )
        })}
      </h1>
      {technicalStack.map((project, i) => {
        const targetScale = 1 - (technicalStack.length - i) * 0.05

        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.15, 1]}
            targetScale={targetScale}
            theme={theme}
          />
        )
      })}
    </div>
  )
}
