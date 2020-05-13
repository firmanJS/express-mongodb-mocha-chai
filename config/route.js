'use strict';
const express = require('express'); const routing = express();
const product = require('../routes/ProductRoute');

routing.use(product);

module.exports = routing;
