export const purge = ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'];
export const media = false;
export const theme = {
  container: {
    paddingRight: {
      DEFAULT: '1rem',
      sm: '2rem',
      lg: '4rem',
      xl: '1.5rem',
      '2xl': '6rem',
    },
  },
  extend: {
    boxShadow: {
      drop: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
      // drop: '0 1px 16px rgba(0, 0, 0, 0.4)',
      bottom: '0 3px 6px rgba(0, 0, 0, 0.2)',
      input: '0 2px 6px rgba(0, 0, 0, 0.2)',
    },

    colors: {
      customOrange: '#E84E0F',
      customGray: '#585454',
    },
  },
};
export const variants = {
  extend: {},
};
export const plugins = [];
