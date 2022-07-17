const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  plugins: [require("daisyui")],
  theme: {
    fontFamily: {
      'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
    }
  }
};
