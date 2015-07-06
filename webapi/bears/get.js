var db = require("../../storage/db");


function getBearHandler(req, response) {
  // shift-alt-f to code format
  console.log("calling GetBearHandler");
  db("bears")
    .select()
    .then(bears => response.send(bears))
    .catch(error => {
      response.statusCode(500);
      response.send("Failed to retrieve:" + error);
    });
}



module.exports = getBearHandler;