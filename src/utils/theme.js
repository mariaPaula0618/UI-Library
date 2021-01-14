import {size} from './units'

const white = '#fff';
const black = '#111';

const palette = {
  common: {
    black,
    white,
  },
  primary: {
    main: '#0070F3',
    light: '#146DD6',
    dark: '#303f9f',
    contrastText: white,
  },
  secondary: {
    light: '#ff4081',
    main: '#f50057',
    dark: '#c51162',
    contrastText: white
  },
  error: {
    main: '#A51C30',
    light: '#A7333F',
    dark: '#d32f2f',
    contrastText: white,
  },
  sucess: {
    main: '#81c784',
    light: '#4caf50',
    dark: '388e3c',
    contrastText: white,
  },
  grey: {
    100: '#EAEAEA',
    200: '#C9C5C5',
    300: '#888',
    400: '#666',
  },
};

const shadows = {
  0: 'none',
  1: '0px 5px 10px rgba(0, 0, 0, 0.12)',
  2: '0px 8px 30px rgba(0, 0, 0, 0.24)',
};

const typography = {
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
};

const shape = {
  borderRadius: size['small']
};

export const theme = {
  palette,
  shadows,
  typography,
  shape,
};
