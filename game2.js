
// pseudo - constructor which would create a ChosenWord object with the argument from the main.js setupGame.
var ChosenWord = function(wordsToPick){
	this.wordRandom = wordsToPick[Math.floor(Math.random() * wordsToPick.length)];
}

module.exports = ChosenWord;


// pseudo 2 - make sure randomization works
// var wordsList   = ["jerome", "neena", "darion"];
// var chosenWord  = ""; // solution will be held here.

// chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)]; // confirmed working
// console.log(chosenWord);

// pseudo 3 - since randomization works, now add exports. for other js file to connect
// var wordsList   = ["ab"];
// var chosenWord  = ""; // solution will be held here.

// exports.chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)]; 
// console.log('game.chosenWord: ', chosenWord);

// exports.chosenWord;




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