import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #131633;
    -webkit-font-smoothing: antialiased !important;
  }

  header {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
