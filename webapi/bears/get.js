var db = require("../../storage/db");
var route = {
	method: "GET",
	path: "/bears",
	handler: function(req, res){
		get().then(function (bears){
			res(bears);
		});
	}	
};

function get() {
	return db("bears").select();
}

module.exports = route;