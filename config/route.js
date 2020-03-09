'use strict';
const express = require('express'), routing = express(),
product = require('../routes/ProductRoute');

routing.use(product);

module.exports = routing;