/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
      red: {
        900: '#A31E1E'
      },
      green: {
        900: '#206159', //173, 50%, 25%
        500: '#2D897E', //173, 51%, 36%
        200: '#65CDC0',//173, 51%, 60%
      },
      // inherit:'#555555',
    },
    fontFamily: {
      'sans': ['Gilroy', 'ui-sans-serif', 'system-ui'],
    },
    extend: {

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}