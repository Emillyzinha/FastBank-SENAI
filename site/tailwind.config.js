/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'sans-serif']
      }
    },
    colors: {
      'tema': '#EDAA25',
      'temaCinza': '#D3D3D3',
    }
  },
  plugins: [],
}

