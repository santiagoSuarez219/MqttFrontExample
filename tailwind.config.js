/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ADA8B6',
        secondary: '#FFEEDB',
        tertiary: '#4C3B4D',
      },
      fontFamily: {
        primary: ['Quicksand','sans-serif'],
      }
    },
  },
  plugins: [],
}

