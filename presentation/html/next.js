var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from next');
});

module.exports = router;