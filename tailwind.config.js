/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      width: {
        "635/1000": "63.5%",
        "7/10": "70%",
      },
    },
  },
  plugins: [],
};
