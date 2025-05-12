/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        great: ['"Great Vibes"', "cursive"],
        mon: ['"Montserrat"', "sans-serif"],
      },
      backgroundImage: {
        mainBg: 'url("/src/assets/images/allison.png")',
        plantBg: 'url("/src/assets/images/plant.png")',
      },
      colors: {
        pri: "#D88714",
        sec: "#FAEBD5",
        ter: "#982546",
        lite: "#FCF9F7",
        gold:'#97917A',
        neu: {
          100: "#FCF9F7",
          400: "#2B1105",
        },
        bg: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
