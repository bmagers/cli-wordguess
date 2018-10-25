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
    result = result.split("").join(" ");
    return result;
  }
  this.guess = function(char) {
    var guessed = false;
    word.forEach(function(item, index) {
      var letter = word[index];
      letter.guess(char) ? guessed = true : null;
    });
    return guessed;
  }
  this.remaining = function() {
    var result = 0;
    word.forEach(function(item, index) {
      var letter = word[index];
      letter.guessed === false ? result++ : null;
    });
    return result;
  }
}

module.exports = Word;