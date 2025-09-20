/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        borderReveal: {
          "0%": { borderWidth: "0 0 0 0" },
          "25%": { borderWidth: "0 0 2px 0" },
          "50%": { borderWidth: "0 2px 2px 0" },
          "75%": { borderWidth: "2px 2px 2px 0" },
          "100%": { borderWidth: "2px 2px 2px 2px" },
        },
      },
      animation: {
        borderReveal: "borderReveal 0.8s linear forwards",
      },
    },
  },
  plugins: [],
}
