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
        <meta property="og:title" content="Kyky.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/images/Standard.png" />
        <meta property="og:url" content="https://kyky.dev" />
        <meta
          property="og:description"
          content="Hi, I'm Kyky, A Software engineer"
        />
      </head>
      <body className={`${font.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
