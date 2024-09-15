/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'modal-bg': "url('/src/assets/img/mid-autumn-festival-background.jpg')",
        'modal-bg-love': "url('/src/assets/img/background_love.jpg')",
      },
    },
  },
  plugins: [],
}