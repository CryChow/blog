var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var reg = require('./routes/reg');
var diaryList = require('./routes/diarylist');
var css = require('./routes/css');

var write = require('./routes/write');
var css_write = require('./routes/css_write');
var login = require('./routes/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



////////session//////////////
app.use(session({
	secret: '123456',
	cookie: {maxAge: 60000},
	resave: false,
	saveUninitialized: true
}));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/reg', reg);
app.use('/diary', diaryList);
app.use('/write', write);
app.use('/css_write', css_write);
app.use('/login', login);
app.use('/css', css);
app.use('/node', login);
app.use('/js', login);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(3000, function () {
	console.log("http://localhost:3000/write");
	console.log("http://localhost:3000/diary");
	console.log("http://localhost:3000/login");
	console.log("http://localhost:3000/reg");
});
module.exports = app;
