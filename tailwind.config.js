/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#75AF42',
        secondary: '#120A56',
      },
      fontFamily: {
        primary: ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
        secondary: ['Raleway', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};