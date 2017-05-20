/**
 * Created by Cry on 2017/4/1.
 */
var express = require('express');
var Blog = require("../models/blog.js");
var router = express.Router();

router.get('/', function(req, res) {
	var blog = new Blog();
	if(req.session.user){
		blog.get(function(err, blogBack){
			res.render('diarylist', { allContent: blogBack, url: "", userName: req.session.user.userName});
		});
	}
	else {
		blog.get(function(err, blogBack){
			res.render('diarylist', { allContent: blogBack, url: 'http://localhost:3000/login', userName: '登录'});
		});
	}
});
router.get('/:blogId', function(req, res) {
	var blog = new Blog();
	blog.getDetails(req.params.blogId, function(err, blogBack){
		res.render('one_blog', { title: blogBack[0]._doc.title, content: blogBack[0]._doc.content, time: blogBack[0]._doc.time});
	});
});

module.exports = router;