/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        1200: "1200px",
      },
      zIndex: {
        "-10": "-10",
        100: "100",
        1000: "1000",
      },
    },
  },
  plugins: [],
};
