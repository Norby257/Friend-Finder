//adding node dependencies for this
var path = require("path")
module.exports = function(app) {
  //  routes and request to HTML pages
  //  get request to survey
  app.get("/survey", function(req, res) {
    //  render the survey page
    res.sendFile(path.join(__dirname, "..", "/public", "/survey.html"))
  })

  //  catch all back to home page
  app.get("/", function(req, res) {
    //send back the home page
    res.sendFile(path.join(__dirname, "..", "/public", "/home.html"))
  })
}
