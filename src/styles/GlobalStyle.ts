import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,::before,::after{
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Montserrat";
    
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    font: inherit;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
  }

  button {
    border: none;
    cursor: pointer;
   
  }



`;

export default GlobalStyle;
