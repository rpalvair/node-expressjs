const express = require("express");
const app = express();
var welcome = require("./presentation/html/welcome");
var steps = require("./presentation/html/steps");
var next = require("./presentation/html/next");



app.use("/welcome", welcome);
app.use("/routes/steps", steps);
app.use("/routes/to-next", next);

app.get("/",function(req,res) {
    res.send("Hello World");
})



app.listen(3000, function() {
    console.log('express listening on port 3000!');
})