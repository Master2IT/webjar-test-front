/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      current: '#00C853',
      'white': '#ffffff',
      transparent: 'transparent',
    },
    extend: {},
  },
  plugins: [],
}
