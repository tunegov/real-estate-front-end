const routes = require('next-routes')();

routes
  .add('home', '/')
  .add('dashboard', '/app/dashbaord', 'app/dashboard')
  .add('profile', '/app/profile', 'app/profile')
  .add('deals', '/app/deals', 'app/deals')
  .add('invoices', '/app/invoices', 'app/invoices')
  .add('agents', '/app/agents', 'app/agents')
  .add('admin-dashboard', '/app/admin/dashboard', 'app/admin/dashboard')
  .add('create-agent', '/app/admin/agents/create', 'app/admin/agents/create')
  .add('view-agents', '/app/admin/agents/view', 'app/admin/agents/view')
  .add('log-in', '/log-in')
  .add('sign-up', '/sign-up')
  .add('listings', '/listings')
  .add('new-developments', '/new-developments')
  .add('roommates', '/roommates')
  .add('about', '/about');

module.exports = routes;
