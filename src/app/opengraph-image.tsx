import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Kyky.dev'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  const sourceCode = fetch(
    new URL('./Source_Code_Pro.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      Hi, I'm Kyky.
    </div>,
    {
      ...size,
      fonts: [
        {
          name: 'Source Code Pro',
          data: await sourceCode,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  )
}
