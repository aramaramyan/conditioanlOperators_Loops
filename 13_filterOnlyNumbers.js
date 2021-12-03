"use strict";

/* Given mixed array of numbers, strings, booleans, nulls and undefined. Filter array and get all the
	numbers in a separate array. Arrange them such as from the beginning are the odds and from the
	ending the evens. */

function filterOnlyNumbers(arr) {
	const numArr = arr.filter(item => typeof item === "number" && !isNaN(item)),
		oddNums = [],
		evenNums = [];

	for (let i = 0; i < numArr.length; i++) {
		if (numArr[i] % 2 === 0) {
			evenNums.push(numArr[i])
		} else {
			oddNums.push(numArr[i]);

		}
	}

	return [...oddNums, ...evenNums];
}

console.log(filterOnlyNumbers([8, 0, 1, "hey", 12, 5, true, "2", null, 7, 3, NaN])); // [1, 5,  7, 3, 8, 0, 12]
console.log(filterOnlyNumbers([8, 8, "meh", 6]));												 // [8, 8, 6]
console.log(filterOnlyNumbers([null, null, 1, undefined, 5, 9, false]));	          // [1, 5, 9]
