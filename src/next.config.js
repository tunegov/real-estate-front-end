// next.config.js
const withCSS = require('@zeit/next-css');

const isDev = process.env.NODE_ENV === 'development';
const isStage = process.env.APP_ENV === 'stage';

const ENDPOINT = isDev ? 'http://localhost:4000/graphql' : '/api/graphql';
const CREDENTIALS = isDev ? 'include' : 'same-origin';
let WEBSITE_URL;

if (isDev) {
  WEBSITE_URL = 'http://localhost:4000/graphql';
} else if (isStage) {
  WEBSITE_URL = 'https://stagging.reyeselsamad.com/api/graphql';
} else {
  WEBSITE_URL = 'https://stagging.reyeselsamad.com/api/graphql';
}

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = () => {};
}

module.exports = withCSS({
  distDir: '../build',
  publicRuntimeConfig: { // Will be available on both server and client
    ENDPOINT,
    CREDENTIALS,
    WEBSITE_URL,
  },
});
