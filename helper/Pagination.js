'use strict';
exports.Where = (req) => {
  return (req.query.where ? JSON.parse(req.query.where) : null);
};

exports.Search = (req) => {
  return (req.query.search ? JSON.parse(req.query.search) : null);
};

exports.Sort = (req, def_='_id') => {
  return (req.query.sort ? JSON.parse(req.query.sort) : {def_: -1});
};

exports.Page = (req) => {
  return req.query.page || 1;
};
