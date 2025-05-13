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
        gold: "#97917A",
        neu: {
          100: "#FCF9F7",
          400: "#2B1105",
        },
        bg: "#FFFFFF",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "slide-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
          slideUp: {
            "0%": { transform: "translateY(50px)", opacity: "0" },
            "100%": { transform: "translateY(0)", opacity: "1" },
          },
        },
        animation: {
          "slide-up": "slideUp 0.6s ease-out forwards",
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
      },

      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
        slideUp: "slideUp 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
