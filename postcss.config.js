module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-font-magician')({
      variants: {
        Quicksand: {
          300: [],
          400: [],
          700: [],
        },
      },
      foundries: ['google'],
    }),
  ],
}
