/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#252525',
        'accent': '#1E1D1E',
        'primary': '#ffffff',
        'secondary': '#848584',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(to right top, #09c7fb, #11bdff, #41b0ff, #6ca2ff, #9390ff, #b381f3, #ce70e2, #e55dcb, #f450af, #fb4991, #fc4975, #f64f59)'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

