'use strict';
const passwordHash = require('password-hash'), jwt = require('jsonwebtoken'),
  { tbluser } = require('../models'),  randomstring = require("randomstring")

exports.inputForm = (req) => {
  return JSON.parse(JSON.stringify(req.body));
}

exports.SetJwt = (res,pass,obj) => { 
  const verify = passwordHash.verify(pass, obj.password);
  if (verify != true) {
    res.json({msg:'Password incorect !'})
  } else {
    const userToken = {
      id: obj.id,
      username: obj.username
    }
    jwt.sign({ userToken }, process.env.JWT_SECRET, {
      expiresIn: '7d' //set exipre token
    }, (err, token) => {
      const nows = new Date().valueOf();
      const numWeeks = 1, now = new Date();
      now.setDate(now.getDate() + numWeeks * 7)
      if (nows > obj.expired.valueOf()) {
        tbluser.update({ 
          linkunique: `http://localhost:${process.env.APP_PORT}/user/${randomstring.generate()}`,
          expired: now.toISOString().slice(0,10)
        }, { where: { id: obj.id } });
        res.json({
          token:token,
          rules: {
            header:"set header to authorization with x-token-api : token",
            method:"GET"
          },
          uniqueUrl:obj.linkunique,
            expireUrldAt:now.toISOString().slice(0,10)
        })
      }else{
        res.json({
          token:token,
          rules: {
            header:"set header to authorization with x-token-api : token",
            method:"GET"
          },
          uniqueUrl:obj.linkunique,
          expireUrldAt:obj.expired.toISOString().slice(0,10)
        })
      }
    });
  }
}
