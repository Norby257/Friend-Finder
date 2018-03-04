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

//  loading the CSS files... need to express.static 
// app.use(express.static(__dirname + '/public'));
// app.use(express.static("public"));
app.use( express.static(path.join(__dirname, '/public')))

//  call the exported functions here

htmlRoutes(app)

apiRoutes(app)

//  start server by using .listen
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT)
})
