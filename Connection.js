const mongoose = require('mongoose')

const DB_URI = 'mongodb+srv://rajib005:rajib@cluster0.wkthe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(DB_URI,
{useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection

module.exports = connection