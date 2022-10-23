/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#0079FF'
        },
        gray: {
          DEFAULT: '#697C9A'
        },
        lightGray: '#F6F8FF',
        grayishBlue: '#4B6A9B',
        grayishBlack: '#2B3442',
        whitish: '#FEFEFE',
        blackish: '#141D2F',
        blackishBlue: '#1E2A47'
      },
      fontFamily: {
        'mono': ['Space Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
