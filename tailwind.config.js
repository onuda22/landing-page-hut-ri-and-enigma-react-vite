/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'orangeCustom': '#F2541B',
      'bubble-gum': '#ff77e9',
      'blueCustom': '#162D59',
    },
  },
  plugins: [
    require('flowbite/plugin')
]
};
