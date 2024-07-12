import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import dynamic from 'next/dynamic'
import { Toaster } from '@/components/ui/toaster'
import { Logo } from '@/components/ToggleTheme'
const ToggleTheme = dynamic(() => import('@/components/ToggleTheme'), {
  ssr: false
})
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false })
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroller'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Prajyot Khadse',
  description: 'Next.js Portfolio of Prajyot Khadse'
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
          'min-h-screen w-screen overflow-x-hidden font-sans antialiased',
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
