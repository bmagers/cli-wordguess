var inquirer = require("inquirer");
var Word = require("./Word.js");
var guessesRemaining = 10;
var wordsToUse = ["CHICAGO", "DALLAS", "HOUSTON", "MIAMI", "PHILADELPHIA", "ATLANTA", "BOSTON", "PHOENIX", "DETROIT", "SEATTLE", "MINNEAPOLIS", "DENVER", "BALTIMORE", "CHARLOTTE", "PORTLAND", "OAKLAND", "TAMPA", "ORLANDO", "PITTSBURGH", "SACRAMENTO", "CINCINNATI", "CLEVELAND", "RALEIGH", "MILWAUKEE", "NASHVILLE", "AUSTIN", "INDIANAPOLIS", "ALBUQUERQUE"];
var word;

function newWord() {
  var currentWord = wordsToUse[Math.floor(Math.random() * (wordsToUse.length - 1))];
  word = new Word(currentWord);
  console.log(word.display() + "\n");
  guess();
}

function guess() {
  inquirer.prompt([
    {
      name: "letter",
      message: "Please guess a letter"
    }
  ]).then(function(answer) {
    if (word.guess(answer.letter.toUpperCase())) {
      console.log("Correct!\n");
    } else {
      guessesRemaining--;
      console.log("Incorrect. Guesses remaining: " + guessesRemaining + "\n");
    }
    console.log(word.display() + "\n");
    if (guessesRemaining === 0) {
      console.log("You are out of guesses.");
    } else {
      if (word.remaining() > 0) {
        guess();
      } else {
        console.log("You guessed the word!\nHere's a new word.\n");
        newWord();
      }
    } 
  });
}

newWord();