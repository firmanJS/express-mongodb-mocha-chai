const express = require('express') ,
product = require('../controllers/ProductController'),
router = express.Router()

router.get('/product', product.Get);
router.post('/product', product.Create);
router.get('/product/:id', product.GetById);
router.put('/product/:id', product.Put);
router.delete('/product/:id', product.Delete);

module.exports = router;