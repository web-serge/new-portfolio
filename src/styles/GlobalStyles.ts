import {createGlobalStyle} from 'styled-components';
import {theme} from './Theme';

export const GlobalStyles = createGlobalStyle `
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  ul {
    list-style: none;
    width: 100%;
  }
  
  li {
    width: 100%;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  html {
    font-size: 10px;
  }
  
  body {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.6rem;
    min-width: 32rem;
    position: relative;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.colors.dark};
  }
  
  section {
    width: 100%;
  }
`