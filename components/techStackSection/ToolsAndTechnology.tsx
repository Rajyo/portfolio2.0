'use client'

import Image from 'next/image'
import { Tabs } from '../ui/tabs'
import { technicalStack } from '@/lib/constants'
import { Flame } from 'lucide-react'

const DummyContent = ({ tab }: { tab: string }) => {
  return (
    <>
      {technicalStack.map((el, index) => (
        <div key={index}>
          {el.title === tab && (
            <div className='mx-auto mt-8 flex w-[95%] flex-wrap justify-between gap-x-2 gap-y-4 max-[350px]:w-[100%] max-[300px]:justify-center max-[300px]:gap-x-0 md:gap-6 lg:w-[100%]'>
              {el.stack.map(tech => (
                <div
                  key={tech.name}
                  className='max-[300px]:w-25 flex w-32 items-center justify-evenly gap-2 rounded-full border border-neutral-300 bg-gray-100 px-5 py-2 font-normal text-black shadow-sm hover:scale-105 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50 max-[350px]:w-28 max-[350px]:px-2 max-[350px]:py-2 max-[300px]:px-1 max-[300px]:py-1 sm:w-40 md:w-52'
                >
                  <Image
                    alt='tech'
                    src={tech.link}
                    className='h-6 w-6 max-[350px]:h-5 max-[350px]:w-5 max-[300px]:h-4 max-[300px]:w-4 md:h-7 md:w-7'
                  />
                  <h4 className='text-center text-xs text-black dark:text-white sm:text-sm md:text-base'>
                    {tech.name}
                  </h4>
                </div>
              ))}
            </div>
          )}
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
        <div className='relative h-[30rem] w-full overflow-hidden rounded-2xl bg-neutral-50 p-2 text-xl font-bold text-black shadow-lg shadow-slate-300 dark:bg-stone-950 dark:text-white dark:shadow-neutral-800 max-[275px]:h-auto md:h-[35rem] md:p-6 md:text-4xl lg:h-[30rem] lg:p-8 xl:h-[30rem] xl:p-10'>
          <p className='w-[95%] pt-5 max-[1024px]:mx-auto lg:w-[100%]'>
            Frontend Tab
          </p>
          <DummyContent tab='Frontend' />
        </div>
      )
    },
    {
      title: 'Backend',
      value: 'backend',
      content: (
        <div className='relative h-[30rem] w-full overflow-hidden rounded-2xl bg-neutral-50 p-2 text-xl font-bold text-black shadow-lg shadow-slate-300 dark:bg-stone-950 dark:text-white dark:shadow-neutral-800 max-[275px]:h-auto md:h-[35rem] md:p-6 md:text-4xl lg:h-[30rem] lg:p-8 xl:h-[30rem] xl:p-10'>
          <p className='w-[95%] pt-5 max-[1024px]:mx-auto lg:w-[100%]'>
            Backend tab
          </p>
          <DummyContent tab='Backend' />
        </div>
      )
    },
    {
      title: 'Database and Deployment',
      value: 'databaseAndDeployment',
      content: (
        <div className='relative h-[30rem] w-full overflow-hidden rounded-2xl bg-neutral-50 p-2 text-xl font-bold text-black shadow-lg shadow-slate-300 dark:bg-stone-950 dark:text-white dark:shadow-neutral-800 max-[275px]:h-auto md:h-[35rem] md:p-6 md:text-4xl lg:h-[30rem] lg:p-8 xl:h-[30rem] xl:p-10'>
          <p className='w-[95%] pt-5 max-[1024px]:mx-auto lg:w-[100%]'>
            Database and Deployment tab
          </p>
          <DummyContent tab='Database and Deployment' />
        </div>
      )
    },
    // {
    //   title: 'Database',
    //   value: 'database',
    //   content: (
    //     <div className='relative h-[30rem] w-full overflow-hidden rounded-2xl bg-neutral-50 p-2 text-xl font-bold text-black dark:bg-stone-950 dark:text-white max-[275px]:h-auto md:h-[35rem] md:p-6 md:text-4xl lg:h-[30rem] lg:p-8 xl:h-[30rem] xl:p-10 shadow-lg shadow-slate-300 dark:shadow-neutral-800'>
    //       <p className='w-[95%] pt-5 max-[1024px]:mx-auto lg:w-[100%]'>
    //         Database tab
    //       </p>
    //       <DummyContent tab='Database' />
    //     </div>
    //   )
    // },
    // {
    //   title: 'Deployment',
    //   value: 'deployment',
    //   content: (
    //     <div className='relative h-[30rem] w-full overflow-hidden rounded-2xl bg-neutral-50 p-2 text-xl font-bold text-black dark:bg-stone-950 dark:text-white max-[275px]:h-auto md:h-[35rem] md:p-6 md:text-4xl lg:h-[30rem] lg:p-8 xl:h-[30rem] xl:p-10 shadow-lg shadow-slate-300 dark:shadow-neutral-800'>
    //       <p className='w-[95%] pt-5 max-[1024px]:mx-auto lg:w-[100%]'>
    //         Deployment tab
    //       </p>
    //       <DummyContent tab='Deployment' />
    //     </div>
    //   )
    // },
    {
      title: 'Tools',
      value: 'tools',
      content: (
        <div className='relative h-[30rem] w-full overflow-hidden rounded-2xl bg-neutral-50 p-2 text-xl font-bold text-black shadow-lg shadow-slate-300 dark:bg-stone-950 dark:text-white dark:shadow-neutral-800 max-[275px]:h-auto md:h-[35rem] md:p-6 md:text-4xl lg:h-[30rem] lg:p-8 xl:h-[30rem] xl:p-10'>
          <p className='w-[95%] pt-5 max-[1024px]:mx-auto lg:w-[100%]'>
            Tools tab
          </p>
          <DummyContent tab='Tools' />
        </div>
      )
    },
    {
      title: 'DevOps',
      value: 'devops',
      content: (
        <div className='relative h-[30rem] w-full overflow-hidden rounded-2xl bg-neutral-50 p-2 text-xl font-bold text-black shadow-lg shadow-slate-300 dark:bg-stone-950 dark:text-white dark:shadow-neutral-800 max-[275px]:h-auto md:h-[35rem] md:p-6 md:text-4xl lg:h-[30rem] lg:p-8 xl:h-[30rem] xl:p-10'>
          <p className='w-[95%] pt-5 max-[1024px]:mx-auto lg:w-[100%]'>
            DevOps tab
          </p>
          <DummyContent tab='DevOps' />
        </div>
      )
    }
  ]

  return (
    <section
      id='toolsAndTechnology'
      className='mx-auto h-[110vh] max-w-[95%] max-[300px]:h-[120vh] min-[600px]:h-[100vh] sm:h-[110vh] md:h-[120vh] lg:h-[100vh]'
    >
      <div className='mx-auto h-full w-full py-10 md:max-w-[86%] lg:pt-0'>
        <h1 className='mx-auto flex w-[95%] flex-wrap justify-center gap-2 text-center text-4xl font-bold min-[200px]:py-3 min-[400px]:py-5 sm:py-10 md:text-5xl'>
          My Tech{' '}
          <span className='flex'>
            Stack <Flame />
          </span>
        </h1>
        <div className='relative mx-auto flex h-[75%] w-[95%] flex-col self-center p-2 pt-10 [perspective:1000px] max-[300px]:p-1 md:h-[90%] md:p-4 lg:w-[100%] lg:p-6 xl:p-8'>
          <Tabs tabs={tabs} />
        </div>
      </div>
    </section>
  )
}

export default ToolsAndTechnology
