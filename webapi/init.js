var express = require("express");
var server = require('../server');
var staticPath = require("./static");
var routes = require("./all");


exports.init = function(){
	console.log("Loading static route: ", staticPath);
	server.use(express.static(staticPath));
	
	console.log("registering API routes");
	server.get("/bears", function(req, res){
		res.send(routes.read);
	});
	
	server.post("/bears", function(req, res){
		res.send(routes.update);
	});

	
		
	//Register ROUTES---------------------------------------------
	//server.use('/api', router);
	
}

