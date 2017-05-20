/**
 * Created by Cry on 2017/4/11.
 */
var mongodb = require('./mongodb.js');

var Schema = mongodb.mongoose.Schema;

var UserSchema = new Schema({

	userName: String,
	password: String,
	isDel: Boolean
});
var UserModel = mongodb.mongoose.model('User', UserSchema);

function User(userName, password, isDel) {

	this.userName = userName;
	this.password = password;
	this.isDel = isDel;
};
//////判断是否重名////////
User.prototype.ifExist = function (userName, callback) {
	UserModel.findOne({userName: userName}, function (err, user) {
		if(err){
			return callback(err);
		}
		else if(user){
			var exUser = new User(user);
			callback(null,exUser);
		}
		else
			callback(null, null);
	});
};
//////注册将id信息储存///////
User.prototype.save = function(user, callback){
	var oneUser = {
		userName: user.userName,
		password: user.password,
		isDel: user.isDel
	};
	var newUser = UserModel(oneUser);
	newUser.save(function (err, oneUser) {
		if(err){
			return callback(err);
		}
		callback(null, oneUser);
	});
};
///////登录获取id信息///////////
User.prototype.get = function (user, callback) {
	var userName = user.userName;
	var password = user.password;
	UserModel.findOne({userName: userName, password: password}, function (err, user) {
		if(err){
			return callback(err);
		}
		callback(null, user);
	});
};
module.exports = User;