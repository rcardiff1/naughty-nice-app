var db = require('../config.js');
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	user: String,
	code: String,
	count: Number
});

var user = mongoose.model('User', userSchema);

userSchema.pre('save', function(model, attrs, options) {
	var shasum = crypto.createHash('sha1');
	shasum.update(model.get('user'));
	model.set('code', shasum.digest('hex').slice(0, 5));
})


model.exports = User;