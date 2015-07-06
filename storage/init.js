var db = require('./db');
var tableName = "bears";
var hasTable = db.schema.hasTable(tableName);

var  create = db.schema.createTable(tableName, function (table){
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
			console.log("table " + tableName + " exists");
			return;
		init.create.then(function(){
			console.log("Created " + tableName+ " table");
		})
	})
}

module.exports = initialise;