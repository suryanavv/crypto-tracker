/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-dark': '#1e0b4b',
        'purple-medium': '#2a0e6b',
        'purple-light': '#3d1c8f',
        'purple-lighter': '#4e2ba8',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

