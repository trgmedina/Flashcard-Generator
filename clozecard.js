function ClozeCard(text, cloze) {
	this.text = text;
	this.cloze = cloze;

	if (!this.text.includes(this.cloze)) {
		console.error("Error: " + this.cloze + " does not appear in " + this.text);
	}
}

ClozeCard.prototype.showCloze = function() {
	console.log(this.cloze);
};

ClozeCard.prototype.displayAns = function() {
	console.log(this.text);
};

ClozeCard.prototype.partial = function() {
	var str = this.text.replace(this.cloze, "...");
	console.log(str);
};

module.exports = ClozeCard;

// clozeCard1.showCloze();
// clozeCard1.displayAns();
// clozeCard1.partial();

// Testing error message:
// var test = new ClozeCard("Pizza is my fave food", "Tacos");