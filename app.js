const express = require("express");
const app = express();

app.get("/",function(req,res) {
    res.send("Hello World");
})


app.get('/routes/to-next', function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from next');
});

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

app.get('/routes/steps', [step0, step1, step2]);

app.listen(3000, function() {
    console.log('express listening on port 3000!');
})