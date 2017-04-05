/**
 * Created by Cry on 2017/4/1.
 */
var express = require('express');
var Blog = require("../models/blog.js");
var router = express.Router();

router.get('/', function(req, res) {
	var blog = new Blog();
	blog.get(function(err, blogBack){
		res.render('bloglist', { allContent: blogBack});
	});
});
router.get('/:blogId', function(req, res) {
	var blog = new Blog();
	blog.getDetails(req.params.blogId, function(err, blogBack){
		res.render('one_blog', { title: blogBack[0]._doc.title, content: blogBack[0]._doc.content});
	});
});

module.exports = router;