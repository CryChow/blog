/**
 * Created by Cry on 2017/4/2.
 */
var express = require('express');
var cssBlog = require("../models/cssblog.js");
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('css_write', { title: 'CSS' });
});

router.get('/submit', function(req, res,next) {
	var title = req.query.title;
	var content = req.query.content;
	var time = req.query.time;
	var cssblog = new cssBlog(title, content, time, false);
	cssblog.save(cssblog, function(err, blogBack){
		if (err) {
			res.writeHead(500);
		} else {
			res.writeHead(200);
			res.end();
		}

	});

});
module.exports = router;/**
 * Created by Cry on 2017/5/18.
 */
