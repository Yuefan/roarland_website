/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red:   '#CC0000',
          dark:  '#A30000',
          deep:  '#800000',
          light: '#E02020',
        },
      },
      fontFamily: {
        sans:    ['var(--font-inter)',     'sans-serif'],
        display: ['var(--font-barlow)',    'sans-serif'],
        mono:    ['var(--font-jetbrains)', 'monospace'],
      },
      height: { 17: '68px' },
    },
  },
  plugins: [],
}
