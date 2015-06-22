var db = require("./storage/init");
var web = require("./webapi/static");

console.log("Creating database");
db.init();

console.log("Starting web server");
web.init();
