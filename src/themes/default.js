/*
/* TODO: Ensure this theme is setup with values from Figma.  There's a SPIKE ticket in Trello to
/* figure out which of the Figma values should be set to which of these theme values.
/*
/* The Figma has a lot of different values and might not fit too well into how these themes are setup
*/

const primary = '#00A0FF';
const textPrimary = '#222222';
const textSecondary = '#767676';
const secondary = '#767676';
const warning = '#FFC260';
const success = '#3CD4A0';
const info = '#717171';

const defaultTheme = {
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    warning: {
      main: warning,
    },
    success: {
      main: success,
    },
    info: {
      main: info,
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
      hint: '#B9B9B9',
    },
    buttonLink: {
      primary: '#00A0FF',
    },
    background: {
      default: '#F6F7FF',
      light: '#F3F5FF',
    },
  },
  typography: {
    fontFamily: [
      'Roboto' // to match Figma
    ]
  },
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: '#C4C4C4',
      },
    },
  },
};

export default defaultTheme;
