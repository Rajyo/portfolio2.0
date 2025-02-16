'use client'

import React, { useEffect, useRef, useState } from 'react'
import { AnimatedTooltip } from '../ui/animated-tooltip'
import { PinContainer } from '../ui/3d-pin'
import { Github, Minimize2, Maximize2, Navigation } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '../ui/tooltip'
import { MultiStepLoader as Loader } from '@/components/ui/multi-step-loader'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { slideCard } from '@/lib/framer'
import Link from 'next/link'
import { cn } from '@/lib/utils'

function ProjectCard({
  inView1,
  index,
  technicalStack,
  item: { cover, title, repo, demo, techStack, mainStack, info, mininfo }
}: ProjectCardProps) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loading
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflowY = 'auto')
  }, [loading])

  var hasTouchScreen = false
  if ('maxTouchPoints' in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0
  }

  return (
    <>
      {mainStack === technicalStack && (
        <AnimatePresence mode='wait'>
          <motion.div
            variants={slideCard}
            initial='initial'
            animate={inView1 ? 'animate' : 'exit'}
            custom={index}
            viewport={{ once: true }}
            className='group/card flex h-[34rem] w-[32rem] flex-col items-center justify-center rounded-2xl border border-black/[0.1] bg-zinc-100 shadow-xl transition duration-700 hover:shadow-gray-400 dark:border-white/[0.1] dark:bg-black hover:dark:shadow-neutral-800 max-[550px]:h-[32rem] max-[550px]:w-[24rem] max-[550px]:px-4 max-[450px]:h-[28rem] max-[450px]:w-[19rem] max-[350px]:h-[29rem] max-[350px]:w-[16rem] min-[350px]:px-2 lg:h-[32rem] lg:w-[25rem] xl:h-[34rem] xl:w-[32rem] 2xl:h-[38rem] 2xl:w-[36rem]'
          >
            <div className='flex h-[30rem] w-[30rem] flex-col tracking-tight text-slate-100/50 transition duration-500 ease-in-out group-hover/card:scale-[1.03] max-[550px]:h-[28rem] max-[550px]:w-[24rem] max-[450px]:h-[26rem] max-[450px]:w-[19rem] max-[350px]:h-[26rem] max-[350px]:w-[14rem] min-[350px]:px-4 lg:h-[28rem] lg:w-[24rem] xl:h-[30rem] xl:w-[30rem] 2xl:h-[34rem] 2xl:w-[34rem]'>
              <PinContainer href={demo || repo} title={title} cover={cover} />

              <h3 className='!m-0 max-w-xs pb-2 pt-4 text-xl font-bold text-black dark:text-slate-100 2xl:pt-4 2xl:text-2xl'>
                {title}
              </h3>
              <div className='!m-0 text-base font-normal max-[450px]:text-sm 2xl:pt-4'>
                <span className='text-slate-500'>{mininfo}</span>
              </div>
              <div className='flex items-center justify-between pt-8'>
                <div className='flex w-[42%] items-center justify-around max-[350px]:w-[50%]'>
                  <AnimatedTooltip items={techStack} />
                </div>
                <div
                  className={cn(
                    'flex items-center justify-between max-[350px]:mr-2 min-[350px]:mr-4 min-[550px]:mr-0 md:w-[30%]',
                    hasTouchScreen ? 'w-[35%]' : 'w-[25%]'
                  )}
                >
                  <TooltipProvider>
                    {hasTouchScreen && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link href={demo || repo} target='_blank'>
                            <Navigation className='flex h-5 w-5 cursor-pointer text-gray-900 hover:text-[#00eeff] dark:text-gray-500 dark:hover:text-[#00eeff] min-[550px]:h-6 min-[550px]:w-6 md:hidden md:h-7 md:w-7' />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Check Live</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link href={repo} target='_blank'>
                          <Github className='h-5 w-5 cursor-pointer text-gray-900 hover:text-[#00eeff] dark:text-gray-500 dark:hover:text-[#00eeff] min-[550px]:h-6 min-[550px]:w-6 md:h-7 md:w-7' />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Maximize2
                          onClick={() => setLoading(true)}
                          className='h-5 w-5 cursor-pointer text-gray-900 hover:text-[#00eeff] dark:text-gray-500 dark:hover:text-[#00eeff] min-[550px]:h-6 min-[550px]:w-6 md:h-7 md:w-7'
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Read More</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
            <Loader
              loadingStates={info}
              title={title}
              loading={loading}
              duration={2000}
            />
          </motion.div>
        </AnimatePresence>
      )}
      {loading && (
        <button
          className='fixed right-4 top-4 z-[120] text-black dark:text-white'
          onClick={() => setLoading(false)}
        >
          <Minimize2 className='h-7 w-7 sm:h-10 sm:w-10' />
        </button>
      )}
    </>
  )
}

export default ProjectCard
