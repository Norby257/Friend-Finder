//  dependencies 
var path = require("path");
var data = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    
    res.send(data);
  })

app.post("/api/friends", function(req, res){
  var friends = [];
  var friend  = {
    "name": "name",
    "picture": "picture",
    "scores": "[]"
  };
  friends.push(friend);
  console.log(friends);
    

}, function(res, data){
    if (err) throw err;
   res.send(data);
})
}

