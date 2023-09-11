const { connect, connection } = require('mongoose');
require('dotenv').config();

connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.stk0aow.mongodb.net/socialNetwork`);

module.exports = connection; 