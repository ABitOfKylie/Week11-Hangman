// pseudo - evaluates the guessed letter.
exports.UpdateGuesses = function(letter, guessedLetters, lettersOfTheWord, guessesLeft){
	//if the letter is not in the guessedLetters array && not in lettersOfWord array
	this.guessedLetter = null;
	this.guessesLeft = guessesLeft;
	if ((guessedLetters.indexOf(letter) == -1) && (lettersOfTheWord.indexOf(letter) == -1)){
		// this.guessedLetters.push(letter);
		this.guessedLetter = letter;
		this.guessesLeft--;
	}

};

exports.UpdateMatchedLetters = function(letter, lettersOfTheWord, matchedLetters){
	this.matchedLetter = null;
	for (var i = 0; i < lettersOfTheWord.length; i++) {
		if ((letter === lettersOfTheWord[i]) && (matchedLetters.indexOf(letter) == -1)){
			this.matchedLetter = letter;
		};
	};
};

// module.exports = UpdateGuesses;



// module.exports = UpdateMatchedLetters

// document.onkeyup = function(event) {
// 	hangmanGame.letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
// 	hangmanGame.updatePage(hangmanGame.letterGuessed);
// }




// // pseudo 5 - modularize playerGuess and chosenWord evaluation
// var main = require('./main.js');
// 	console.log('word.mainchosenWord: ', main.mainchosenWord);
// 	console.log('word.playerGuess: ', main.playerGuess);
// // var main = require('./main.js');

// var playerGuess = 'neena';
// 	console.log('hard code playerGuess: ', playerGuess);

// var wordResult = '';

// if (playerGuess == main.mainchosenWord) {
// 	wordResult = 'true';
// 	console.log(wordResult);
// }
// else {
// 	wordResult = 'false';
// 	console.log(wordResult);
// }

// console.log('2nd log: ', wordResult);

// exports.wordResult;

// pseudo - this thing is going to get 2 or 3 arguments
// argument 1 is the playerGuess letter
// argument 2 is the chosenword

// function startGame() {
// 	// Reset the guesses back to 0
// 	numGuesses = 9;

// 	chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)]; // solution is chosen randomly from wordList
// 	lettersInChosenWord = chosenWord.split(""); // the word is broken into individual letters
// 	numBlanks = lettersInChosenWord.length; // we cound the number of letters in the word

// 	console.log(chosenWord); // We print the solution in console (for testing)

// 	blanksAndSuccesses = []; // CRITICAL LINE - here we *reset* the guess and success array at each round. 
// 	wrongGuesses = []; // CRITICAL LINE - here we *reset* the wrong guesses from the previous round.

// var Dud = require('./dud.js');

// var PartyBus = function(driverName, startLocation, destination){
// 	this.duds = [];
// 	this.driverName = driverName;
// 	this.startLocation = startLocation;
// 	this.destination = destination;
// 	this.addDud = function(g, n, r){
// 		this.duds.push(new Dud(g, n, r));
// 	}
// }

// module.exports = PartyBus;