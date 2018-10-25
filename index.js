var inquirer = require("inquirer");
var Word = require("./Word.js");
var word = new Word("test");
var guessesRemaining = 10;

function guess() {
  inquirer.prompt([
    {
      name: "letter",
      message: "Please guess a letter"
    }
  ]).then(function(answer) {
    if (word.guess(answer.letter)) {
      console.log("Correct!");
    } else {
      guessesRemaining--;
      console.log("Incorrect. Guesses remaining: " + guessesRemaining);
    }
    console.log(word.display() + "\n");
    if (guessesRemaining === 0) {
      console.log("You are out of guesses.");
    } else {
      word.remaining() > 0 ? guess() : console.log("You guessed the word!");
    } 
  });
}

console.log(word.display());
guess();