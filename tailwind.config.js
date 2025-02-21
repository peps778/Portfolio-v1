/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js,jsx,ts,tsx}"], // ✅ Proper file scanning
  theme: {
    extend: {
      colors: {
        customPurple: '#756FEA',
        customSectionBG: '#EAF7F9'
      }
    }
  },
  safelist: [
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-[#756FEA]' // ✅ Hex value for custom colors
  ],
  plugins: []
};
