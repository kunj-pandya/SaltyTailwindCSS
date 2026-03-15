/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        bg: "#FAF8ED",
        brand: "#2D3134",
        accent: "#F66F4D",
        text: "#5B5F62",
        white: "#ffffff",
        nav: "#2E476B"
      },

      fontFamily: {
        display: ["Sen", "sans-serif"],
        ui: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },

      maxWidth: {
        container: "1200px"
      }
    }
  },
  plugins: []
}