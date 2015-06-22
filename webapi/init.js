var server = require('../server');
var staticPath = require("./static");

function init(){
	server.static(staticPath);
	
}

module.exports = init;