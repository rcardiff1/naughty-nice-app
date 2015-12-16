var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var config = require('../app/config.js');

app.use(bodyParser.json());
app.use(express.static( __dirname + './../public/'));
app.use(express.static( __dirname + './../public/stylesheet'));

///////////////////////////////////////////////////////////////

var Schema = mongoose.Schema;
var userSchema = new Schema({
	user: { type: String, index: { unique: true } },
	naughty: Number,
	nice: Number
});

var User = mongoose.model('User', userSchema);

///////////////////////////////////////////////////////////////


app.post('/update', function(req, res) {
	var name = req.body.name;
	var bad = req.body.naughty;
	var good = req.body.nice;

	console.log('Hit the update: ', name);

	User.findOne({ user: name}, function(err, found) {
		// if (err) console.log(err);

		if(!found) {
			User.create({ 
				user: name, 
				naughty: bad,
				nice: good
			}), function (err, upDatedUser) {
			  if (err) return handleError(err);
			  res.send(upDatedUser);
			}
		} else {
			if(bad === true) {
				User.findByIdAndUpdate({ $inc: { naughty: 1} }, function (err, upDatedUser) {
				  if (err) return handleError(err);
				  console.log('This is the updated User: ', upDatedUser);
				  res.send(upDatedUser);
				})
			} else {
				User.findByIdAndUpdate({ $inc: { nice: 1} }, function (err, upDatedUser) {
				  if (err) return handleError(err);
				  console.log('This is the new User: ', upDatedUser);
				  res.send(upDatedUser);
				})
			}
    }
	})

});




module.exports = app;

