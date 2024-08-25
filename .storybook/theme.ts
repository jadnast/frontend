import { create } from '@storybook/theming/create';

const theme = create({
  base: 'dark',
  // Typography
  fontBase: '"Jost", sans-serif',

  brandTitle: 'Hikasami',
  brandUrl: '/',
  brandImage: 'https://cdn.hikasami.com/logo.png',
  brandTarget: '_self',

  //
  colorPrimary: '#EB0052',
  colorSecondary: '#6C0026',

  // UI
  appBg: '#0D0D0D',
  appContentBg: '#121212',
  appPreviewBg: '#121212',
  appBorderColor: '#1C1C1C',
  appBorderRadius: 6,

  // Text colors
  textColor: '#FFFFFF',
  textInverseColor: '#FFFFFF',

  // Toolbar default and active colors
  barTextColor: '#FFFFFF',
  barSelectedColor: '#EB0052',
  barHoverColor: '#EB0052',
  barBg: '#121212',

  // Form colors
  inputBg: '#121212',
  inputBorder: '#1C1C1C',
  inputTextColor: '#FFFFFF',
  inputBorderRadius: 6,
});

export default theme;