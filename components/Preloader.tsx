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

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`


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
            className="h-screen w-screen flex items-center justify-center fixed z-[99] bg-[#141516] overflow-hidden cursor-wait"
        >
            {dimension.width > 0 && (
                <>
                    <motion.p
                        className='flex text-white items-center absolute z-[1] text-5xl'
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
                        <span className='block w-2.5 h-2.5 bg-white rounded-md'></span>
                        {words[index]}
                    </motion.p>
                    <svg className={`absolute top-0 w-[100%] calc(100% + 300px)`}>
                        <motion.path style={{ fill: "#141516" }}
                            variants={{
                                initial: {
                                    d: initialPath,
                                    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
                                },
                                exit: {
                                    d: targetPath,
                                    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
                                }
                            }}
                            initial='initial'
                            exit='exit'
                        ></motion.path>
                    </svg>
                </>
            )}
        </motion.div>
    )
}
