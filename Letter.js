// Constructor for an individual letter within a word.  
function Letter(letter) {
    this.letter = letter.toString(),
    this.guessedStatus = false,
    this.guessed = function() {
        if(this.guessedStatus){
            console.log(this.letter);
            return this.letter;
        } else {
            console.log('_');
            return "_"
        }
    }
    this.letterCheck = function(letter) {
        if(letter === this.letter) {
            this.guessedStatus = true;
            console.log(`Wthin lettercheck ${this.guessedStatus}`)
        }
    }
};


module.exports = { Letter } ;