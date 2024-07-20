'use client'


import React from 'react'
import Sparkles from './Sparkles'


export default function MobileLandingPage() {
    return (
        <>
            <div className='absolute h-screen w-screen 
                 bg-[linear-gradient(to_bottom,#f0f3ec,#C2DBE4_34%,#99C7D6_65%,#64A2B9_82%)] 
            dark:bg-[linear-gradient(to_bottom,#161616,#200D42_34%,#4F21A1_65%,#A46EDB_82%)]'>
            </div>

            <div className='z-10 absolute bottom-[-27%] left-1/2 -translate-x-1/2 max-[300px]:w-[180%] max-[300px]:h-[40%] max-[400px]:w-[170%] max-[400px]:h-[40%] max-[500px]:w-[160%] max-[500px]:h-[43%] w-[150%] h-[43%] rounded-[100%] bg-[#f0f3ec] dark:bg-[#161616] border border-[#bfdcea] dark:border-[#B48CDE] 
                 bg-[radial-gradient(closest-side,#f0f3ec_75%,#0f6887)] 
            dark:bg-[radial-gradient(closest-side,#161616_75%,#9560EB)]'>
            </div>
        </>
    )
}
