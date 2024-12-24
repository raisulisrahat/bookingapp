/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui:{ 
    themes: ["cmyk", "dracula", "sunset", "cupcake"],
  },
  darkMode: ['selector', '[data-theme="sunset"]']
}

