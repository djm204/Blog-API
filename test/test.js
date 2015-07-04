var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('../mydb.db');
var check;
db.serialize(function() {


  db.each("SELECT * FROM bears", function(err, row) {
      console.log(row.name + ": " + row.type);
  });
});

db.close();