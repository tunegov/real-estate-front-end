import { lighten, darken } from 'polished';

const primaryColor = '#272A2E';
const secondaryColor = darken(0.1, primaryColor);
const accentColor = '#D0021B';
const tertiaryColor = darken(0.1, '#fff');
const lightFontColor = '#fff';

const theme = {
  primaryColor,
  secondaryColor,
  accentColor,
  tertiaryColor,
  lightFontColor,
};

export default theme;
