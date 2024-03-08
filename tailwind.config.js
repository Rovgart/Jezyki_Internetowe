/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    fontSize: {
      nav_clamp: `clamp(2rem, 8vw, 6rem)`,
      logo_clamp: `clamp(1.3rem,2vw,3rem)`,
      navigation_clamp: `clamp(1rem, 8vw, 1.2rem)`,

      rsm: "10px",
    },
    fontFamily: {
      helvetica: `Helvetica`,
    },
    gridTemplateColumns: {
      layout: "minmax(0,10rem) minmax(0,1fr) minmax(0,1fr) minmax(0,10rem)",
      companies: "minmax(0,1fr) minmax(0,1fr)",
    },
    gridTemplateRows: {
      companies: "minmax(0,1fr) minmax(0,1fr)",
    },
    extend: {},
  },
  plugins: [],
};
