//  dependencies 
var path = require("path");
var data = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    
    res.send(data);
  })

app.post("/api/friends", function(req, res){
  friends.push(req.body);
  console.log(req.body);
  var newUser = {
    name: req.body.name,
    picture: req.body.picture
  }
  res.json(newUser);
}, function(res, data){
    if (err) throw err;
   res.send(data);
})
}

