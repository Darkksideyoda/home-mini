/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'app/**/*.{js,jsx,ts,tsx}', // Include all files in the app directory
    './App.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {}
  },
  plugins: []
};
