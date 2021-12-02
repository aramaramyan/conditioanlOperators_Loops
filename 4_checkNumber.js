"use strict";

function checkNumber(num) {
	if (num % 3 === 0 && num % 5 === 0 && num % 7 === 0) {
		return `${num} is a multiple of 3, 5 or 7.`;
	} else {
		if (num % 3 === 0 && num % 5 === 0) {
			return `${num} is a multiple of 3 and 5.`;
		} else if (num % 3 === 0 && num % 7 === 0) {
			return `${num} is a multiple of 3 and 7.`;
		} else if (num % 5 === 0 && num % 7 === 0) {
			return `${num} is a multiple of 5 and 7.`;
		} else {
			if (num % 3 === 0) {
				return `${num} is a multiple of 3.`;
			} else if (num % 5 === 0) {
				return `${num} is a multiple of 5.`;
			} else if (num % 7 === 0) {
				return `${num} is a multiple of 7.`
			}

			return `${num} is not a multiple of 3, 5 or 7.`;
		}
	}
}

console.log(checkNumber(21));  // 21 is a multiple of 3 and 7
console.log(checkNumber(35));  // 35 is a multiple of 5 and 7
console.log(checkNumber(13));  // 13 is not a multiple of 3, 5 or 7.
console.log(checkNumber(420)); // 420 is a multiple of 3, 5 or 7.
console.log(checkNumber(24));  // 24 is a multiple of 3.