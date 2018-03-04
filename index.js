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
wordObject = (str) => {
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

let applesObject = wordObject('apples');
let orangesObject = wordObject('oranges');
let strawberriesObject = wordObject('strawberries');
let dragonFruitObject = wordObject('dragonfruit');
let kiwiObject = wordObject('kiwi');

const words = [applesObject, orangesObject, strawberriesObject, dragonFruitObject, kiwiObject];



function gameStart() {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'userResponse',
            message: 'Do you want to play hangman?'
        }
    
    ])
    .then(answers => {
        if (answers.userResponse) {
            displayWord();
        } else {
            console.log(`Fine, be that way`);
        }
    });
}

gameStart();


// Need to create a game function
// At the start of the game function, we will store a random object from the words array into
    // a variable
// Need to use inquirer to prompt the user for guesses and keep track




function displayWord() {
    guessALetter(randomWord());
}


randomWord = function () {
    const randomWord = words[Math.floor(Math.random() * words.length)]
    for(var i = 0; i < words.length; i++){
        if (randomWord === words[i]) {
            words.splice(words.indexOf(randomWord), 1);
        }
    }
    console.log(randomWord);
    let wordDisplay = ''
    for(var i = 0; i < randomWord.length; i++) {
        wordDisplay += randomWord[i].guessed()
    }
    console.log(wordDisplay);

    return randomWord
}


function guessALetter(rand) {
    inquirer.prompt([
        {
            type: 'input',
            name: 'userResponse',
            message: 'Guess a letter'
        }
    
    ])
    .then(answers => {
        let wordDisplay = '';
        for(var i = 0; i < rand.length; i++) {
            if (answers.userResponse === rand[i].letter) {
                rand[i].letterCheck(answers.userResponse);
            }
            for(var i = 0; i < rand.length; i++) {
                wordDisplay += rand[i].guessed()
            }
            console.log(wordDisplay);

            // console.log(rand[i].letter);
        }
    });
}



