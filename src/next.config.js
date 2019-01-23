// next.config.js
const withCSS = require('@zeit/next-css');

const isDev = process.env.NODE_ENV === 'development';
const isStage = process.env.APP_ENV === 'stage';

const ENDPOINT = 'http://ec2-3-17-146-51.us-east-2.compute.amazonaws.com/api/graphql';
const CREDENTIALS = 'include';
let WEBSITE_URL;

if (isDev) {
  WEBSITE_URL = 'http://ec2-3-17-146-51.us-east-2.compute.amazonaws.com/api/graphql';
} else if (isStage) {
  WEBSITE_URL = 'http://ec2-3-17-146-51.us-east-2.compute.amazonaws.com/api/graphql';
} else {
  WEBSITE_URL = 'http://ec2-3-17-146-51.us-east-2.compute.amazonaws.com/api/graphql';
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
