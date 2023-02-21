/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Alexandria"', 'sans-serif']
      }
    },
    fontWeight: {
      'extrabold': 800,
      'black': 900
    },
    colors: {
      'primary': '#1b59ff',
      'white': '#ffffff'
    }
  },
  plugins: [],
}
