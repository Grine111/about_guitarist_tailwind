/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors : {
        'primary-orange': '#F28B64',
        'primary-black': '#000000',
        'primary-gray': '#F0F0F0',
        'primary-white': '#FFFFFF',
        'primary-blue': '#5290EA',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'serif']
      }
    },
  },
  plugins: [],
}