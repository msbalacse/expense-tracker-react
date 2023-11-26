/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        text: 'var(--text)',
        background: 'var(--background)',
        black: '#000000',
      },
      fontFamily: {
        f3Secuenicia: ['f3Secuenicia'],
        SFProDisplayBlack: ['SF-Pro-Display-Black'],
        SFProDisplayBold: ['SF-Pro-Display-Bold'],
        SFProDisplayHeavy: ['SF-Pro-Display-Heavy'],
        SFProDisplayLight: ['SF-Pro-Display-Light'],
        SFProDisplayMedium: ['SF-Pro-Display-Medium'],
        SFProDisplayRegular: ['SF-Pro-Display-Regular'],
        SFProDisplaySemibold: ['SF-Pro-Display-Semibold'],
        SFProDisplayThin: ['SF-Pro-Display-Thin'],
        SFProDisplayUltralight: ['SF-Pro-Display-Ultralight'],
      },
    },
  },
  plugins: [],
};
