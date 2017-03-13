var Game = require("./../js/game.js").gameModule;

$(function() {
  var newGame = new Game();
  var currentTurn = newGame.turnCounter;

  $(".simon-button").click(function() {
    var newPress = $(this).val();
    newGame.addPress(newPress);
    $("#current").empty();
    $("#expected").empty();
    $("#current").append(newGame.genReport(newGame.playerPressList));
    $("#expected").append(newGame.genReport(newGame.expectedList));
    if (newGame.isTurnOver()) {
      newGame.turnCleanup();
    }

  });

  $("#result-button").click(function() {
    $("#result").empty();
    $("#result").append(newGame.resultReport());
  });
});
