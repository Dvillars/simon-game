function Game() {
  this.playerPressList = [];
  this.expectedList = [];
  this.turnCounter = 1;
  this.sequenceOrder = 0;
  this.colors = ["red", "blue", "green", "yellow"];
  this.scores = [];
}

Game.prototype.addPress = function(newPress) {
  this.playerPressList.push(newPress);
  this.sequenceOrder += 1;
};

Game.prototype.generateReport = function(someArray) {
  var resultString = "";
  for(var index = 0; index < someArray.length; index++) {
    resultString += "Push " + index + " was " + someArray[index] + "<br>";
  }
  return resultString;
};

// Check a player push against the correllated expectedPush
Game.prototype.checkPress = function(newPress) {
  console.log(newPress);
  console.log(this.expectedList[this.sequenceOrder]);
  console.log(this.sequenceOrder);
  return(newPress === this.expectedList[this.sequenceOrder]);
};

// Check to see if a turn is over, output True or false
Game.prototype.isTurnOver = function() {
  return(this.playerPressList.length === this.expectedList.length);
};

// End-of-turn cleanup function
Game.prototype.turnCleanUp = function () {
  this.playerPressList = [];
  this.sequenceOrder = 0;
  this.turnCounter++;
  this.generateExpectedPress();
};

// End-of-game cleanup function
Game.prototype.gameCleanUp = function () {
  this.scores.push(this.turnCounter);
  this.playerPressList = [];
  this.expectedList = [];
  this.turnCounter = 1;
  this.sequenceOrder = 0;
  this.generateExpectedPress();
};

// Randomly generated items to the list to continue the game
Game.prototype.generateExpectedPress = function() {
  var nextExpected = this.colors[Math.floor(Math.random() * 4)];
  this.expectedList.push(nextExpected);
};

exports.gameModule = Game;
