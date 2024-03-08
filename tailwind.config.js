/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    fontSize:{
      'nav_clamp':`clamp(".5rem,2vw,1.3rem")`,
      'rsm':'10px',
    },
    gridTemplateColumns:{
      "layout":'minmax(0,10rem) minmax(0,1fr) minmax(0,1fr) minmax(0,10rem)',

    },
    extend: {

    },
  },
  plugins: [],
}

