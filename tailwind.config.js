
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'lit': '320px',
      'sm': '480px',
      'md': '768px',
      'lg': '960px',
      'lg-x' : '1200px'

    },
    minWidth: {
      '100' : '100px',
      '400' : '400px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      orange: {
        light: '#f3af9d',
        DEFAULT: '#e8603c',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c3c3c3',
        light: '#e0e6ed',
        lightest: '#ffffff',
      },
      white: {

      }
    },
    extend: {
      spacing: {
        'ml-102': '-102%',
        'ml-943': '943px',
      }
    },
    fontFamily: {
      'bebas': ['"bebas Neue"', 'cursive'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
