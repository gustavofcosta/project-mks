import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    overflow-x: hidden;
    position: relative;
  }

  body::-webkit-scrollbar {
  width: 10px;             
  }

  body::-webkit-scrollbar-track {
    background: white;   
  }

  body::-webkit-scrollbar-thumb {
    background-color: #0F52BA;
    border-radius: 8px;      
  }
c
  ul {
    list-style-type: none;
  }
  
  a {
    text-decoration: none;
  }
`;

