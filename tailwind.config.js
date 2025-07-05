// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./app.js"], // include files where you use Tailwind classes
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#221529", // ✅ MUST NOT BE EMPTY
          600: "#818697",
          500: "#9b9b9b",
          400: "#bbbcdc",
          300: "#f0f2fc",
        },
        green: "#1ab98f",
        blue: "#2b7fff",
        orange: "#ea9b75",
      },
    },
  },
  plugins: [],
};
