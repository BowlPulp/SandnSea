// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'cursive'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}
