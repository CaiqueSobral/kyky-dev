import { Analytics } from '@vercel/analytics/react'
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
    <html lang="en">
      <head>
        <meta property="og:site_name" content="Kyky.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hi, I'm Kyky" />
        <meta
          property="og:description"
          content="I'm a software engineer, and this is my website"
        />
        <meta
          property="og:image"
          content="https://kyky.dev/images/Standard.png"
        />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="640" />
        <meta property="og:url" content="https://kyky.dev" />
      </head>
      <body className={`${font.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
