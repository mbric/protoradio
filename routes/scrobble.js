var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var mongo = require('mongoskin');
  var db = mongo.db("mongodb://localhost:27017/protoradio", {native_parser:true});
  console.log(req.query.track)
  db.collection('plays').insert({track: req.query.track, artist: req.query.artist, album: req.query.album}, function(err, result) {
      console.log(result);
      db.close();
  });
  res.send(req.query.track);
});


module.exports = router;
