import React from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from '../src/styles/globals'
import light from '../src/styles/theme/default'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={light}>
      {Story()}
      <GlobalStyle />
    </ThemeProvider>
  ),
];