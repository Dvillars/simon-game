(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function InputTaker() { }

InputTaker.prototype.returnInput = function (thingie) {
  return thingie;
};

exports.basicModule = InputTaker;

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{"./../js/basic.js":1,"./../js/game.js":2}]},{},[3]);
