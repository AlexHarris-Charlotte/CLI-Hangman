const letter = require('./Letter');
const word = require('./Word');
const inquirer = require('inquirer');

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

const words = [applesObject, orangesObject, strawberriesObject, dragonFruitObject, kiwiObject];


// Need to create a game function
// At the start of the game function, we will store a random object from the words array into
    // a variable
// Need to use inquirer to prompt the user for guesses and keep track












