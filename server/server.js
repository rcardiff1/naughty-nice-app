var express = require('express');
var app = express();

app.use(express.static('client'));
app.use(express.static( __dirname + '/../client/stylesheet'));


module.exports = app;

