var knex = require('knex');

var dbConnect = knex({
  client: 'sqlite3',
  connection: {
    filename : '../mydb.db'
  }
});

module.exports = dbConnect;