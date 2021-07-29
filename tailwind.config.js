
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '960px'
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
    // inset: {
    //   'left' : '104%',
    //   'top-16' : '4rem',
    //   'minus-top-14' : '-3.5rem'
    // }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
