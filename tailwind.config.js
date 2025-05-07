/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        great: ['"Great Vibes"', "cursive"],
        montserrat: ['"Montserrat"', "sans-serif"],
      },
      colors: {
        pri: "#D88714",
        sec: "#FAEBD5",
        ter: "#982546",
        neu: {
          400: "#2B1105",
        },
        bg: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
