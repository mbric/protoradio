var express = require('express');
var mongo = require('mongoskin');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = mongo.db("mongodb://localhost:27017/protoradio", {native_parser:true});
  db.collection('plays').find().toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.render('index', { title: 'Protoradio', plays: result });
  });
});

module.exports = router;
