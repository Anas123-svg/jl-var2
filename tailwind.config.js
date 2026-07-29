/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // ---- Palette (exact hex values from the design brief) ----
      colors: {
        'warm-white': '#FAF8F5', // background
        'near-black': '#1A1A1A', // headings / primary text
        secondary: '#666666', // muted body / captions
        'border-warm': '#E7E2DC', // card outlines
        divider: '#F0ECE6', // section separation
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'Georgia', 'serif'], // high-contrast serif
        body: ['"EB Garamond"', 'Georgia', 'serif'], // serif body
        ui: ['"Inter"', 'system-ui', 'sans-serif'], // clean sans interface
      },
      letterSpacing: {
        label: '0.3em', // section labels
        meta: '0.25em', // meta information
        wide: '0.2em', // buttons / links
        logo: '0.18em', // wordmark
        nav: '0.28em', // navigation
      },
      maxWidth: {
        content: '700px', // body text max width (from brief)
      },
      spacing: {
        'pad-x': '120px', // horizontal page padding
        'gap-lg': '120px',
        'gap-xl': '160px', // major vertical rhythm
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
