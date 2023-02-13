import { createGlobalStyle } from "styled-components";

export const GloblaStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;

    background-image: url("../../../assets/w10-wallpaper.jpg");
    background-size: cover;

    overflow-y: hidden;
  }

  a {
    text-decoration: none;
  }
`