'use strict'
require('dotenv').config()
const dbUrl = 'mongodb://'+process.env.MONGO_ROOT_USER+':'+process.env.MONGO_ROOT_PASSWORD+'@mongodb/?authSource=admin',
mongoose = require('mongoose');

mongoose.Promise = global.Promise;

exports.connectWithRetry = function() {
  return mongoose.connect(dbUrl, { 
    useNewUrlParser: true, 
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }, function(err) {
    if (err) {
      console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
      setTimeout(connectWithRetry(), 5000);
    } else {
      console.log("✅  mongoDB Connected")
    }
  });
};