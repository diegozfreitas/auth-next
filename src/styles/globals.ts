import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: 0.3s ease all;
    font-family: 'Roboto', sans-serif;
  }

  h1{ font-size: 2rem; }
  h2{ font-size: 1.5rem;}
  h3{ font-size: 1.17rem;}
  h4{ font-size: 1rem;}
  h5{ font-size: 0.83rem;}
  h6{ font-size: 0.67rem;}

  body{
    background-color: ${({ theme }) => theme.palette.secondary.main};
    color: ${({ theme }) => theme.palette.black.main};
    font: 500 1rem 'Open Sans', sans-serif
  }
`;
