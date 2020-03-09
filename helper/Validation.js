'use strict';
const jwt = require('jsonwebtoken'),
TokenValidation = {
  verifyToken: function (req, res, next) {
    if (typeof req.headers['x-token-api'] !== 'undefined') {
      const token = req.headers['x-token-api'];
      jwt.verify(token, process.env.JWT_SECRET, (err) => {
        if (err) return res.status(500).send({
          auth: false,
          message: 'Failed to authenticate token not match !'
        });
        next();
      });
    }else{
      return res.status(401).json({ error: "Not Authorized" });
    }
  }
}

module.exports = TokenValidation;