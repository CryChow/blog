/**
 * Created by Cry on 2017/4/2.
 */
var express = require('express');
var Blog = require("../models/blog.js");
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('write', { title: '日记' });
});

router.get('/submit', function(req, res,next) {
	var title = req.query.title;
	var content = req.query.content;
	var time = req.query.time;
	var blog = new Blog(title, content, time, false);
	blog.save(blog, function(err, blogBack){
		if (err) {
			res.writeHead(500);
		} else {
			/*res.render('bloglist')*/;
			res.writeHead(200);
			res.end();
		}

	});

});
module.exports = router;