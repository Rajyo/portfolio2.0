'use client'

import { motion } from 'framer-motion'
import React from 'react'
import AuroraHero from './AuroraHero'


export default function MobileLandingPage({ theme }: { theme: string }) {

    return (
        <>
            <AuroraHero />
        </>
    )
}


// 'use client'

// import { motion, useScroll, useTransform } from 'framer-motion'
// import React, { useRef } from 'react'


// export default function MobileLandingPage({ theme }: { theme: string }) {
//     const ref = useRef(null)
//     const { scrollYProgress } = useScroll({
//         target: ref,
//         offset: ['start start', 'end start']
//     })
//     const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

//     return (
//         <div
//             ref={ref}
//             className='relative grid h-screen w-full place-items-center overflow-hidden'
//         >
//             <motion.div
//                 className='absolute inset-0 z-0'
//                 style={{
//                     backgroundImage:
//                         theme === 'light'
//                             ? `url(/parallax/light-full.jpg)`
//                             : `url(/parallax/dark-full.jpg)`,
//                     backgroundPosition: 'bottom',
//                     backgroundSize: 'cover',
//                     y: backgroundY
//                 }}
//             />
//             <div
//                 className='absolute inset-0 z-20'
//                 style={{
//                     backgroundImage:
//                         theme === 'light'
//                             ? `url(/parallax/light-half.png)`
//                             : `url(/parallax/dark-half.png)`,
//                     backgroundPosition: 'bottom',
//                     backgroundSize: 'cover'
//                 }}
//             />
//         </div>
//     )
// }
