'use client'

import Image from 'next/image'
import Link from 'next/link'
import will_web from '@/public/images/will_smith_b&w.png'
import will_mobile from '@/public/images/will_portrait.png'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
const StaticMobileNavbar = dynamic(
  () => import('@/components/navbarSection/StaticMobileNavbar'),
  {
    ssr: false
  }
)

export default function NotFound() {
  return (
    <section className='flex h-screen w-screen flex-col items-center justify-center text-lg sm:-ml-2.5'>
      <StaticMobileNavbar />

      <p className='absolute left-[23%] top-[70%] z-[10] text-3xl uppercase max-[500px]:hidden sm:left-[25%] sm:text-4xl md:left-[15%] md:top-[15%] lg:left-[19%] xl:left-[23%]'>
        This never happened
      </p>

      <h1 className='absolute left-[11%] top-[40%] z-[10] font-bold max-[600px]:left-[8%] max-[500px]:hidden min-[500px]:text-[120px] md:left-[14.4%] md:top-[35%] md:text-[190px] lg:left-[18%] 2xl:left-[22%] xl:text-[250px]'>
        4O4
      </h1>

      <p className='absolute top-[80%] z-[10] rounded-3xl border-4 border-white px-6 py-2 dark:bg-black/20 max-[500px]:hidden md:left-[23%] md:top-[75%] lg:left-[25%] xl:left-[27%]'>
        <Link href='/#home' className='text-2xl font-bold uppercase'>
          Take me Home
        </Link>
      </p>

      <div
        style={{
          perspective: '1000px',
          transform: 'rotateX(0deg) translateZ(0)'
        }}
        className='absolute left-[27%] top-[39%] z-[10] mt-4 -translate-x-1/2 -translate-y-1/2 md:left-[35%] md:top-[34.5%]'
      >
        <>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              x: '-50%',
              y: '-50%'
            }}
            animate={{
              opacity: [0, 1, 0.5, 0],
              scale: 1,

              z: 0
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 0
            }}
            className='absolute left-1/2 top-1/2 h-[15rem] w-[15rem] rounded-[50%] border-8 border-white bg-transparent shadow-[0_8px_16px_rgb(0_0_0/0.4)] md:h-[25rem] md:w-[25rem]'
          ></motion.div>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              x: '-50%',
              y: '-50%'
            }}
            animate={{
              opacity: [0, 1, 0.5, 0],
              scale: 1,

              z: 0
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 2
            }}
            className='absolute left-1/2 top-1/2 h-[15rem] w-[15rem] rounded-[50%] border-8 border-white bg-transparent shadow-[0_8px_16px_rgb(0_0_0/0.4)] md:h-[25rem] md:w-[25rem]'
          ></motion.div>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              x: '-50%',
              y: '-50%'
            }}
            animate={{
              opacity: [0, 1, 0.5, 0],
              scale: 1,

              z: 0
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 4
            }}
            className='absolute left-1/2 top-1/2 h-[15rem] w-[15rem] rounded-[50%] border-8 border-white bg-transparent shadow-[0_8px_16px_rgb(0_0_0/0.4)] md:h-[25rem] md:w-[25rem]'
          ></motion.div>
        </>
      </div>

      <div className='relative flex h-full w-full flex-col items-center justify-end gap-6 pb-20 min-[500px]:hidden'>
        <h1 className='z-[10] text-[70px] font-bold'>404</h1>
        <p className='z-[10] pt-3 text-2xl capitalize'>
          This never happened !!
        </p>
        <Link
          href='/'
          className='z-[10] rounded-full border-2 border-white px-4 py-2 font-bold uppercase'
        >
          Take me Home
        </Link>
      </div>

      <Image
        src={will_web}
        alt='will_smith'
        width={500}
        height={500}
        className='absolute hidden h-full w-full opacity-80 dark:opacity-40 md:flex'
      />
      <Image
        src={will_mobile}
        alt='will_smith'
        width={400}
        height={400}
        className='absolute h-full w-full opacity-80 dark:opacity-40 md:hidden'
      />
    </section>
  )
}
