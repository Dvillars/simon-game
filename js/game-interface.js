var Game = require("./../js/game.js").gameModule;

$(function() {
  var newGame = new Game();
  newGame.generateExpectedPress();
  $("#expected").append(newGame.generateReport(newGame.expectedList));
  var currentTurn = newGame.turnCounter;

  $(".simon-button").click(function() {
    var newPress = $(this).val();
    if (newGame.checkPress(newPress)) {
      newGame.addPress(newPress);
      if (newGame.isTurnOver()) {
        newGame.turnCleanup();
      }
      $("#current").empty();
      $("#expected").empty();
      $("#current").append(newGame.generateReport(newGame.playerPressList));
      $("#expected").append(newGame.generateReport(newGame.expectedList));
    } else {
      $("#stupid").append("Stupid;;;;;;;");
    }

  });

  $("#result-button").click(function() {
    $("#result").empty();
    $("#result").append(newGame.resultReport());
  });
});
