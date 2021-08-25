import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    palette: {
      primary: {
        light: string;
        main: string;
        dark: string;
        text: string;
      };
      secondary: {
        light: string;
        main: string;
        dark: string;
        text: string;
      };
      tertiary: {
        light: string;
        main: string;
        dark: string;
        text: string;
      };

      black: {
        light: string;
        main: string;
        dark: string;
        text: string;
      },
      white: {
        light: string;
        main: string;
        dark: string;
        text: string;
      },

      alertSuccess: {
        main: string;
        text: string;
      },
      alertDanger: {
        main: string;
        text: string;
      },
      alertWarning: {
        main: string;
        text: string;
      },
      alertInfo: {
        main: string;
        text: string;
      },
    },
  }
}

