var inquirer = require('inquirer');
var chalk = require('chalk');
var prompt = require('prompt');
var colors = require('colors/safe');
var list = require("./word.js")
    // *******************************************

var randomWord = "";
var lettersInCompWord = [];
var numBlanks = 0;
var blanksNLetters = [];
var wrongGuesses = [];
var guessesRemaining = (randomWord.length - 2);
var compChoice = 0;
// *******************************************

// counters  I've set in 4,6,15 to test if function setUp reset values works
var winCounter = 4;
var lossCounter = 6;
var numGuesses = 15;


//  ***************testin area - following to be included in func setUp*****
// var importedList = list.wordList.words;
// console.log("importedList: " +importedList);
// console.log("************************************");
// compChoice = list.wordList.words[Math.floor(Math.random() * list.wordList.words.length)];
// console.log("Computer Secret word: " +compChoice);
// lettersInCompWord = [compChoice.split("")]; 
// console.log("Secret word split up: " + lettersInCompWord);
// console.log("********************** **************");
// numBlanks = lettersInCompWord.length; // see var line10
// console.log("Trying to print out var numBlanks: " + numBlanks);


// startGame()
setUp();

function setUp() {
    // alternatively - numBlanks.length
    winCounter = 0;
    lossCounter = 0;
    numGuesses = 0;
    blanksNLetters = []; // CRITICAL LINE - here we *reset* the guess and success array at each round. 
    wrongGuesses = []; // CRITICAL LINE - here we *reset* the wrong guesses from the previous round.
    console.log("You have " + guessesRemaining + "frogs and witches to guess the word.");
    random();
};

function random() {
    var importedList = list.wordList.words;
    console.log("importedList: " + importedList);
    console.log("************************************");
    compChoice = list.wordList.words[Math.floor(Math.random() * list.wordList.words.length)];
    console.log("Computer Secret word: " + compChoice);
    lettersInCompWord = [compChoice.split("")];
    console.log("Secret word split up: " + lettersInCompWord);
    console.log("********************** **************");
    numBlanks = compChoice.length;
    console.log("Trying to print out var numBlanks: " + numBlanks);
    guessesRemaining = (compChoice.length - 2);
    console.log("You have " + guessesRemaining + "guesses remaining");
    for (var i = 0; i < numBlanks; i++) {
        blanksNLetters.push("_");
    }
    // Above Fill up the blanksNLetters list with appropriate number of blanks. This is based on number of letters in solution

    console.log(blanksNLetters); // print the initial blanks in console.
};



// ************************ below is the prompt section *****************
// should I add: if (!error && response.statusCode ==200){
// 	
// prompt - want to create if/else start green, when 5 guesses left: yellow, 3 guesses left: red
// create dead function - flash

// function prompt (){
prompt.message = colors.bold.blue("Question!");
prompt.delimiter = colors.rainbow("");

prompt.start();

prompt.get({
    properties: {
        name: {
            description: colors.rainbow("Choose a letter"),
            pattern: /^[a-zA-Z]/,
            message: "You must choose a letter"
        }
    }
}, function(err, result) {
    var letter = result.name.toLowerCase();
    console.log(colors.bold.green("You chose the letter " + result.name));
    console.log(colors.bold.blue("You have " + guessesRemaining + " guesses remaining."));
    checkLetter(result.name);
    //insert prompt();
});

// *** question can I use switch of is it better to stick with if/if else/else?
function postPrompt(guessesRemaining) {

    guessesRemaining--;

    switch (guessesRemaining) {
        case (guessesRemaining <= 0):
            console.log(chalk.bgRed.bold("You blew it! Game over!"));
            break;
        case (guessesRemaining < 3):
            console.log(chalk.red.bold("Watch out! You only have " + guessesRemaining));
            break;
        case (guessesRemaining == 3 || 4):
            console.log(chalk.bgYellow.bold("Hmmmmm. Focus, you have " + guessesRemaining));
            break;
        case (guessesRemaining > 5):
            console.log(chalk.bgGreen.bold("You have " + guessesRemaining));
            break;
    }

};

function checkLetter(letter) {
    var letIn = false;
    for (var i = 0; i < numBlanks; i++) {
        if (compChoice[i] == letter) {
            letIn = true; // if the letter exists then toggle this boolean to true. This will be used in the next step. 
        }
    }
    if (letIn) {
        for (var i = 0; i < numBlanks; i++) {

            // Populate the blanksAndSuccesses with every instance of the letter.
            if (compChoice[i] == letter) {
                blanksNLetters[i] = letter; // here we set the specific space in blanks and letter equal to the letter when there is a match.
            }
        }
        console.log(blanksNLetters); // logging for testing
        
    }
    // If the letter doesn't exist at all...
    else {
        wrongGuesses.push(letter); // then we add the letter to the list of wrong letters
        numGuesses--; // and we subtract one of the guesses
        console.log(wrongGuesses); // logging for testing

        prompt.start()
    }
}




// game = {
// 	wordBank: ["HTML", "CSS", "Java"]
// 	guessesRemaining: 10;
// 	currentWrd: null;
// function startGame (ord){
// 	word ();
// };
// }


// prompt.get(['letter'],function (err,result){

// 	console.log('Commmand-line input received');
// 	console.log(' You chose ' + result.letter);
// });
