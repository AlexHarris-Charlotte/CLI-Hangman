// Constructor for an individual letter within a word.  
function Letter(letter) {
    this.letter = letter.toString(),
    this.guessedStatus = false,
    this.guessed = function() {
        if(this.guessedStatus){
            // console.log(this.letter);
            return this.letter;
        } else {
            return "_"
        }
    }
    this.letterCheck = function(letter) {
        if(letter === this.letter) {
            this.guessedStatus = true;
        }
    }
};


module.exports = { Letter } ;