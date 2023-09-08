/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      colors: {
        'hijau' : '#1B9C85',
        'biru-biasa' : '#94cceb',
        'biru' : '#a4d2ec',
        'coklat' : '#F9E0BB',
        'biru-laut' : '#40F8FF'
      },
      screens:{
        '2xl' : '1320px',
      },
    },
    fontFamily: {
      'monserrat' :['Montserrat', 'sans-serif'],
      'slab': ['Zilla Slab', 'serif']
    },
  },
  plugins: [],
}

