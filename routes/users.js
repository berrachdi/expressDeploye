var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('HELLO AYMANE!!');
});

router.get('/u', function(req, res, next) {
  res.send('u1uuuuuu');
});

module.exports = router;
