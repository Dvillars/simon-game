function Game() {
  this.playerPressList = [];
  this.expectedList = [];
  this.turnCounter = 1;
  this.sequenceOrder = 0;
  this.colors = ["red", "blue", "green", "yellow"];
}

Game.prototype.addPress = function(newPress) {
  this.playerPressList.push(newPress);
  this.sequenceOrder += 1;
};

Game.prototype.genReport = function(someArray) {
  var resultString = "";
  for(var index = 0; index < someArray.length; index++) {
    resultString += "Push " + index + " was " + someArray[index] + "<br>";
  }
  return resultString;
};

// Check a player push against the correllated expectedPush
Game.prototype.checkPress = function(newPress) {
  if(newPress === this.expectedList[this.sequenceOrder]) {
    return true;
  }
  else {
    return false;
  }
}

// Check to see if a turn is over, output True or false
Game.prototype.isTurnOver = function() {
  return(playerPressList.length === expectedList.length)
};

// End-of-turn cleanup function
Game.prototype.turnCleanup = function () {
  this.playerPressList = [];
  this.sequenceOrder = 0;
  this.turnCounter++;
  this.expectedList.push(generateExpectedPress);
};

// Randomly generated items to the list to continue the game
Game.prototype.generateExpectedPress = function() {
  var nextExpected = this.colors[Math.floor(Math.random() * 4)];
  expectedList.push(nextExpected);
};

exports.gameModule = Game;
