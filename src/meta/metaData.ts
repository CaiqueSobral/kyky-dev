import type { Metadata } from 'next'

export const nextMetaData: Metadata = {
  title: 'Kyky.dev',
  applicationName: 'Kyky dev',
  referrer: 'origin-when-cross-origin',
  keywords: ['software engineer', 'Kyky', 'kyky dev', 'frontend engineer'],
  description: "I'm a software engineer, and this is my website",
  authors: [{ name: 'Caique Sobral (Kyky)' }],
  creator: 'Caique Sobral (Kyky)',
  openGraph: {
    type: 'website',
    url: 'https://kyky.dev/',
    siteName: 'Kyky dev',
    title: "Hi, I'm Kyky.",
    description: "I'm a software engineer, and this is my website",
    images: ['https://kyky.dev/images/Standard.png'],
    locale: 'en_US',
  },
  twitter: {
    title: 'Kyky dev',
    description: "I'm a software engineer, and this is my website",
    creator: '@KykyLS',
    images: ['https://kyky.dev/images/Standard.png'],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
