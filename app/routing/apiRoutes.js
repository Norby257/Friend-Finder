//  dependencies
var path = require("path")
var data = require("../data/friends")

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.send(data)
  })

  app.post(
    "/api/friends",
    function(req, res) {
      friends.push(req.body)
      // console.log(req.body)
      var newUser = {
        name: req.body.name,
        picture: req.body.picture,
        scores: req.body.scores
      }
      res.json(newUser)
    },
    function findMatch(newUser, friend) {
      //  convert option values into integer - i did this in survey_data.js
      // use array.map to get the difference of array per quetion
      matchScore = newUser.scoresInt
        .map((x, i) => x - friend.scoresInt[i])
        .map(x => Math.abs(x))
      console.log(matchScore)

      //use a sorting method to find match
      //send back a dialog box indicating who matched
      // matchName = this.name
      //  matchPictureLink = this.picture
    },
    function(res, data) {
      if (err) throw err
      res.send(data)
      //  res.send(data for match to be put into modal)
    }
  )
}
