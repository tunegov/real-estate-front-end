// next.config.js
const withCSS = require('@zeit/next-css');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}

module.exports = withCSS({
  webpack(config, options) {
    // Further custom configuration here
    config.node = {
      fs: 'empty',
    };

    return config;
  },
});
