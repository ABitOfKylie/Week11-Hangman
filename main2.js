
var Inquirer = require('inquirer');

var Game = require('./game2.js');

var Word = require('./word2.js');
	// console.log('Word', Word);
var Letter = require('./letter2.js');

var words = ["pear","apple","pineapple","strawberries"];

var HangmanGame = function(){ // turn from obj to constructor.
	
	this.wordInPlay = null; // move to method setupGame
	this.lettersOfTheWord = [];
	this.matchedLetters = [];
	this.guessedLetters = [];
	this.guessesLeft = 0;
	this.totalGuesses = 0;
	this.letterGuessed = null;
	this.wins = 0;
	this.wordView = null; // temp test
	// this.letter = null; // temp test
	this.setupGame = function(wordsToPick) { //parameter to get words array.
		// ---Pick a random word
		// var objKeys = Object.keys(this.wordsToPick); // not applicable with array of words.
		// this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)]; // move to game as method in constructor.
		this.wordInPlayObj = new Game(wordsToPick); // add - creates new object with wordRandom property.
			console.log ('setupGame.wordInPlayObj: ', this.wordInPlayObj);
		this.wordInPlay = this.wordInPlayObj.wordRandom; // call wordRandom to set up to split
			console.log ('setupGame.wordInPlay: ', this.wordInPlay);
		this.lettersOfTheWord = this.wordInPlay.split('');
			console.log ('setupGame.lettersOfTheWord: ', this.lettersOfTheWord);
		// this.rebuildWordView();
		this.wordviewObj = new Letter(this.lettersOfTheWord, this.matchedLetters);
		this.wordView = this.wordviewObj.wordView;
		this.processUpdateTotalGuesses();
	// },
	};
	this.updatePage = function(letter) {
		if (this.guessesLeft == 0){
			this.restartGame();
			console.log("over");
		}else{
			// this.updateGuesses(letter);
			this.guessesObj = new Word.UpdateGuesses(letter, this.guessedLetters, this.lettersOfTheWord, this.guessesLeft);
			this.letterGuessed = this.guessesObj.guessedLetter;
			this.guessedLetters.push(this.guessesObj.guessedLetter);
			this.guessesLeft = this.guessesObj.guessesLeft;
			// this.updateMatchedLetters(letter);
			this.matchedObj = new Word.UpdateMatchedLetters(letter, this.lettersOfTheWord, this.matchedLetters);
			this.matchedLetters.push(this.matchedObj.matchedLetter);

			// this.rebuildWordView();
			this.wordviewObj = new Letter(this.lettersOfTheWord, this.matchedLetters);
			this.wordView = this.wordviewObj.wordView;

			if (this.updateWins() == true){
				this.restartGame();
			}
			// this.wordObj = new Word(letter);
			// console.log('wordObj', wordObj);
			
			
			// console.log('letterObj: ', this.letterObj);
			// console.log('not over');
		}

	};

	this.processUpdateTotalGuesses = function() {
			console.log('processUpdateTotalGuesses.guessesLeft: ', this.lettersOfTheWord);
		this.totalGuesses = this.lettersOfTheWord.length + 5;
		this.guessesLeft = this.totalGuesses;

		// ---Render the guesses left
			console.log('processUpdateTotalGuesses.guessesLeft: ', this.guessesLeft);
	};

	this.restartGame = function(){
		// document.querySelector('#guessed-letters').innerHTML = '';
		this.wordInPlay = null;
		this.lettersOfTheWord = [];
		this.matchedLetters = [];
		this.guessedLetters = [];
		this.guessesLeft = 0;
		this.totalGuesses = 0;
		this.letterGuessed = null;
		this.setupGame();
		this.rebuildWordView();
	}

	this.updateWins = function() {

		//this won't work for words with double or triple letters
			//var lettersOfTheWordClone = this.lettersOfTheWord.slice(); //clones the array
			//this.matchedLetters.sort().join('') == lettersOfTheWordClone.sort().join('')

		if (this.matchedLetters.length == 0){
			var win = false;
		}else{
			var win = true
		}
		
		for (var i=0; i < this.lettersOfTheWord.length; i++){
			if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) == -1){
				win = false;
			}
		}

		if (win == true){
			this.wins =  this.wins + 1;
			
			// document.querySelector('#wins').innerHTML = this.wins;

			// document.querySelector('#music').innerHTML = this.wordsToPick[this.wordInPlay].song + " By " + this.wordInPlay;

			// document.querySelector('#bandDiv').innerHTML = '<img class="bandImage" src="images/' + this.wordsToPick[this.wordInPlay].picture + '" alt="' + this.wordsToPick[this.wordInPlay].song + '">';

			var audio = new Audio(this.wordsToPick[this.wordInPlay].preview);
			audio.play();


			return true;
		}else{
			return false;
		}
	}
};



// document.onkeyup = function(event) {
// 	hangmanGame.letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
// 	hangmanGame.updatePage(hangmanGame.letterGuessed);
// }

// creates a new object from the HangmanGame constructor which in a hilarious way
// essentially gives me the original hangmanGame object behaving exactly the same as before.
var play = new HangmanGame();
// module.exports = play;
// calls setupGame inside new object Play with 'ab' argument
play.setupGame(words);

console.log('play after setup', play);

// play.updatePage("a"); // hard code to simulate user input.

// console.log('play after update: ', play);

var playCount = play.totalGuesses;

var count = 0;

var letsPlay = function(){

	if (count < playCount) {
		Inquirer.prompt([{
			name : "name",
			message : "Wins: " + play.wins + " # of Guesses Allowed: " + play.totalGuesses + " # of Guesses Left: " + play.guessesLeft + " Placeholder: " + play.wordView + " Letter? "
		}]).then(function(answers) {
			play.updatePage(answers.name);
			// if(answers.name == play.updatePage()) {
				// console.log('Guess: ' + answers.name);
			// 	console.log('----------------');
			// 	count = 2;
			// }else {
				count++;
				letsPlay();
			// }
		})
	}else {
		console.log('over');
	}
}

letsPlay();

