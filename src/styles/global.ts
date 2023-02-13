import { createGlobalStyle } from "styled-components";

export const GloblaStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;

    background-color: #242423;
  }

  a {
    text-decoration: none;
  }
`