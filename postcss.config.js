const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');
const colorEmoji = require('postcss-color-emoji');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [autoprefixer, postcssNested, colorEmoji, tailwindcss]
};
