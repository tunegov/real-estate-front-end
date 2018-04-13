const globalStyles = `
  html {
    height: 100%;
  }
  body {
    display: flex;
    min-height: 100%;
    min-width: 100%;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    background-color: #FFF;
    overflow: hidden;
  }
  body > div {
    display: flex;
    min-width: 100%;
  }
  body > div > #__next {
    display: flex;
    min-width: 100%;
  }
  body > div > #__next > div {
    display: flex;
    min-width: 100%;
  }
  body > div > #__next > div > div {
    display: flex;
    min-width: 100%;
  }
`;

export default globalStyles;
