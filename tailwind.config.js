/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'page-dark': '#080808',
        'card-dark': '#121212',
        'page-light': '#F9FAFB',
        'malachite': '#0CE25E',
        'emerald': '#2EDC85',
        'mint': '#33CC99',
      },
      fontFamily: {
        'jetbrains': ['"JetBrains Mono"', 'monospace'],
        'outfit': ['"Outfit"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}

