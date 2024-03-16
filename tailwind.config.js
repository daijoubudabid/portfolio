/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: "1200px",
        lg: "992px",
        md: "768px",
        sm: "576px",
      },
      backgroundColor: {
        primary: "#72B626",
        light: "#eee",
        dark: "#252525",
        light_dark: "#444",
        dark_2: "#2b2a2a",
        default: "#111",
      },
      colors: {
        primary: "#72B626",
        default: "#616262",
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        modal: "0 0 0 100svh rgba(0, 0, 0, 0.74)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
