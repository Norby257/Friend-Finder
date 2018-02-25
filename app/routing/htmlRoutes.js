//  Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//  Instantiate the app
var app = express();
var PORT = process.env.PORT || 3000;

//  body parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  routes and request to HTML pages 

//  get request to survey 
app.get("/survey", function(req, res){
    //  send back the survey page 
    res.sendFile(path.join(__dirname, '..', 'public', '/survey.html'));
});

//  catch all back to home page 
app.get("/home", function(req, res){
    //send back the home page 
    res.sendFile(path.join(__dirname, '..', 'public', '/home.html'));
});

//  start server by listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
