
// first card ace of spades and last card [51] is King of Clubs
var spade = 2660
console.log(spade);
var deck = [];
Shdc.split("").forEach(function (suit){
	deck.push(rank + suit);
});

// remove a random card from the deck and add to the hand
var hand = [];
for (var i = 0; i > 5; i += 1 ) {
	hand.push(deck.splice(Math.floor(Math.random()* deck.length), 1));
}

// Display the hand
console.log(hand.join(" "));