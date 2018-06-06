const routes = require('next-routes')();

routes
  .add('home', '/', '/')
  .add('dashboard', '/app/dashbaord', 'app/dashboard')
  .add('profile', '/app/profile', 'app/profile')
  .add('deals', '/app/deals', 'app/deals')
  .add('invoices', '/app/invoices', 'app/invoices')
  .add('agents', '/app/agents', 'app/agents')
  .add(
    'admin-dashboard',
    '/app/admin-area/dashboard',
    'app/admin-area/dashboard'
  )
  .add(
    'create-agent',
    '/app/admin-area/agents/create',
    'app/admin-area/agents/create'
  )
  .add(
    'view-agents',
    '/app/admin-area/agents/view',
    'app/admin-area/agents/view'
  )
  .add(
    'create-user',
    '/app/admin-area/users/create',
    'app/admin-area/users/create'
  )
  .add('view-users', '/app/admin-area/users/view', 'app/admin-area/users/view')
  .add(
    'create-admin',
    '/app/admin-area/admin/create',
    'app/admin-area/admin/create'
  )
  .add('view-admin', '/app/admin-area/admin/view', 'app/admin-area/admin/view')
  .add('view-deals', '/app/admin-area/deals/view', 'app/admin-area/deals/view')
  .add(
    'view-invoices',
    '/app/admin-area/invoices/view',
    'app/admin-area/invoices/view'
  )
  .add('log-in', '/log-in')
  .add('sign-up', '/sign-up')
  .add('listings', '/listings')
  .add('listing', '/listing')
  .add('agent', '/agent')
  .add('new-developments', '/new-developments')
  .add('roommates', '/roommates')
  .add('about', '/about');

module.exports = routes;
