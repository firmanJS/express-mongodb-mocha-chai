const express = require('express'),
 cookieParser = require('cookie-parser'),
 logger = require('morgan'),
 routing = require('./route'), 
 cors = require('cors'),
 dbConfig = require('./database'),
 exception = require('../helper/Exception'),
 swaggerUi = require('swagger-ui-express'),
 app = express();
 require('dotenv').config()

app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors());
app.use(cookieParser());
dbConfig.connectWithRetry()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(routing); //routing
app.use(exception.Handler404); // handler 404
app.use(exception.Handler500); //handler 500

module.exports = app;
