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
    <html lang="en" className={`${font.className}`}>
      <body className="standard">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
