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
          to: { transform: 'scale(1.1)' },
        },
        shrink: {
          from: { transform: 'scale(1.1)' },
          to: { transform: 'scale(1)' },
        },
      },
      animation: {
        grow: 'grow 0.2s ease-in-out forwards',
        shrink: 'shrink 0.2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
