import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,600');

  //
  // Reset
  // --------------------------------------------------
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    &,
    &:focus,
    &:hover {
      outline: none;
      text-decoration: none !important;
    }
  }

  button {
    &,
    &.button {
      &:focus {
        outline: 0 none;
      }
    }
  }

  input[type="checkbox"]:focus {
    outline: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6 {
    font-weight: 400;
  }

  * {
    margin: 0;
    padding: 0;

    &,
    &:before,
    &:after {
      box-sizing: border-box;
    }
  }

  body {
    font-family: "Poppins", sans-serif !important;
  }
`;
