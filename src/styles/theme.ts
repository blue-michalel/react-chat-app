const colors = {
  grey: '#4a4a4a',
  white: '#FFFFFF',
};

const font = {
  family: {
    default: "'Nunito', sans-serif",
  },
  size: {
    h1: '24px',
    h2: '18px',
    h3: '15px',
    h4: '14px',
    h5: '12px',
    body: '15px',
    paragraph: '9px',
    link: '12px',
    linkBig: '14px',
    huge: '120px',
  },
  weight: {
    normal: 400,
    medium: 600,
    bold: 700,
    bolder: 800,
  },
};

const breakpoints = {};

export const theme = {
  breakpoints,
  colors,
  font,
};

export type ThemeTypes = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTypes {}
}
