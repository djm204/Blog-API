var express = require("express");
var server = require('../server');
var staticPath = require("./static");

exports.init = function(){
	server.use("/", express.static(staticPath));
	
}

