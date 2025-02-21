/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,jsx,ts,tsx}"],  // Ensures Tailwind detects all files
  theme: {
    extend: {
      colors: {
        customPurple: '#756FEA',
        customSectionBG: '#EAF7F9'
      }
    }
  },
  corePlugins: {
    preflight: true, // Ensure base styles are applied
  },
  experimental: {
    optimizeUniversalDefaults: false, // Ensure all default styles are included
  },
  safelist: [
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-customPurple'
  ],
  plugins: []
};
