/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/hero.gif')",
      },
      colors: {
        blue: {
          '650': '#3056D3'
        }
      }
    },
  },
  plugins: [],
}

