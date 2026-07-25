/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Blue / yellow theme
        royal: '#2F6FFF',
        'royal-600': '#1B54D8',
        'royal-700': '#123FAE',
        navy: '#081A3A',
        sun: '#FFD21E',
        paper: '#FFFFFF',
        ink: '#0A0A0A',
        // legacy aliases kept so stray references still resolve
        accent: '#FFD21E',
        accent2: '#2F6FFF',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        archivo: ['var(--font-archivo)', 'sans-serif'],
        display: ['var(--font-baloo)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
