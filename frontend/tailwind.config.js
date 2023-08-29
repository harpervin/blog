/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-bg': '#f0f0f0', // Your desired background color
      },
    },
  },
  plugins: [],
}