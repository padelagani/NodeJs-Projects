var mongoose = require('mongoose');

var crypto = require('crypto');
mongoose.connect('mongodb://localhost/nodeauth');

var db = mongoose.connection;

//User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index: true
	},
	password: {
		type: String,
		required: true
	},
	name: {
		type: String
	},
	email: {
		type: String
	},
	profileimage: {
		type: String
	}
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.comparePassword = function(candidatePassword, hash, callback){
	candidatePassword = crypto.createHash('md5').update(candidatePassword).digest('hex');
	if(candidatePassword == hash){
		return callback('true');
	}else{
		return callback(null);
	}
}
module.exports.getUserByUsername = function(username, callback) {
	var query = {username: username};
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback) {
	User.findById(id, callback);
}

module.exports.createUser = function(newUser, callback){
	newUser.password=crypto.createHash('md5').update(newUser.password).digest('hex');
	newUser.save(callback);
}