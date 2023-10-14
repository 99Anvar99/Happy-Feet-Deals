const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/happyfeet-shoppingb');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/HappyFeetDeals');

module.exports = mongoose.connection;