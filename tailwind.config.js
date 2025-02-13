/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // light theme
        'background': '#f5f5f5',
        'accent': '#e8e5e9',
        'primary': '#1e1e1e',
        'secondary': '#6a6a6a',
        // dark theme
        'dark-background': '#252525',
        'dark-accent': '#1E1D1E',
        'dark-primary': '#ffffff',
        'dark-secondary': '#848584',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(to right, #09c7fb, #11bdff, #41b0ff, #6ca2ff, #9390ff, #b381f3, #ce70e2, #e55dcb, #f450af, #fb4991, #fc4975, #f64f59)'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

