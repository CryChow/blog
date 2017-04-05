/**
 * Created by Cry on 2017/4/1.
 */
var mongoose = require('mongoose');
/*mongoose.connection.close();*/
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/blogdb');

exports.mongoose = mongoose;