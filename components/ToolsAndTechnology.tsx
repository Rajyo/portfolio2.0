'use client'

import Image from 'next/image'
import { Tabs } from './ui/tabs'
import { technicalStack } from '@/lib/constants'

const DummyContent = ({ tab }: { tab: string }) => {
  return (
    <>
      {technicalStack.map((el, index) => (
        <div key={index} className='mt-8 flex flex-wrap justify-between gap-x-2 gap-y-4 md:gap-6'>
          {el.title === tab &&
            el.stack.map(tech => (
              <div
                key={tech.name}
                className='flex w-32 cursor-pointer items-center justify-evenly rounded-lg bg-gray-50 px-1 py-2 hover:scale-105 max-[350px]:w-28 sm:w-40 md:w-56'
              >
                <Image
                  alt='tech'
                  src={tech.link}
                  className='h-8 w-10 max-[350px]:h-6 max-[350px]:w-7 md:h-10 md:w-12'
                />
                <h4 className='text-center text-sm text-black max-[350px]:text-xs md:text-base'>
                  {tech.name}
                </h4>
              </div>
            ))}
        </div>
      ))}
    </>
  )
}

const ToolsAndTechnology = () => {
  const tabs = [
    {
      title: 'Frontend',
      value: 'frontend',
      content: (
        <div className='relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-2 text-xl font-bold text-white md:p-4 md:text-4xl lg:p-6 xl:p-10'>
          <p>Frontend Tab</p>
          <DummyContent tab='frontend' />
        </div>
      )
    },
    {
      title: 'Backend',
      value: 'backend',
      content: (
        <div className='relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-2 text-xl font-bold text-white md:p-4 md:text-4xl lg:p-6 xl:p-10'>
          <p>Backend tab</p>
          <DummyContent tab='backend' />
        </div>
      )
    },
    {
      title: 'Database',
      value: 'database',
      content: (
        <div className='relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-2 text-xl font-bold text-white md:p-4 md:text-4xl lg:p-6 xl:p-10'>
          <p>Database tab</p>
          <DummyContent tab='database' />
        </div>
      )
    },
    {
      title: 'Deployment',
      value: 'deployment',
      content: (
        <div className='relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-2 text-xl font-bold text-white md:p-4 md:text-4xl lg:p-6 xl:p-10'>
          <p>Deployment tab</p>
          <DummyContent tab='deployment' />
        </div>
      )
    },
    {
      title: 'Tools',
      value: 'tools',
      content: (
        <div className='relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-2 text-xl font-bold text-white md:p-4 md:text-4xl lg:p-6 xl:p-10'>
          <p>Tools tab</p>
          <DummyContent tab='tools' />
        </div>
      )
    }
  ]

  return (
    <section className='mx-auto h-screen max-w-[95%] md:max-w-[86%]'>
      <h1 className='text-center w-[95%] mx-auto text-5xl font-semibold'>Tech Stack</h1>
      <div className='relative flex h-[75%] w-[95%] flex-col p-2 pt-10 [perspective:1000px] md:float-end lg:float-none lg:mx-auto md:h-[90%] md:p-4 lg:p-6 xl:p-8'>
        <Tabs tabs={tabs} />
      </div>
    </section>
  )
}

export default ToolsAndTechnology
