const routes = require('next-routes')();

routes
  .add('home', '/')
  .add('dashboard', '/app/dashbaord', 'app/dashboard')
  .add('profile', '/app/profile', 'app/profile')
  .add('deals', '/app/deals', 'app/deals')
  .add('leads', '/app/leads', 'app/leads')
  .add('invoices', '/app/invoices', 'app/invoices')
  .add('client-center', '/app/client-center', 'app/client-center')
  .add('log-in', '/log-in')
  .add('sign-up', '/sign-up');

module.exports = routes;
