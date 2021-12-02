"use struct";

/* Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the
	words from the array. */

function addMissigWords(sentence, wordsArr) {
	sentenceArr = sentence.split(" ");
	let counter = 0;

	for (let i = 0; i < sentenceArr.length; i++) {
		if (sentenceArr[i] === "_," || sentenceArr[i] === "_." || sentenceArr[i] === "_") {
			sentenceArr[i] = wordsArr[counter];
			counter++;
		}
	}

	return sentenceArr.join(" ");
}

console.log(addMissigWords("_, we have a _.", ["Houston", "problem."]));
console.log(addMissigWords("If at _ you donʼt _, try, try _.”_, we have a _.", ["first", "succeed", "again."]));
console.log(addMissigWords("May the _ _ _ _.", ["Force", "be", "with", "you."]));