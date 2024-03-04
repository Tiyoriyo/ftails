/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: '#F7F1EB',
        sand: '#DFD9C4',
        foundation: '#D1B195',
        blush: '#C7998C',
        black: '#292929',
      },
      keyframes: {
        grow: {
          '10%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        growhover: {
          to: { transform: 'scale(1.05)' },
        },
        shrink: {
          from: { transform: 'scale(1.1)' },
          to: { transform: 'scale(1)' },
        },
        load: {
          from: {
            transform: 'scale(0)',
            opacity: 0,
          },
          to: {
            transform: 'scale(1)',
            opacity: 1,
          },
        },
        breathing: {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.1)',
          },

        },
        hop: {
          '0%, 100%': {
            transform: 'translateY(0) rotate(0)',
          },
          '25%, 75%': {
            transform: 'rotate(5deg)',
          },
          '50%': {
            transform: 'translateY(-25%) rotate(-5deg)',
          },
        },
        fadein: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadein50: {
          from: { opacity: 0 },
          to: { opacity: 0.5 },
        },
        fadein90: {
          from: { opacity: 0 },
          to: { opacity: 0.9 },
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
        load: 'load 0.3s ease-in-out forwards',
        breathing: 'breathing 3s ease-in-out infinite',
        hop: 'hop 0.5s ease-in-out forwards',
        fadein: 'fadein 0.5s ease-in-out forwards',
        fadein50: 'fadein50 0.5s ease-in-out forwards',
        fadein90: 'fadein90 0.5s ease-in-out forwards',
      },
      transitionProperty: {
        height: 'max-height',
      },
    },
    fontFamily: {
      scribble: ['Redacted Script', 'cursive'],
      sulphur: ['Sulphur Point', 'sans-serif'],
      thasadith: ['Thasadith', 'sans-serif'],
      meow: ['Meow Script', 'cursive'],
      animal: ['Just Me Again Down Here', 'cursive'],
    },
  },
  plugins: [],
};
