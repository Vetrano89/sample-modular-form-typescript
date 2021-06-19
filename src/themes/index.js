import { createMuiTheme } from '@material-ui/core';
import defaultTheme from './default';

const overrides = {
  typography: {
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.64rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '18px',
    },
    h6: {
      fontSize: '16px',
    },
    body1: {
      fontSize: '14px'
    }
  },
};

const themes = {
  default: createMuiTheme({ ...defaultTheme, ...overrides }),
};

export default themes;
