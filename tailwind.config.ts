import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      minHeight: {
        available: '-webkit-fill-available',
      },
      screens: {
        xsm: '350px',
      },
      backgroundColor: {
        offWhite: '#FAF9F6',
        primary: {
          light: '#49698f',
          normal: '#1C4473',
          dark: '#16365c',
        },
      },
      textColor: {
        primary: '#1C4473',
        offWhite: '#FAF9F6',
      },
    },
  },
  plugins: [],
}
export default config
