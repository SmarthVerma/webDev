/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '89px 10px 143px 18px rgba(0,0,0,0.75) inset',
      },
    },
  },
  plugins: [],
}