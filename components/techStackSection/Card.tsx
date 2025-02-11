'use client'

import Image, { StaticImageData } from 'next/image'
import { useTransform, motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { scaleAnimations } from '@/lib/framer'

const Card = ({
  i,
  title,
  stack,
  color,
  colorr,
  progress,
  range,
  targetScale,
  theme
}: any) => {
  const scale = useTransform(progress, range, [1, targetScale])
  const [loading, setLoading] = useState(false)

  return (
    <div className='sticky top-[20vh] flex items-center justify-center'>
      <motion.div
        className='relative flex h-[32rem] w-[95%] sm:w-[100%] origin-top flex-col rounded-2xl p-2 shadow-lg shadow-slate-300 dark:shadow-neutral-800 sm:p-4 md:h-[36rem] md:p-6 lg:h-[32rem] 2xl:h-[36rem] 2xl:p-8'
        style={{
          backgroundColor: theme === 'light' ? colorr : color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`
        }}
      >
        <h1 className='mx-auto mt-2 w-[95%] py-2 text-xl font-bold md:w-[100%] md:text-4xl 2xl:text-5xl lg:mt-6'>
          {title}
        </h1>
        <div className='mx-auto mt-4 flex w-[95%] flex-wrap justify-between gap-x-2 gap-y-4 max-[350px]:w-[100%] max-[300px]:gap-x-0 md:gap-6 lg:mt-8 lg:w-[100%]'>
          <AnimatePresence mode='sync'>
            {stack.map((tech: { name: string; link: StaticImageData }) => (
              <motion.div
                onViewportEnter={() => setLoading(true)}
                onViewportLeave={() => setLoading(false)}
                variants={scaleAnimations}
                initial='initial'
                animate={loading ? 'animate' : 'exit'}
                key={tech.name}
                className='max-[300px]:w-25 flex w-32 items-center justify-evenly gap-2 rounded-full border border-neutral-300 bg-gray-100 px-5 py-2 font-normal text-black shadow-sm hover:scale-105 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50 max-[350px]:w-28 max-[350px]:px-2 max-[350px]:py-2 max-[300px]:px-1 max-[300px]:py-1 sm:w-40 md:w-52'
              >
                <Image
                  alt='tech'
                  src={tech.link}
                  className='h-6 w-6 max-[350px]:h-5 max-[350px]:w-5 max-[300px]:h-4 max-[300px]:w-4 md:h-7 md:w-7'
                />
                <h4 className='text-center text-xs text-black dark:text-white sm:text-sm md:text-base 2xl:text-lg'>
                  {tech.name}
                </h4>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}

export default Card
