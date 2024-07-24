import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import dynamic from 'next/dynamic'
import { Toaster } from '@/components/ui/toaster'
const ToggleTheme = dynamic(() => import('@/components/ToggleTheme'), {
  ssr: false
})
const Logo = dynamic(() => import('@/components/navbarSection/Logo'), {
  ssr: false
})
const Navbar = dynamic(() => import('@/components/navbarSection/Navbar'), { ssr: false })
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroller'


import { Roboto_Slab as Inter } from 'next/font/google'
const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: `Prajyot Khadse's Portfolio`,
  description: 'Portfolio website of Prajyot Khadse made with Next.js, Tailwind CSS, Three.js and Framer Motion.',
  icons: {
    icon: '/images/logo_dark.png',
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen w-screen overflow-x-hidden overflow-y-auto font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <Logo />
            <Navbar />
            <div className='fixed right-10 top-10 z-50 hidden md:flex'>
              <ToggleTheme />
            </div>
            {children}
            <Footer />
            <Toaster />
          </SmoothScroll>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
