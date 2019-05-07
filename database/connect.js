const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/music', { useNewUrlParser: true })
.then(() => console.log('MongoDB connected'))
.catch(() => console.log('MongoDB connection error'));

module.exports = mongoose;