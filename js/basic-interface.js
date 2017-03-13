var InputTaker = require("./../js/basic.js").basicModule;

$(function() {
  $("#basic-form").submit(function(event) {
    console.log("Submited");
    event.preventDefault();
    var thingie = $("#test-input").val();
    var testModule = new InputTaker();
    var output = testModule.returnInput(thingie);
    $("#result").append("<p>you put in ->" + output + "<- </p>");
  });
});
