var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /*var LastfmAPI = require('lastfmapi');
  var lfm = new LastfmAPI({
    'api_key' : 'YOUR_API_KEY',
    'secret' : 'YOUR_API_SECRET'
  });*/
  res.render('index', { title: 'Express' });
});

module.exports = router;
