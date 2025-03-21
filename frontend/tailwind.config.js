/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-lg': {'min': '920px'}, // Custom max-width for 920px
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}