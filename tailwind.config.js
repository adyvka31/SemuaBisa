/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#243c5a",
      },
    },
  },
  plugins: [require("daisyui")],

  plugins: [
    require('flowbite/plugin')
],

content: [
  "./node_modules/flowbite/**/*.js"
]
};
