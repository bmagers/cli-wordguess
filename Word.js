var Letter = require("./Letter.js");

function Word(newWord) {
  var word = newWord.split("");
  word.forEach(function(item, index) {
    word[index] = new Letter(item);
  });
  this.word = word;
  this.display = function() {
    var result = "";
    word.forEach(function(item, index) {
      result += item.display();
    });
    return result;
  }
  this.guess = function(char) {
    word.forEach(function(item, index) {
      var letter = word[index];
      console.log(char + " is the guess and " + letter.char + " is the letter");
      console.log(letter.guessed);
      if (letter.guess(char)) {
        return "Correct!";
      } else {
        return "Incorrect. :-(";
      }
    });
  }
}

module.exports = Word;