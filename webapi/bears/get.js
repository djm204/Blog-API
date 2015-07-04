var db = require("../../storage/db");
var route = {
	method: "GET",
	path: "/bears",
	handler: function(req, res){
		get().then(function (bears){
			res(bears);
			console.log('handler fired');
		});
	}	
};

function get() {
	return db("bears").select();
			console.log('select fired');
	
}

module.exports = route;