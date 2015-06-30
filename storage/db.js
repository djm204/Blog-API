var knex = require('knex');
var path = require('path');

var dbConnect = knex({
  client: 'sqlite3',
  connection: {
    filename : path.join(__dirname,'../mydb.db')
  }
});

module.exports = dbConnect;