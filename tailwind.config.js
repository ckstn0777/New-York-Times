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
        primary: "#3478F6",
        secondary: "#82B0F4",

        gray: "#C4C4C4",
        "bg-gray": "#F0F1F4",

        white: {
          60: "#F2F2F2",
          90: "#FEFEFE",
          100: "#FFFFFF",
        },
        black: {
          80: "#6D6D6D",
          100: "#000000",
        },
      },
    },
  },
  plugins: [],
};
