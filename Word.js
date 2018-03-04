const letter = require('./letter');

const letterObjects = [];
const alphabet = `abcdefghijklmnopqrstuvwxyz`;

for(var i = 0; i < alphabet.length; i++) {
    let tempObj = new letter.Letter(alphabet[i])
    letterObjects.push(tempObj);
}

// This function will accept a string and then create an array of letter objects matching the values
// within the string argument
word = (str) => {
    let wordArray = [];
    for(var i = 0; i < str.length; i++) {
        for(var j = 0; j < letterObjects.length; j++) {
            if(letterObjects[j].letter === str[i]) {
                wordArray.push(letterObjects[j]);
            }
        }
    }
    return wordArray;
}

let applesObject = word('apples');
let orangesObject = word('oranges');
let strawberriesObject = word('strawberries');
let dragonFruitObject = word('dragonfruit');
let kiwiObject = word('kiwi');

// console.log(kiwi);

// Constructor
function Word(fruit) {
    this.fruit = fruit
    this.standInName = function() {
        fruit.reduce((acc, letter) => {
            return acc += letter.guessed();
        }, '')
    }
}

const apples = new Word(applesObject);

// console.log(typeof(apples.fruit));
console.log(apples.fruit);
apples.standInName();
