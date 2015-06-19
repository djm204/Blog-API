var path = require("path");
var server = require('../server');

var staticPath = server.static(path.join(__dirname, 'public'));