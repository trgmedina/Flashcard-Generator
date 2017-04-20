var BasicCard = require("./basiccard.js");
var ClozeCard = require("./clozecard.js");

//decide if using basic or cloze card
var cardType = process.argv[2];
var cardSide = process.argv[3];

var basicCard1 = new BasicCard("Who was the first president of the US?", "George Washington");
var clozeCard1 = new ClozeCard("George Washington was the first president of the US", "George Washington");

if (cardType === "basic") {
	if (cardSide === "front") {
		basicCard1.showFront();
	} 
	else {
		basicCard1.showBack();
	}
}
else {
	if (cardSide === "cloze") {
		clozeCard1.showCloze();
	}
	else if (cardSide === "partial") {
		clozeCard1.partial();
	}
	else {
		clozeCard1.displayAns();
	}
}