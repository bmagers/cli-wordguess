function Letter(char) {
  this.char = char;
  this.guessed = false;
  this.display = function() {
    return (this.guessed ? this.char : "_");
  }
  this.guess = function(newChar) {
    if (newChar === this.char) {
      this.guessed = true;
    }
    return this.guessed;
  }
}

module.exports = Letter;