/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // light theme
        'background': '#D4D2D2',
        'accent': '#BDBDD3',
        'primary': '#1e1e1e',
        'secondary': '#6a6a6a',
        // dark theme
        'dark-background': '#252525',
        'dark-accent': '#1E1D1E',
        'dark-primary': '#F7F3F3',
        'dark-secondary': '#848584',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(to right, #09c7fb, #11bdff, #41b0ff, #6ca2ff, #9390ff, #b381f3, #ce70e2, #e55dcb, #f450af, #fb4991, #fc4975, #f64f59)'
      },
      keyframes: {
        appear: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        appear: "appear 1s ease-in-out"
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
  darkMode: 'class'
}

