/*** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:
      {
        'bg-current': 'currentColor',
        'red': 'rgb(203 213 225)',
      },
      borderRadius: {
        '4xl': '50px',
      },
      height: {
        'height': '4rem',
      },
    },
  },
  plugins: [],
}