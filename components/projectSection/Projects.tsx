'use client'

import React, { useRef, useState } from 'react'
import { project } from '@/lib/constants'
import { ProjectDropdown } from './ProjectDropdown'
import { AnimatePresence, useInView } from 'framer-motion'
import { motion } from 'framer-motion'
import { slideLeftSide, slideRightSide } from '@/lib/framer'
import dynamic from 'next/dynamic'
const ProjectCard = dynamic(() => import('./ProjectCard'), {
  ssr: false
})

export default function Projects() {
  const [techStack, setTechStack] = useState('reactExpress')

  const container = useRef(null)
  const inView = useInView(container, {
    margin: '0px 100px -50px 0px'
  })
  const projectTitle = `My Projects`

  const container1 = useRef(null)
  const inView1 = useInView(container1, {
    margin: '50px 100px 50px 50px'
  })

  const handleTechStack = (stack: string) => {
    setTechStack(stack)
  }

  return (
    <AnimatePresence mode='wait'>
      <section
        id='projects'
        className='m-auto h-auto max-w-[100%] sm:py-10 md:max-w-[86%]'
      >
        <div
          ref={container1}
          className='mx-auto flex h-full max-w-[95%] flex-col items-center justify-around p-4'
        >
          <div className='flex w-full flex-row items-center justify-between p-10 max-[550px]:flex-col max-[550px]:gap-y-5'>
            <h1
              ref={container}
              className='mb-0 flex flex-wrap justify-center gap-2 text-center text-4xl font-bold max-[575px]:mb-4 md:text-5xl 2xl:text-6xl'
            >
              {projectTitle.split(' ').map((x, index) => {
                return (
                  <span
                    key={index}
                    className='hide relative flex justify-start'
                  >
                    <motion.span
                      variants={slideLeftSide}
                      initial='initial'
                      custom={index}
                      animate={inView ? 'animate' : 'exit'}
                    >
                      {x}
                    </motion.span>
                  </span>
                )
              })}
            </h1>
            <motion.div
              ref={container}
              variants={slideRightSide}
              initial='initial'
              animate={inView ? 'animate' : 'exit'}
            >
              <ProjectDropdown
                techStack={techStack}
                handleTechStack={handleTechStack}
              />
            </motion.div>
          </div>
          <motion.div className='flex w-full flex-wrap justify-around gap-5 lg:grid lg:grid-cols-2 lg:justify-between 2xl:flex 2xl:justify-around'>
            {project.map((item, index) => (
              <ProjectCard
                item={item}
                technicalStack={techStack}
                key={index}
                index={index}
                inView1={inView1}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  )
}
