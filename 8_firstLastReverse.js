"use strict";

// Enter a number. Reverse its first and last digits. Print the new number.

function reverseFirstLast(number) {
	const str = number + "",
		firstDigit = str[0],
		lastDigit = str[str.length - 1];

	if (str.length === 1) return number;

	return +`${lastDigit}${str.slice(str.length - (str.length - 1), str.length - (str.length - (str.length - 1)))}${firstDigit}`;
}

console.log(reverseFirstLast(2));      // 2
console.log(reverseFirstLast(13));     // 31
console.log(reverseFirstLast(123456)); // 623451