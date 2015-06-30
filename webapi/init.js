var express = require("express");
var server = require('../server');
var router = express.Router();
var staticPath = require("./static");

exports.init = function(){
	
	router.use(function(req, res, next){
		console.log('Processing...'); 
		next();
	});
	
	router.get('/', function(req, res){
		res.json({ 
			message: "welcome to the api, stay a while"
			});
	});
	
	
	// More API routes here
	
	//call specific objects ie: bears----------------------------------
	var Bear = require('../models/indexViewModel');
	
	router.route('/bears')
	
		.post(function (req, res){
			var bear = new Bear();
			bear.name = req.body.name;
			
			bear.save(function(err){
				if (err)
					res.send(err);
				
				res.json({message: 'Bear created!'});
			});
		})
		
		.get(function(req,res){
			//GET Bears
		});
		
	//Register ROUTES---------------------------------------------
	server.use('/api', router);
	
}

