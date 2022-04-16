module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    screens: {
      'xs': '350px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      screens: {
        'xs': '350px',
        // => @media (min-width: 350px) { ... }
      },
      padding: {
        'layout': '0 5vw',
      },
      transitionProperty: {
        'visibility': 'visibility',
        'translate': 'translate',
      }

    }
  },
  plugins: []
}
