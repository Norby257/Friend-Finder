//  this is the jQuery file that is used to get user data from the form input etc
console.log("we are linked")

$(document).ready(function() {
  
  // array of questions
  var questions = 0,
    options = 0
  ;(surveyQuestions = [
    `Is climate change real?`,
    `Do you think astrological signs are important for a match?`,
    `You enjoy helping others`,
    `You think that Sundays are for brunch`,
    `You enjoy laughter`,
    `You prefer board games to bars`,
    `You prefer museums over meet and greets`,
    `An ideal saturday morning is binge watching Game of Thrones`,
    `An ideal saturday morning is a sunny day at the beach`,
    `You prefer outdoor adventure activities`
  ])

  console.log(surveyQuestions)

  //  hiding modal so we only show it when submit button is clicked 
  // $("#myModal").modal('hide');

  //for loop - question and question number are done - just thinking of ways to append the select option
  for (var i = 0, x = surveyQuestions.length; i < x; i++) {
    questions++
    $("form").append(`<h3> Question ${questions}`)
    $("form").append(`<h4> ${surveyQuestions[i]}`)
    $("form").append("<select>");
  }

  for (var j = 1; j < 6; j++) {
    $("select").append($("<option>", 
  {
    value: options[j],
    text: "Option " +  j
  }));
 }

//  $("form").append($("<button>")).addClass("btn btn-primary").text("Submit");
  //  add a submit button and the corresponding submit event
  $("button").on("click", function(e) {
    e.preventDefault()
    var userdata = {
      name: $("#name").val(),
      picture: $("#picture-link").val()
    }
    console.log(userdata)
    // $("#myModal").modal('show');

    $.post("/api/friends", userdata, function(data) {
      //  clear the form once all have been submitted
      $("#name").val("")
      $("#picture-link").val("")
    })
  })
})
