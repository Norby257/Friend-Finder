//  this is the jQuery file that is used to get user data from the form input etc
console.log("we are linked")

$(document).ready(function() {


  // event handler that adds score to score array when a value is selected
  $("select").on("change", function() {
    scores.push(this.value)
    console.log(scores)
  })

  //  add a submit button and the corresponding submit event
  $("button").on("click", function(e) {
    e.preventDefault()
    var userdata = {
      name: $("#name").val(),
      picture: $("#picture-link").val(),
      scores: scores.map(Number)
    }
    console.log(userdata)

    $.post("/api/friends", userdata, function(data) {
      //  create a dialog box
      // $("<div class=dialog>".append($("<h4> Match!")).append($("<h4> Name")).append($("<h4> picture"));

      //  clear the form once all have been submitted
      $("#name").val("")
      $("#picture-link").val("")
    })
  })
})
