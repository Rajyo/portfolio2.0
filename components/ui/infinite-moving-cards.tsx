'use client'

import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className
}: {
  items: {
    name: string
    course: string
    major: string
    percentage: string
    year: string
  }[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  useEffect(() => {
    addAnimation()
  }, [])
  const [start, setStart] = useState(false)
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        )
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        )
      }
    }
  }
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s')
      }
    }
  }
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-hidden shadow-xl shadow-gray-200 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] dark:shadow-slate-800',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, idx) => (
          <li
            className='relative w-[350px] max-w-full flex-shrink-0 rounded-2xl border border-b-0 border-slate-300 bg-gray-300 px-8 py-6 dark:border-slate-900 dark:bg-zinc-800 max-[400px]:w-[300px] max-[400px]:px-6 md:w-[450px] md:py-8'
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden='true'
                className='user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]'
              ></div>
              <div className='relative z-20 h-12 text-base font-bold leading-[1.6] text-gray-900 dark:text-gray-100 max-[400px]:text-sm'>
                {item.name}
              </div>
              <div className='relative z-20 mt-6 flex flex-row items-center'>
                <span className='flex flex-col gap-1'>
                  <span className='text-sm font-semibold leading-[1.6] text-gray-600 dark:text-gray-400 max-[400px]:text-xs'>
                    {item.course}
                  </span>
                  <span className='text-sm font-normal leading-[1.6] text-gray-600 dark:text-gray-400 max-[400px]:text-xs'>
                    {item.major}
                  </span>
                  <span className='text-sm font-normal leading-[1.6] text-gray-600 dark:text-gray-400 max-[400px]:text-xs'>
                    {item.percentage} ({item.year})
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  )
}
