const jwt = require('jsonwebtoken');

function isAuthorizedMiddleware(req, res, next) {
  const { jwtData, jwtSignature } = req.cookies;
  if (!jwtData || !jwtSignature) {
    req.isAuthorized = false;
    next();
    return;
  }
  const fullJwt = `${jwtData}.${jwtSignature}`;

  jwt.verify(
    fullJwt,
    process.env.SECRET,
    { ignoreExpiration: true },
    (err, decoded) => {
      if (err) {
        req.isAuthorized = false;
        next();
        return;
      }
      req.isAuthorized = true;
      req.jwtPayload = decoded;
      next();
    }
  );
}

module.exports = {
  isAuthorizedMiddleware,
};
