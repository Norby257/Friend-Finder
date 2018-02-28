
//  Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//  user data constructor -fix directory path 
// var friend = require("../data/friend.js");

//  instantiate app
var app = express();
var PORT = process.env.PORT || 3000;

//  body parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  routes and request - in this file we have get and post req  

//  GET route with the url /api/friends  - this displays JSON 

app.get("/api/friends", function(req, res){
    var friend = [{
        name: "Nora",
        photo: "picture",
        "scores": [ 5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
        ]

    }]
    res.send(friend);
});

//  a POST route /api/friends 
app.post("/api/friends", function(req, res){
    //  handle incoming data from user 

    //  and compatibility logic 
})

//  start server by using .listen 
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});