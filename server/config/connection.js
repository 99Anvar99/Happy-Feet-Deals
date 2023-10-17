const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/happyfeet-shoppingb');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/happyfeet-shoppinga');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Hung1:LKI1G4P6rZKZJZlz@cluster0.rqdogfy.mongodb.net/?retryWrites=true&w=majority');

module.exports = mongoose.connection;