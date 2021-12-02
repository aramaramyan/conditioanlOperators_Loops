"use strict";

// Insert a digit and a number. Check whether the digits contains in the number or not.

function isContainDigit(digit, number) {

	const arr = [...(number + "")];

	for (let i = 0; i < arr.length; i++) {
		if (digit === +arr[i]) {
			return "Yes"
		}
	}

	return "No";
}

console.log(isContainDigit(5, 2463));  // NO
console.log(isContainDigit(4, 6));     // NO
console.log(isContainDigit(8, 45689)); // Yes