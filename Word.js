const letter = require('./letter');

// Constructor
function Word(fruit) {
    this.fruit = fruit,
    this.standInName = function() {
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

const apples = new Word(applesObject);

module.exports = {Word};


