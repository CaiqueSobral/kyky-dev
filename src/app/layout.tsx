import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Source_Code_Pro } from 'next/font/google'
import './globals.css'
import { nextMetaData } from '@/meta/metaData'
import { nextViewport } from '@/meta/viewport'

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
      </head>
      <body className="standard">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
