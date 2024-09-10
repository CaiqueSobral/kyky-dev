import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kyky.dev',
    short_name: 'Kyky.dev',
    description:
      "Hello, I'm Kyky, a software engineer. This is my cliche website",
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF9F6',
    theme_color: '#1C4473',
    icons: [
      {
        src: '/images/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/Standard.png',
        sizes: '1024x1024',
        type: 'image/png',
      },
    ],
  }
}
