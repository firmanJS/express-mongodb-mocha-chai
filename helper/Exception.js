'use strict';
exports.Handler404 = (req, res) => {
  const err = process.env.APP_ENV == 'development' ? new Error() : {};
  res.status(404).json({
    error: err.stack,
    status: 404,
    msg: `Route : ${req.url} Not found.`,
  });
};

exports.Handler500 = (req, res) => {
  const err = process.env.APP_ENV == 'development' ? new Error() : {};
  res.status(500).json({
    error: err.stack,
    status: 500,
  });
};

exports.successResponse = (res, data, current=null, pages=null, count=null) => {
  return res.status(200).json({
    message: `Get data successfull`,
    status: `success`,
    data: data,
    current: 1,
    page: current,
    totalPages: pages,
    countPerPage: data.length,
    countTotal: count,
  });
};

exports.msgResponse = (res, msg, data) => {
  return res.status(200).json({
    message: `${msg} data successfull`,
    status: `success`,
    data: data,
  });
};

exports.notFoundResponse = (res) => {
  return res.status(404).json({
    message: `Data not found`,
    status: `empty`,
    data: [],
  });
};

exports.errorResponse = (res, msg) => {
  return res.status(500).json({
    message: `Internal Server Error. ${msg}`,
    status: `error`,
    data: [],
  });
};
