const express = require('express');
const router = express.Router();

router.get('/agent', (req, res, next) => {
  console.log('gettin crazy!!!!');
  if (!req.query.id) {
    res.redirect('/agents');
    return;
  }
  next();
});

module.exports = router;
