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
    for(var i = 0; i < words.length; i++) {
        for(var j = 0; j < words[i].length; j++) {
            words[j].guessedStatus = false;
            console.log(words[j].guessedStatus);
        }
    }
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'userResponse',
            message: 'Do you want to play hangman?'
        }
    
    ])
    .then(answers => {
        let guessCount = 7;
        if (answers.userResponse) {
            displayWord(guessCount);
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




function displayWord(guessCount) {
    guessALetter(randomWord(), guessCount);
}


randomWord = function () {
    const randomWord = words[Math.floor(Math.random() * words.length)]
    for(var i = 0; i < words.length; i++){
        if (randomWord === words[i]) {
            words.splice(words.indexOf(randomWord), 1);
        }
    }
    let wordDisplay = '\n   '
    for(var i = 0; i < randomWord.length; i++) {
        wordDisplay += randomWord[i].guessed()
    }
    console.log(`word`, wordDisplay);
    // console.log(randomWord);
    return randomWord
}

// let guessCount = 7;

function guessALetter(rand, count) {
    let wordDisplay = ''
    // guessCount = count;
    inquirer.prompt([
        {
            type: 'input',
            name: 'userResponse',
            message: 'Guess a letter'
        }
    
    ])
    .then(answers => {
        let usersGuess = answers.userResponse;
        let concatenatedLetters = '';
        let response;

        for (var i = 0; i < rand.length; i++) {
            concatenatedLetters += rand[i].letter
        }

        if (concatenatedLetters.indexOf(usersGuess) !== -1 ) {
            for (var i = 0; i < rand.length; i++) {
                rand[i].letterCheck(usersGuess);
                wordDisplay += rand[i].guessed()
            }
            console.log(`\nGuesses Remaining ${count}`)
        } else {
            for (var i = 0; i < rand.length; i++) {
                rand[i].letterCheck(usersGuess);
                wordDisplay += rand[i].guessed()
            }
            count--;
            console.log(`\nGuesses Remaining ${count}`)
        }




        // Todo List:
        // Set up a string of previous userGuesses so that they cannot repeat previous guesses


        console.log(wordDisplay)
    


        if (wordDisplay === concatenatedLetters) {
            console.log('\nWINNER!!!');
            gameStart();
        } else if (count !== 0) {
            guessALetter(rand, count);
        } else if (count === 0) {
            console.log('\nGame Over');
            gameStart();
        }
    });
}


