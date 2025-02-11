'use client'

import dynamic from 'next/dynamic'
const Telephone3DCanvas = dynamic(
  () => import('@/components/canvas/Telephone3DCanvas'),
  {
    ssr: false
  }
)
import { ContactForm } from '@/components/contactSection/ContactForm'
import { useRef } from 'react'
import { AnimatePresence, useInView } from 'framer-motion'
import { motion } from 'framer-motion'
import { slideLeftSide, slideRightSide, smallslideup } from '@/lib/framer'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '../ui/tooltip'

const Contact = () => {
  const container = useRef(null)
  const inView = useInView(container, {
    margin: '250px 100px -50px 0px'
  })
  const contactTitle = `Let's get in Touch`

  return (
    <AnimatePresence mode='wait'>
      <div
        ref={container}
        id='contact'
        className='h-auto max-w-[100%] pb-10 pt-20 md:mx-auto md:max-w-[86%] lg:max-w-[90%] xl:max-w-[95%] xl:px-[6rem]'
      >
        <h3 className='z-0 flex flex-wrap justify-center gap-4 px-4 text-center text-4xl font-bold md:px-0 md:text-5xl xl:text-6xl'>
          {contactTitle.split(' ').map((x, index) => {
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
        </h3>

        <div className='mt-4 grid overflow-hidden md:mt-6 md:grid-cols-2'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  ref={container}
                  variants={slideLeftSide}
                  initial='initial'
                  animate={inView ? 'animate' : 'exit'}
                  className='h-[350px] max-w-[90%] hover:cursor-pointer max-[768px]:mx-auto md:my-0 md:h-[500px] md:max-w-[100%] lg:h-[650px]'
                >
                  <Telephone3DCanvas />
                </motion.div>
              </TooltipTrigger>
            </Tooltip>
          </TooltipProvider>

          <motion.div
            ref={container}
            variants={slideRightSide}
            initial='initial'
            animate={inView ? 'animate' : 'exit'}
            className='bg-black-100 flex justify-center self-center py-2 sm:p-2 md:p-4 lg:p-8'
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default Contact
