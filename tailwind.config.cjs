/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './src/**/*.{html,js,svelte}'],
  theme: {
    extend: {
      colors: {
        strong_cyan: 'hsl(172, 67%, 45%)',
        very_dark_cyan: 'hsl(183, 100%, 15%)',
        dark_grayish_cyan: 'hsl(186, 14%, 43%)',
        grayish_cyan: 'hsl(184, 14%, 56%)',
        light_grayish_cyan: 'hsl(185, 41%, 84%)',
        very_light_grayish_cyan: 'hsl(189, 41%, 97%)',
      },
      fontFamily: {
        space_mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
