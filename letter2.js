// pseudo - gets result of word evaluation as 2 parameters and rebuild wordView.
var RebuildWordView = function(lettersOfTheWord, matchedLetters) {
	this.wordView = "";

	for(var i=0; i < lettersOfTheWord.length; i++){
		if (matchedLetters.indexOf(lettersOfTheWord[i]) != -1){
			this.wordView += lettersOfTheWord[i];				
		}else{
			this.wordView += ' _ ';
		}
	}
}

module.exports = RebuildWordView;
