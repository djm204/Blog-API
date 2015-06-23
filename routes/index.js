var server = require('../server');
var router = server.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello World');
});

module.exports = router;


/* GET hellow world */



/* GET user_info from user_info and display it*/



/* GET Userlist page. 
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});*/