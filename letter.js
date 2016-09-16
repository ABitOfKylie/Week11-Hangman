 function Letter (){
	this.let;
	this.char;
	this.appear = false;
	this.letterRender = function(){
		if(this.appear == false){
			return ("_");
		}else{
			console.log(this.char);
		};
	}
};

module.exports = Letter;

// this is here to determine whether to 'print' a "_" or letter chosen