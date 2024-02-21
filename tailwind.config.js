/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#1B442A",
        secondary: "#202020",
        tertiary: "#F4B23E",
        background: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
