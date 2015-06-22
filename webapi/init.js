var server = require('../server');
var staticPath = require("./static");

exports.init = function() {
    server.static(staticPath);
}
