var path = require("path");

var staticPath = path.resolve(path.join(__dirname, "../", "public"));
console.log(staticPath);
module.exports = staticPath;