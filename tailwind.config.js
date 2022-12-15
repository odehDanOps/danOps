/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        primary: '#0e0f33',
        secondary: '#64748b',
        'slate': {
          light: '#475569',
          DEFAULT: '#0e0f33',
          dark: '#0f172a',
        },
      },
    },
  },
  plugins: [],
}
