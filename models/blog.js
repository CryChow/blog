/**
 * Created by Cry on 2017/4/1.
 */
var mongodb = require('./mongodb.js');

var Schema = mongodb.mongoose.Schema;

var BlogSchema = new Schema({

    title: String,
	content: String,
	time: String,
    isDel: Boolean
});
var BlogModel = mongodb.mongoose.model('Blog', BlogSchema);

function Blog(title, content, time, isDel) {

	this.title = title;
    this.content = content;
	this.time = time;
    this.isDel = isDel;
};

Blog.prototype.save = function(blog, callback) {

    var blog = {
    	title: blog.title,
        content: blog.content,
	    time: blog.time,
        isDel: blog.isDel
    };

    var newBlog = new BlogModel(blog);

    newBlog.save(function (err, blog) {
        if (err) {
            return callback(err);
        }
        callback(null, blog);
    });
};

Blog.prototype.get = function(callback) {

    BlogModel.find({isDel: false}, function (err, blogs) {
        if (err) {
            return callback(err);
        }
        callback(null, blogs);
    });
};
Blog.prototype.getDetails = function (id, callback) {

	BlogModel.find({_id: id}, function (err, blogs) {
		if (err) {
			return callback(err);
		}
		callback(null, blogs);
	});
};
module.exports = Blog;