import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Source_Code_Pro } from 'next/font/google'
import './globals.css'
import { nextMetaData } from '@/meta/metaData'
import { nextViewport } from '@/meta/viewport'
import Footer from '@/components/Footer/Index'
import Header from '@/components/Header/Index'

const font = Source_Code_Pro({ subsets: ['latin'] })

export const viewport = nextViewport
export const metadata = nextMetaData

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${font.className}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Honk:MORF@29&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/caecilia-lt-pro"
          rel="stylesheet"
        />
      </head>
      <body className="kindle">
        <main className="h-svh min-h-svh w-screen bg-primary pop:bg-pop pop:bg-repeat kindle:font-kindle">
          <section className="relative z-10 mx-auto flex h-full w-full max-w-screen-2xl flex-col p-6 sm:p-10 lg:p-16">
            <Header />
            {children}
            <Footer />
          </section>
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
