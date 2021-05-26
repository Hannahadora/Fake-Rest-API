const { trueGray } = require('tailwindcss/colors');
const colors = require('tailwindcss/colors');
module.exports = {
  purge: {
    node: 'layers',
    content: ['./public/**/.html', './src/**/*.vue'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        gray: colors.trueGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
