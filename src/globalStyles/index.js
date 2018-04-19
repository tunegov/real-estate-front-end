const globalStyles = `
  html {
    height: 100%;
  }
  body {
    position: relative;
    min-height: 100%;
    min-width: 100%;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    background-color: #FFF;
  }
  body > :first-child {
    display: flex;
    min-width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
  }
  body > :first-child > #__next {
    display: flex;
    min-width: 100%;
  }
  body > :first-child > #__next > div {
    display: flex;
    min-width: 100%;
  }
  body > :first-child > #__next > div > div {
    display: flex;
    min-width: 100%;
  }
`;

export default globalStyles;
