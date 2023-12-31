/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-dark": "#652CD1",
        purple: "#845EEE",
        black: "#121826",
        white: "#E5E7EB",
        tan: "#A1A1A9",
        "gray-dark": "#212936",
        gray: "#394150",
        "gray-light": "#4D5562",
      },
    },
  },
  plugins: [],
};
