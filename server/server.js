var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static( __dirname + '/../public/stylesheet'));


module.exports = app;

