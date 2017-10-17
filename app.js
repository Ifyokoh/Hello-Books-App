
//Dependences
var express = require('express');
var bodyParser = require('body-parser');

//Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Routes
app.use(require('./server/controllers'));

//start server
app.listen(3000);
console.log('API is running on port 3000');

module.exports = app;