'use strict';
exports.where = (req) => {
  return (req.query.where ? JSON.parse(req.query.where) : null);
};

exports.search = (req) => {
  return (req.query.search ? JSON.parse(req.query.search) : null);
};

exports.sort = (req, def_='_id') => {
  return (req.query.sort ? JSON.parse(req.query.sort) : {def_: -1});
};

exports.page = (req) => {
  return req.query.page || 1;
};
