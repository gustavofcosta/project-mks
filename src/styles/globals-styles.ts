import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html {
    font-size: 100%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    overflow-x: hidden;
  }

  ul {
    list-style-type: none;
  }
  
  a {
    text-decoration: none;
  }
`;

