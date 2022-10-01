/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.2)",
      },
    },
  },
  plugins: [],
};
