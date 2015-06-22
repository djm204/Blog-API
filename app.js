var db = require("./storage/init");
var web = require("./webapi/init");

console.log("Creating database");
db();

console.log("Starting web server");
web.init();
