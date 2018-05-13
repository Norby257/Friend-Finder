// node  dependencies
var express = require("express")
var bodyParser = require("body-parser")
//  code modules


// Express configuration 

var app = express()
var PORT = process.env.PORT || 3000

//  body parsing
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static('app/public'));


//  routing 

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



//  start server by using .listen
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT)
})
