import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pop: ['Honk'],
        kindle: ['Caecilia LT Pro'],
      },
      minHeight: {
        available: '-webkit-fill-available',
      },
      screens: {
        xsm: '350px',
      },
      backgroundImage: {
        pop: "url('/svg/circle.svg')",
        'pop-profile': "url('/svg/circleProfile.svg')",
        'pop-button': "url('/svg/circleButton.svg')",
        explosion: "url('/svg/explosion.svg')",
        'pop-pic': "url('/images/Standard.png')",
        kindle: "url('/images/StandardBnW.png')",
        standard: "url('/images/Standard.png')",
      },
      colors: {
        offWhite: '#faf9f6',
        black: '#161616',
        'accent-light': 'var(--accent-light)',
        'accent-dark': 'var(--accent-dark)',
        accent: 'var(--accent)',
        primary: 'var(--primary)',
        details: 'var(--details)',
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('pop', '.pop &')
      addVariant('std', '.standard &')
      addVariant('kindle', '.kindle &')
    }),
  ],
}
export default config
