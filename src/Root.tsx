import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './styles';
import { AppLoading } from './pages/AppLoading';
import { Router } from './router';

const Root: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Suspense fallback={<AppLoading />}>
      <GlobalStyle />
      <Router />
    </Suspense>
  </ThemeProvider>
);

export default Root;
