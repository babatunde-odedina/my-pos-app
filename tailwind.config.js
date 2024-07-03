/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'custom-lg': ['24px', '32.68px'],
      },
      fontWeight: {
        light: 300,
      },
      letterSpacing: {
        wide: '1px',
      },
      colors: {
        customFontColor: '#1A1A1A',
        customBlue: '#20A2E1',
        hoverColor: '#0E2D4E',
        cardFontColor: '#235F9F',
        textColor: '#5B5B5B',
        btnSecColor: '#235F9F'
      },
    },
  },
  plugins: [],
};
