/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sushi: {
          red: '#E53E3E',
          darkRed: '#C53030',
          black: '#1A202C',
          gold: '#D69E2E',
          bg: '#0F172A',
          card: '#1E293B',
        }
      }
    },
  },
  plugins: [],
}
