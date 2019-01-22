//basic setup
var fs = require('fs')
var express = require("express");
var routes = require("./routes/index");
var path = require("path")
var app = express();


app.use(express.static(path.join(__dirname,"../client")));

routes(app);

module.exports = app;