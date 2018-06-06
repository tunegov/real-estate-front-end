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
    background-color: #fafafa;
  }
  body > :first-child {
    display: flex;
    min-width: 100%;
    max-width: 100%;
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
  .react-grid-HeaderCell {
    font-weight: 500 !important;
  }
  .pull-right {
    float: right;
  }
  .react-grid-Toolbar {
    padding: 7px 14px !important;
  }
  .tools {
    margin-top: 0 !important;
  }
  .customRow .react-grid-Cell {
    background-color: initial !important;
  }
  .react-grid-Cell {
    border-right: none !important;
  }
  .react-grid-Cell__value > div > span > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .oddRow .react-grid-Cell {
    background-color: #fff !important;
  }
  .evenRow .react-grid-Cell {
    background-color: #ECEBFE !important;
  }
  .react-grid-HeaderCell .form-group input {
    width: 100%;
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px;
    border: 1px solid #ccc;
  }
  .react-grid-HeaderCell input.form-control {
    width: 100%;
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px;
    border: 1px solid #ccc;
  }
  .react-grid-HeaderCell .form-group {
    height: 100%;
  }
  .react-grid-HeaderCell > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .react-grid-HeaderCell > .Select {
    overflow: initial;
  }
  #__next > div {
    max-width: 100%;
    width: 100%;
  }
`;

export default globalStyles;
