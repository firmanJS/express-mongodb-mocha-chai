'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

exports.connectWithRetry = function() {
  return mongoose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }, function(err) {
    if (err) {
      console.error('Failed to connect to mongo', err);
      setTimeout(connectWithRetry(), 5000);
    } else {
      console.log('mongoDB Connected ✅');
    }
  });
};
