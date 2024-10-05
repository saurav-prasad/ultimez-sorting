/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inputShadow': '0px 0px 8px 3px #8db7fda1',
      }
    },
  },
  plugins: [],
}