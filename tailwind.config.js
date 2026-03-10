/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'bg': '#FAF8ED',
        'brand-base': '#2D3134',
        'accent': '#F66F4D',
        'color-text': '#5B5F62',
      },
      fontFamily: {
        display: ['Sen', 'sans-serif'],
        ui: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: '20px',
      screens: {
        '2xl': '1200px',
      },
    },
  },
  plugins: [],
}

