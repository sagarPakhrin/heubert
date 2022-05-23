const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, './**/*.{js,ts,jsx,tsx}'),
    join(__dirname, '../../libs/ui/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
