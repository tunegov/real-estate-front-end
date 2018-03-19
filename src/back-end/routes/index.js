const app = require('../../nextExport');
const router = require('express').Router();
const { isAuthorizedMiddleware } = require('../customMiddleware/auth');

const handle = app.getRequestHandler();

router.get('/app/*', isAuthorizedMiddleware, (req, res) => {
  if (!req.isAuthorized) return res.redirect('/');
  handle(req, res);
});

router.get(
  ['/sign-up', '/log-in', /^\/$/],
  isAuthorizedMiddleware,
  (req, res) => {
    if (req.isAuthorized) return res.redirect('/app/dashboard');
    handle(req, res);
  }
);

router.get('*', (req, res) => {
  handle(req, res);
});

module.exports = router;
