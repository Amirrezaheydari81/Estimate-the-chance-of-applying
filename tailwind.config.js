/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
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
      red: {
        900: '#A31E1E'
      },
      green: {
        900:'rgb(32,97,89)',
        500:'#2D897E'
      },
    },
    fontFamily: {
      'sans': ['Gilroy', 'ui-sans-serif', 'system-ui'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}