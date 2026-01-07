/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
 
        'minha-primaria': '#ff3b30',  

        'minha-azul': {
          50: '#e0f2fe',
          100: '#bae6fd',
          200: '#7dd3fc',
          300: '#38bdf8',
          400: '#0ea5e9',
          500: '#0284c7',  
          600: '#0369a1',
          700: '#075985',
          800: '#0c4a6e',
          900: '#0e7490',
        },

        'brand-verde': '#22c55e',
        'brand-cinza': '#6b7280',
      },
    },
  },
  plugins: [],
}