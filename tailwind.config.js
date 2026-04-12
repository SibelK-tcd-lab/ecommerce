/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#23A6F0",
        "dark-blue": "#252B42",
        "gray-text": "#737373",
      },
    },
  },
  // Eğer bazı sınıflar hala kayboluyorsa buraya ekleyebilirsin
  safelist: [
    'whitespace-nowrap',
    'min-w-fit'
  ],
  plugins: [],
}