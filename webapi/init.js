var express = require("express");
var server = require('../server');
var staticPath = require("./static");
var routes = require("./all");


exports.init = function(){
	console.log("Loading static route: ", staticPath);
	server.use(express.static(staticPath));
	
	console.log("registering API routes");
	server.use(routes);

	
		
	//Register ROUTES---------------------------------------------
	//server.use('/api', router);
	
}

