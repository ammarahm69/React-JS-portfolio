/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl2': '1320px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

