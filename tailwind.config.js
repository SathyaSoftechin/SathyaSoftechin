/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serifDisplay: ['"DM Serif Text"', "serif"],
      },
    },
  },
  plugins: [],
};
