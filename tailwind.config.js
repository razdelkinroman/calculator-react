module.exports = {
  darkMode: 'class',
  mode: 'jit',
  purge: ['./src/**/*.tsx', './public/index.html'],
  theme: {
    boxShadow: {
      dark: '2.7px 2.7px 5px #292E3A, -2.7px -2.7px 5px #3D4454',
      'dark-inset': 'inset 2.7px 2.7px 5px #292E3A, inset -2.7px -2.7px 5px #3D4454',
      'orange-inset': 'inset 3.6px 3.6px 5px #7A3D13, inset -3.6px -3.6px 5px #FF872B',
      'gray-inset': 'inset 2.1px 2.1px 6px #3A414E, inset -2.1px -2.1px 6px #728198',
      'light-gray-inset': 'inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff',
      'light-gray': '3px 3px 6px #b8b9be, -3px -3px 6px #fff',
      active: '1.8px 1.8px 1px #171820, -1.8px -1.8px 1px #44485F',
      'active-light-inset': 'inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff',
      'active-light': '3.6px 3.6px 3px #9A9B9D, -3.6px -3.6px 3px #FFFFFF',
    },
    extend: {
      colors: {
        orange: '#C5621F',
        white: '#ffffff',
        gray: {
          700: '#2D303F',
          600: '#333947',
          500: '#566173',
          400: '#B6C1D3',
          300: '#e6e7ee',
        },
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(145deg, #2C313D, #3A4151)',
        'gradient-orange': 'linear-gradient(145deg, #944A17, #F67B27)',
        'gradient-gray': 'linear-gradient(145deg, #4A5363, #626F83)',
        'gradient-light': 'linear-gradient(145deg, #CDCFD2, #FFFFFF)',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['active'],
    },
  },
};
