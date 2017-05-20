var express = require('express');
var cssBlog = require("../models/cssblog.js");
var router = express.Router();

router.get('/', function(req, res) {
	var cssblog = new cssBlog();

	if(req.session.user){
		cssblog.get(function(err, blogBack){
			res.render('csslist', {url: "", userName: req.session.user.userName, allContent: blogBack });
		});
	}
	else {
		cssblog.get(function(err, blogBack){
			res.render('csslist', { url: 'http://localhost:3000/login', userName: '登录',allContent: blogBack});
		});

	}
});
router.get('/:blogId', function(req, res) {
	var cssblog = new cssBlog();
	cssblog.getDetails(req.params.blogId, function(err, blogBack){
		res.render('one_css_blog', { title: blogBack[0]._doc.title, content: blogBack[0]._doc.content, time: blogBack[0]._doc.time});
	});
});

module.exports = router;