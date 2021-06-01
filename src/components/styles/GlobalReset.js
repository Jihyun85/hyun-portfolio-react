import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html {
    font-family: "NEXON Lv2 Gothic";
    scroll-behavior: smooth;
  }

  h1 {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    font-family: "NEXON Lv2 Gothic";
    background-color: transparent;
    border: 0;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  a,
  button {
    cursor: pointer;
  }

  ul,
  ol {
    padding-left: 0;
    list-style: none;
  }

  address {
    font-style: normal;
  }

  /**
  * Firefox specific rule
  */

  @-moz-document url-prefix() {
    * {
      font-weight: 400 !important;
    }

    dt {
      text-decoration: underline;
    }
  }
`;
