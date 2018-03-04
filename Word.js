const letter = require('./letter');

// Constructor
function Word(fruit) {
    this.fruit = fruit,
    this.createWord = function() {
            fruit.reduce((acc, letter) => {
                return acc += letter.guessed();
            }, '')
        },
    this.guessCall = function(char) {
        char.map((letter) => {
            return letter.letterCheck();
        })
    }
}


module.exports = {Word};


