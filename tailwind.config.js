/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azul: '#02274F',
        branco: '#F4F4F4',
        branco_fundo: '#F1F5F9'
      }
    },
  },
  plugins: [],
}

