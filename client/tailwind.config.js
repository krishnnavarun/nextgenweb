/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#e6f1fb',
          100: '#b5d4f4',
          500: '#185FA5',
          600: '#0e4a84',
          700: '#0c447c',
        },
        accent: {
          500: '#1D9E75',
          100: '#e1f5ee',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
}