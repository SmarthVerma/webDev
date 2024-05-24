/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      spacing: {
        13: "2.85rem"
      },
      fontSize: {
        '10xl': '15px'
      },
      screens: {
        // Custom breakpoints
        'xxs': '320px',
        'xs': '480px',
        '3xl': '1600px',
      }
    },
  },
  plugins: [],
}