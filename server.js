var express = require('express');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var path = require('path');





var app = express();

var server = app.listen(4500);


// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// Make our db accessible to our router
/*app.use(function(req,res,next){
    req.db = db;
    next();
});*/




// catch 404 and forward to error handler


module.exports = app;