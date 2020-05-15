const Product = require('../models/ProductModel');
const Msg = require('../helper/Exception');
const pagination = require('../helper/Pagination');

exports.Get = async (req, res) => {
  const where = pagination.where(req);
  const sort = pagination.sort(req); const limit = 5;
  const page = parseInt(pagination.page(req));
  Product.find(where)
      .skip((limit *page) - limit)
      .limit(limit)
      .sort(sort).then(async (result) => {
        const count = await Product.estimatedDocumentCount();
        const countPerPage = Math.ceil(count / limit);
        Msg.successResponse(res, result, page, countPerPage, count);
      }).catch((err) => {
        Msg.errorResponse(res, err.message);
      });
};

exports.Create = async (req, res) => {
  const product = new Product(req.body);
  product.save().then((result) => {
    Msg.msgResponse(res, 'Create', result);
  }).catch((err) => {
    Msg.errorResponse(res, err.message);
  });
};

exports.GetById = async (req, res) => {
  Product.findById(req.params.id).then((result) => {
    Msg.msgResponse(res, 'Get detail', result);
  }).catch((err) => {
    Msg.errorResponse(res, err.message);
  });
};

exports.Put = async (req, res) => {
  Product.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
      .then((result) => {
        Msg.msgResponse(res, 'Update', result);
      }).catch((err) => {
        Msg.errorResponse(res, err.message);
      });
};

exports.Delete = async (req, res) => {
  Product.findByIdAndRemove(req.params.id).then((result) => {
    Msg.msgResponse(res, result);
  }).catch((err) => {
    Msg.errorResponse(res, err.message);
  });
};
