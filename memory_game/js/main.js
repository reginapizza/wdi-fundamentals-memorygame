const cards = ["Queen", "Queen", "King", "King"];
const cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne) 
console.log("User flipped Queen");
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("user flipped King");
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0]===cardsInPlay[1]) {
		alert ("You found a match!");
	} else {
		alert ("Sorry, try again.");
	}
}