import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle `
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 10px;
  }
  
  body {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.6rem;
  }
`