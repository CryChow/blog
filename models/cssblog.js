/**
 * Created by Cry on 2017/5/18.
 */
var mongodb = require('./mongodb.js');

var Schema = mongodb.mongoose.Schema;

var cssBlogSchema = new Schema({

	title: String,
	content: String,
	time: String,
	isDel: Boolean
});
var cssBlogModel = mongodb.mongoose.model('cssBlog', cssBlogSchema);

function cssBlog(title, content, time, isDel) {

	this.title = title;
	this.content = content;
	this.time = time;
	this.isDel = isDel;
};

cssBlog.prototype.save = function(cssblog, callback) {

	var cssblog = {
		title: cssblog.title,
		content: cssblog.content,
		time: cssblog.time,
		isDel: cssblog.isDel
	};

	var newcssBlog = new cssBlogModel(cssblog);

	newcssBlog.save(function (err, cssblog) {
		if (err) {
			return callback(err);
		}
		callback(null, cssblog);
	});
};

cssBlog.prototype.get = function(callback) {

	cssBlogModel.find({isDel: false}, function (err, cssblogs) {
		if (err) {
			return callback(err);
		}
		callback(null, cssblogs);
	});
};
cssBlog.prototype.getDetails = function (id, callback) {

	cssBlogModel.find({_id: id}, function (err, cssblogs) {
		if (err) {
			return callback(err);
		}
		callback(null, cssblogs);
	});
};
module.exports = cssBlog;