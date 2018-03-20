const routes = require('next-routes')();

routes
  .add('home', '/')
  .add('dashboard', '/app/dashbaord', 'app/dashboard')
  .add('log-in', '/log-in')
  .add('sign-up', '/sign-up');

module.exports = routes;
