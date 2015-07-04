var express = require("express");
var server = require('../server');
var router = express.Router();
var staticPath = require("./static");

exports.init = function(){
	console.log("Loading static route: ", staticPath);
	server.use(express.static(staticPath));

	router.route('/bears')
	
		.post(function (req, reply){
			var bear = {
				name: req.body.name,
				type: req.body.type
			};
			reply("pretend it was saved");
			// bearApi.save(bear)
			// 	.then(reply)
			// 	.catch(error => reply("Failed: " + error));
			
		})
		
		.get(function(req,res){
			//GET Bears
		});
		
	//Register ROUTES---------------------------------------------
	//server.use('/api', router);
	
}

