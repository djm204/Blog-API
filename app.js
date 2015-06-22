var db = require("./storage/db");
var web = require("./webapi/static");

console.log("Creating database");
db.init();

console.log("Starting web server");
web.init();
