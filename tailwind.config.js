/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/slices/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      primary: {
        100: '#0B0A14',
        95: '#0F0E1D',
        80: '#181635',
        70: '#29255A',
        60: '#5001FA',
        50: '#6219FF',
        40: '#423B9C',
        30: '#605AA0'
      },
      neutral: {
        100: '#FEFEFE'
      }
    },
    fontFamily: {
      sans: ['Poppins']
    }
  },
  plugins: [],
}
