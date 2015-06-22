var fs = require('fs');

exports.init = function () {
    fs.readFile("mydb", function (error, data) { });
}
