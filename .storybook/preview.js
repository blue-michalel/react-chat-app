import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { i18next } from '../src/services/i18n';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '../src/styles';
import { BrowserRouter } from 'react-router-dom';

export const decorators = [
  (Story) => (
    <I18nextProvider i18n={i18next}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </ThemeProvider>
    </I18nextProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
  },
};
