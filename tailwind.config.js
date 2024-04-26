/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./navigation/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F1F5F9",
        primary: "#0F172A",
        secondary: "#E2E8F0",
      },
    },
    fontFamily: {
      productSansLight: ["ProductSans-light", "sans-serif"],
      productSansRegular: ["ProductSans-regular", "sans-serif"],
      productSansMedium: ["ProductSans-medium", "sans-serif"],
      productSansBold: ["ProductSans-bold", "sans-serif"],
    },
  },
  plugins: [],
};
