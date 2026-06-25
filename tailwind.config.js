/** @type {import('tailwindcss').Config} */
// Tokens extracted from the live Frederock template (fredericktemplate.framer.website).
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111113', // page background
        surface: '#1f1f21', // cards / raised sections
        surface2: '#1c1c1e',
        accent: '#ff4f22', // orange
        'accent-2': '#fa6e43',
        muted: '#9b9ba3',
        line: 'rgba(255,255,255,0.09)',
      },
      fontFamily: {
        display: ['Oswald', 'system-ui', 'sans-serif'], // condensed bold headings
        body: ['Outfit', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      maxWidth: {
        layout: '1160px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
