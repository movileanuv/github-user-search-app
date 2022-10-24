/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        blackishBlue: '#1E2A47',
        blacky: 'rgb(var(--blacky) / <alpha-value>)'
      },
      fontFamily: {
        'mono': ['Space Mono', 'monospace']
      },
      spacing: {
        '6.5': '1.625rem',
        '7.5': '1.875rem'
      },
      fontSize: {
        '2xl': ['1.625rem', '2.4375rem']
      }
    },
  },
  plugins: [],
}
