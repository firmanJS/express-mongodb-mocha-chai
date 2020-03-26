const Product = require('../models/ProductModel'),
Msg = require('../helper/Exception'),
pagination = require('../helper/Pagination')

exports.Get = async (req, res) => {
  const where = pagination.Where(req),
  sort = pagination.Sort(req), limit = 5, 
  page  = parseInt(pagination.Page(req));
  Product
  .find(where)
  .skip((limit *page) - limit)
  .limit(limit)
  .sort(sort)
  .then(async result => {
    const count = await Product.estimatedDocumentCount(),
    countPerPage = Math.ceil(count / limit);
    Msg.SuccessResponse(res,result,page,countPerPage,count)
  }).catch(err => {
    Msg.ErrorResponse(res,err.message)
  })
}

exports.Create = async (req, res) => {
  if (req.body instanceof Array){
    Product.create(req.body)
    .then(result => {
      Msg.CreateResponse(res,result)
    }).catch(err => {
      Msg.ErrorResponse(res,err.message)
    })
  }else{
    const product = new Product(req.body);
    product.save()
    .then(result => {
      Msg.CreateResponse(res,result)
    }).catch(err => {
      Msg.ErrorResponse(res,err.message)
    })
  }
};

exports.GetById = async (req, res) => {
  Product.findById(req.params.id)
  .then(result => {
    Msg.GetResponse(res,result)
  }).catch(err => {
    Msg.ErrorResponse(res,err.message)
  })
};

exports.Put = async (req, res) => {
  Product.findByIdAndUpdate(req.params.id, { $set: req.body },{ new: true })
  .then(result => {
    Msg.UpdateResponse(res,result)
  }).catch(err => {
    Msg.ErrorResponse(res,err.message)
  })
}

exports.Delete = async (req, res) => {
  Product.findByIdAndRemove(req.params.id)
  .then(result => {
    Msg.DeleteResponse(res,result)
  }).catch(err => {
    Msg.ErrorResponse(res,err.message)
  })
}