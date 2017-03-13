var Game = require("./../js/game.js").gameModule;

var colorPairs = [["green", "darkgreen"], ["red", "darkred"], ["yellow", "gold"], ["blue", "darkblue"]];

// BELOW SHOULD GO IN A EFFECTS OBJECT =========================

var flashDiv = function(originalDiv, color) {
  var currentColor = 0;
  for (var i = 0; i < colorPairs.length; i++) {
    if (color === colorPairs[i][0]) {
      currentColor = i;
      break;
    }
  }
  var flashColor = colorPairs[currentColor][0];
  var originalColor = colorPairs[currentColor][1];
  changeColor(originalDiv, flashColor);
  var timeoutVar = window.setTimeout(changeColor, 600, originalDiv, originalColor);
};

var changeColor = function(originalDiv, color) {
  originalDiv.css('background-color', color);
  console.log("changing to " + color);
};

// END EFFECTS =================================================

$(function() {
  var newGame = new Game();
  newGame.generateExpectedPress();
  $("#expected").append(newGame.generateReport(newGame.expectedList));
  var currentTurn = newGame.turnCounter;
  var flashTimeout = window.setTimeout(flashDiv, 1000, $("#" + newGame.expectedList[0]), newGame.expectedList[0]);

  $(".simon-button").click(function() {
    var newPress = $(this).val();
    if (newGame.checkPress(newPress)) {
      newGame.addPress(newPress);
      if (newGame.isTurnOver()) {
        newGame.turnCleanUp();
        for(var index = 0; index < newGame.expectedList.length; index++) {
          var color = newGame.expectedList[index];
          var flashTimeout = window.setTimeout(flashDiv, (200 + (1100 * index)), $("#" + color), color);
        }
      }
      $("#current").empty();
      $("#expected").empty();
      $("#current").append(newGame.generateReport(newGame.playerPressList));
      $("#expected").append(newGame.generateReport(newGame.expectedList));
    } else {
      $("#stupid").append("game resetting bro");
      newGame.gameCleanUp();
      $("#current").empty();
      $("#expected").empty();
      $("#current").append(newGame.generateReport(newGame.playerPressList));
      $("#expected").append(newGame.generateReport(newGame.expectedList));
    }

  });

  $("#result-button").click(function() {
    $("#result").empty();
    $("#result").append(newGame.resultReport());
  });
});
