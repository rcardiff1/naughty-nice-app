var mongoose = requre('mongoose');
mongoose.connect('mongodb://robert:robert@ds053954.mongolab.com:53954/mongolab_naughty_or_nice_mvp');

var db = mongoose.connection;

db.on('err', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Mongodb connection is open!');
};

model.exports = db;



