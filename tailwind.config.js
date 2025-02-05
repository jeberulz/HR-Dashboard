/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-manrope)'],
      },
      colors: {
        primary: '#2865EC',
        secondary: '#F8F9FD',
        textPrimary: '#000000',
        textSecondary: '#8C8C8C',
      },
    },
  },
  plugins: [],
} 