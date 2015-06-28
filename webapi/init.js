var express = require("express");
var server = require('../server');
var router = express.Router();
var staticPath = require("./static");

exports.init = function(){
	
	router.get('/', function(req, res){
		res.json({ 
			message: "welcome to the api, stay a while"
			});
	});
	
	server.use('/api', router);
	
	
}

