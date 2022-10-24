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
        blueInactive: '#60ABFF',
        gray: {
          DEFAULT: '#697C9A'
        },
        red: {
          DEFAULT: '#F74646'
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
        'sm': '.8125rem',
        '2xl': ['1.625rem', '2.4375rem']
      },
      boxShadow: {
        DEFAULT: "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)"
      },
      borderRadius: {
        DEFAULT: '0.625rem'
      }
    },
  },
  plugins: [],
}
