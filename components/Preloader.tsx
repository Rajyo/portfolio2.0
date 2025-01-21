'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { words } from '@/lib/data'

export default function Preloader() {
  const [index, setIndex] = useState(0)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  useEffect(() => {
    if (index == words.length - 1) return
    setTimeout(
      () => {
        setIndex(index + 1)
      },
      index == 0 ? 1000 : 150
    )
  }, [index])

  return (
    <motion.div
      variants={{
        initial: {
          top: 0
        },
        exit: {
          top: '-100vh',
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
        }
      }}
      initial='initial'
      exit='exit'
      className='fixed z-[99] flex h-screen w-screen cursor-wait items-center justify-center overflow-hidden bg-[#f0f3ec] dark:bg-[#161616]'
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            className='absolute z-[1] flex items-center text-5xl text-black dark:text-white'
            variants={{
              initial: {
                opacity: 0
              },
              enter: {
                opacity: 0.75,
                transition: { duration: 1, delay: 0.2 }
              }
            }}
            initial='initial'
            animate='enter'
          >
            <span className='mr-4 block h-2.5 w-2.5 rounded-md bg-black dark:bg-white'></span>
            {words[index]}
          </motion.p>
        </>
      )}
    </motion.div>
  )
}
