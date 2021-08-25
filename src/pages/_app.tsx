import React from 'react';
import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/globals';
import light from '../styles/theme/default';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={light}>
      <Component {...pageProps} />

      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default MyApp;
