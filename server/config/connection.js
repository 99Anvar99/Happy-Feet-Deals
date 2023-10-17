const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/happyfeet-shoppingb');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/happyfeet-shoppinga');
// seeded to MongoDB Atlas cloub
// mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Hung1:LKI1G4P6rZKZJZlz@cluster0.rqdogfy.mongodb.net/?retryWrites=true&w=majority');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://hungb:Test1234@cluster0.pv7ehpy.mongodb.net/');

module.exports = mongoose.connection;