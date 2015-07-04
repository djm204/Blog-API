var db = require('./db');
var hasTable = db.schema.hasTable("bears");

var  create = db.schema.createTable('bears', function (table){
	table.increments();
	table.string('name');
	table.string('type');
	table.timestamps();
});
var init = {
	hasTable: hasTable,
	create: create
};

function initialise(){
	init.hasTable.then(function(exists){
		if (exists)
			console.log("table exists");
			return;
		init.create.then(function(){
			console.log("Created 'bears' table");
		})
	})
}

module.exports = initialise;