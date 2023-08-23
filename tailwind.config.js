/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      colors: {
        'hijau' : '#1B9C85',
        'biru' : '#3AA6B9',
      },
      screens:{
        '2xl' : '1320px',
      },
    },
    fontFamily: {
      'slab': ['Zilla Slab', 'serif'],
    },
  },
  plugins: [],
}

