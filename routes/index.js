var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	if(req.session.user){
		res.render('index', { url: "", userName: req.session.user.userName });
	}
	else {
		res.render('index', { url: 'http://localhost:3000/login', userName: '登录' });
	}

});

module.exports = router;
