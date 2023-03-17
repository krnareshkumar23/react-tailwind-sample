const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#1597E4 !important',
        blue: '#1597E4 !important',
        grey: '#E6E6E6 !important',
        light: '#DADEDF !important',
        textPrimary: '#212427 !important',
        textSecondary: '#7A7A7A !important',
      }
    },
  },
  variants: {},
  plugins: [],
}
