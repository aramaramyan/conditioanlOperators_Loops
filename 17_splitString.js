"use string";

/* Given a sentence as a string. Split it according to space and comma and create an array consisting of
	the words of the array. The last word should not contain the last . or ! . */

function splitString(str) {
	const result = str.split(" ").map(item => {
		if (item[item.length - 1] === "," || item[item.length - 1] === "." || item[item.length - 1] === "!") {
			item = item.substr(0, item.length - 1);
			return item;
		}

		return item;
	});

	return result;
}

console.log(splitString("May the Force be with you."));
console.log(splitString("Keep your friends close, but your enemies closer!"))