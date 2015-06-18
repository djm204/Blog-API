var web = require('../webapi/server');

var db = require('../storage/db');

web.get("/users", (req, res) => {
  db("user_info").select().then(res);
});


