/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blackTrans: 'rgba(0, 0, 0, 0.2)',
        blackTrans2: 'rgba(0, 0, 0, 0.5)',
        lightRed: 'rgb(255, 0, 0)',
        whiteTrans: 'rgba(255, 255, 255, 0.15)',
        darkPurp: 'rgb(16, 5, 20)',
        darkPurp2: 'rgba(34,0,78,1)', 
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
