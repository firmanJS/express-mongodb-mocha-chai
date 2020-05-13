const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const routing = require('./route');
const cors = require('cors');
const dbConfig = require('./database');
const exception = require('../helper/Exception');
const app = express();
require('dotenv').config();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(cookieParser());
dbConfig.connectWithRetry();

app.use(routing); // routing
app.use(exception.Handler404); // handler 404
app.use(exception.Handler500); // handler 500

module.exports = app;
