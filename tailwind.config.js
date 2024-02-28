/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nanitoFont: ['Nunito Sans', 'San Serif'],
      },
      boxShadow: {
        '3xl': '0 0 10px -2px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        darkBlueM: 'hsl(209, 23%, 22%)',
        darkModeBackground: 'hsl(207, 26%, 17%)',
        lightModeText: 'hsl(200, 15%, 8%)',
        lightModeInput: 'hsl(0, 0%, 52%)',
        lightModeBackground: 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
}
