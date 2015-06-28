var knex = require('knex');
var schema = knex.schema.createTable('bears', function (table){
	table.increments();
	table.string('name');
	table.string('type');
	table.timestamps();
});

module.exports =  schema;