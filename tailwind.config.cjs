/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "burnt-sienna": "#F96E46",
        "mint": "#61C9A8",
        "cream": "#FFEEDB",
        "burnt-sienna-dark": "#D24A22"
      },
      fontFamily: {
        'TiltNeon': ['TiltNeon']
      }
    },
  },
  plugins: [],
}
