var db = require("../../storage/db");
var route = 
function (req, res) {


  res.send(db.select()
    .table('bears')
    .then(function(bears){
      console.log(bears);
      console.log(typeof bears);
    }));
};

module.exports = route;