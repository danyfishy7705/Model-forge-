/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Orbitron"', 'sans-serif'],
        'body': ['"Roboto"', 'sans-serif']
      }
    },
  },
  plugins: [],
}