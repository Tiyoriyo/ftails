/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        grow: {
          '10%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        growhover: {
          to: { transform: 'scale(1.1)' },
        },
        shrink: {
          from: { transform: 'scale(1.1)' },
          to: { transform: 'scale(1)' },
        },
      },
      screens: {
        xs: '490px',
        xxl: '1500px',
        1080: '2200px',
      },
      animation: {
        grow: 'grow 0.1s ease-in-out forwards',
        shrink: 'shrink 0.2s ease-in-out forwards',
        growhover: 'growhover 0.2s ease-in-out forwards',
      },
    },
    fontFamily: {
      scribble: ['Redacted Script', 'cursive'],
    },
  },
  plugins: [],
};
