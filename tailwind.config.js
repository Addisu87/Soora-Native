/** @type {import('tailwindcss').Config} */
const { plugin } = require('twrnc');

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './screens/**/*.{js,jsx,ts,tsx}'],
  theme: {
    theme: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
        serif: ['ui-serif', 'Georgia'],
        mono: ['ui-monospace', 'SFMono-Regular']
      }
    },
    extend: {}
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        // 😎 similar to `@apply`
        btn: `px-4 py-1 rounded-full bg-red-800 text-white`,
        'body-text': `font-serif leading-relaxed tracking-wide text-gray-800`
      });
    })
  ]
};
