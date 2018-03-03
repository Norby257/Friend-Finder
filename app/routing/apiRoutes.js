//  dependencies 
var path = require("path");
var data = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    
    res.send(data);
  })

// app.post("api/friends", function(req, res){
//     "name": name,
//     "picture": picture,
//     "scores": scores

// }, function(res, data){
//     if (err) throw err;
//    res.send(data);
// })
}

