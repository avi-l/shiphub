export const purge = ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'];
export const media = false;
export const theme = {
  extend: {
    boxShadow: {
      drop: '0 3px 6px rgba(0, 0, 0, 0.2)',
      bottom: '0 3px 6px rgba(0, 0, 0, 0.2)',
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
