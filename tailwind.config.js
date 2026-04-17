/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serifDisplay: ['"DM Serif Text"', "serif"],
      },

      animation: {
        scroll: "scroll 35s linear infinite",
        "scroll-slow": "scroll 50s linear infinite",
        "scroll-reverse": "scrollReverse 35s linear infinite",
      },

      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },

        scrollReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};