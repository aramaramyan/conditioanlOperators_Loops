"use strict";

// Enter a number. Find the difference between its biggest and smallest digits.

function diffBetweenMaxMin(num) {
	num = Math.abs(num);
	num += "";

	if (num.length === 1) {
		return 0;
	}

	const maxDigit = Math.max(...num),
		minDigit = Math.min(...num);

	return maxDigit - minDigit;
}

console.log(diffBetweenMaxMin(5));       // 0
console.log(diffBetweenMaxMin(152));     // 4
console.log(diffBetweenMaxMin(4593653)); // 6