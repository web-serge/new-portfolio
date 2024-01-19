import {createGlobalStyle} from 'styled-components';
import {theme} from './Theme';

export const GlobalStyles = createGlobalStyle `
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  img {
    display: block;
  }

  section, ul{
    width: 100%;
  }

  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  html {
    font-size: 10px;
    scroll-behavior: smooth;
    
    //media for big screens
    //@media screen and (min-width: 1900px) {
    //  font-size: calc(100vw / 2200 * 10);
    //}
  }
  
  body {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.6rem;
    min-width: 20rem;
    line-height: 1.5;
    color: ${theme.colors.dark};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }
`