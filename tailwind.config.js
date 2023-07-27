/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {},
    maxWidth: {
      "1440" : '1440px',
    },
    maxHeight: {
      "190" : "190px",
      "1000" : "1000px",
    },
    fontFamily: {
      'body': ['Lato', 'Sans-serif']
    }
  },
  plugins: [require("daisyui")],
}

