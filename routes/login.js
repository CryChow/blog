/**
 * Created by Cry on 2017/4/15.
 */
var express = require('express');
var router = express.Router();
var User = require('../models/users.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('login', { loginmsg: '000000' });
});
router.post('/find',function (req,res,next) {
	var userr = {
		userName: req.body.userName,
		password: req.body.password
	};

	var user = new User();
	user.get(userr,function (err, userBack) {
		if(userBack){
			req.session.regenerate(function (err) {
				if(err){
					res.writeHead(500);
				}
				req.session.user = userr;
				/*res.render('index',{userName: userr.userName});*/
				res.send({status: "success"});
				/*res.redirect("/");*/

			});

		}
		else{
			res.writeHead(400);
			/*res.redirect('/login');*/
		}

	});
});
module.exports = router;
