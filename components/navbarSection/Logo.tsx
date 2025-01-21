'use client'

import Image from 'next/image'
import Link from 'next/link'
import lightLogo from '@/public/images/logo_light.png'
import darkLogo from '@/public/images/logo_dark.png'
import { useTheme } from 'next-themes'

const Logo = () => {
  const { theme } = useTheme()
  return (
    <Link
      href={'/'}
      className='fixed left-[42px] top-10 z-[60] hidden rounded-md p-2 hover:bg-gray-50 dark:hover:bg-gray-100/10 md:flex'
    >
      {theme === 'dark' ? (
        <Image
          src={lightLogo}
          alt='logo'
          width={40}
          height={40}
          className='rounded-full'
        />
      ) : (
        <Image
          src={darkLogo}
          alt='logo'
          width={40}
          height={40}
          className='rounded-full'
        />
      )}
    </Link>
  )
}

export default Logo
