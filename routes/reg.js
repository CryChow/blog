var express = require('express');
var router = express.Router();
var User = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('reg', { title: '注册' });
});
router.post('/save',function (req,res,next) {
	var userName = req.body.userName;
	var passport = req.body.passport;
	var ifEx = new User();
	ifEx.ifExist(userName, function(err, userBack){
		if (userBack == null){
			var user = new User(userName, passport, false);
			user.save(user,function (err, userBack) {
				if(err){
					res.writeHead(500);
				}

				res.end();

			});

		}
		else{
			res.json({userName: 'exist'});
		}
	});

});
module.exports = router;
