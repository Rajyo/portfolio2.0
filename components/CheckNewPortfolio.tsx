'use client'

import React from 'react'
import { Button } from './ui/button'

const CheckNewPortfolio = ({
  setCheckNewPortfolio
}: {
  setCheckNewPortfolio: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <section className='fixed z-[99] flex h-screen w-screen flex-col items-center justify-center gap-20 overflow-hidden bg-[#f0f3ec] dark:bg-[#161616]'>

      <div className='flex sm:max-w-[75%] flex-col gap-4'>
        <h1 className='text-center text-xl sm:text-3xl lg:text-4xl font-bold'>
          New Portfolio is Live 🚀
        </h1>
        <h1 className='text-center font-medium text-sm sm:text-lg lg:text-xl text-gray-700'>
          Check it out
        </h1>
      </div>

      <div className='flex flex-col gap-4 min-[400px]:flex-row min-[400px]:gap-10'>
        <Button>
          <a href='https://prajyotkhadse.com'>Yes, please</a>
        </Button>
        <Button onClick={() => setCheckNewPortfolio(false)}>
          No, thank you
        </Button>
      </div>
    </section>
  )
}

export default CheckNewPortfolio
