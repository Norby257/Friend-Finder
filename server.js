// node  dependencies
var express = require("express")
var bodyParser = require("body-parser")
var path = require("path")
//  code modules
var htmlRoutes = require("./app/routing/htmlRoutes")
var apiRoutes = require("./app/routing/apiRoutes")

//instantiate app

var app = express()
var PORT = process.env.PORT || 3000

//  body parsing
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static('app/public'));

//  call the exported functions here

htmlRoutes(app)

apiRoutes(app)

//  start server by using .listen
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT)
})
