var express = require('express');
var router = express.Router();

var step0 = function (req, res, next) {
  console.log('step 0');
  next();
}

var step1 = function (req, res, next) {
  console.log('step 1');
  next();
}

var step2 = function (req, res) {
  res.send('Hello from step 2');
}

router.get('/', [step0, step1, step2]);

module.exports = router;