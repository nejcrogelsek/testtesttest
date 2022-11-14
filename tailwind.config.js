/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-1': '#F7F8FB',
        'blue-2': '#D3D7E1',
        'blue-3': '#233869',
        black: '#1E1E1E',
        white: '#FFFFFF',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        'indie-flower': ['Indie Flower', 'cursive'],
      },
      fontSize: {
        title: '40px',
        subtitle: '18px',
        'list-title': '18px',
        'list-subtitle': '14px',
        playful: '18px',
      },
      boxShadow: {
        xs: '0 1px 0 0 rgba(211, 215, 225, 1)',
        base: '0 4px 0 0 rgba(211, 215, 225, 1)',
      },
      backgroundImage: {
        frame: "url('/images/frame.svg')",
      },
    },
  },
  plugins: [],
}
