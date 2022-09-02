module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#4F4F4F',
          200: '#888888',
          300: '#DDDDDD',
        },
        primary: {
          500: '#3B4C7A',
          400: '#5771DF',
        },
        success: '#6CAC9C',
        error: '#E46B7C',
        background: '#FBFBFB',
      },
    },
  },

  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
