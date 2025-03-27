/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        earth: {
          100: '#f5f0e6',
          200: '#e6d5b8',
          300: '#c1a878',
          400: '#8b6f4e',
          500: '#5c4d3d'
        },
        sage: {
          100: '#e8ede4',
          200: '#ccd9c3',
          300: '#a3bc96',
          400: '#7a9c6c',
          500: '#567d44',
          600: '#456336'
        }
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        body: ['system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
};