var express = require("express");
var server = require('../server');
var router = express.Router();
var staticPath = require("./static");

exports.init = function(){
	
	router.use(function(req, res, next){
		
		console.log(req.method, req.url);
		
		next();
	});
	
	router.get('/', function (req, res){
		res.send('homepage');
	});
	
	router.get('/about', function(req, res){
		res.send('about');
	});
	
	server.use('/', router);
	
}

