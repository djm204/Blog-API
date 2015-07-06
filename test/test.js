var db = require('../storage/db');
function get() {


  db.select()
    .table('bears')
    .then(function(names){
      console.log(names);
      console.log(typeof names);
    });
};

get();

 /* db('bears')
  .insert({name: "hewy"})
    .then();
  console.log('inserted bear');*/


