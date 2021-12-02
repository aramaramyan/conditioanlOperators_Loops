"use strict";

/* Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If
	the last digit of the inserted number is 0, number remains the same. */

function fromLastToBegin(num) {
	if (typeof (num) === "number" && !isNaN(num)) {
		let str = num + "";

		if (str[str.length - 1] === "0" || str.length === 1) {
			return num;
		}

		let lastDigit = str[str.length - 1];

		return +`${lastDigit}${str.slice(0, str.length - 1)}`;
	} else {
		return "Enter only numbers!";
	}
}

console.log(fromLastToBegin(1234));        // 4123
console.log(fromLastToBegin(120));         // 120
console.log(fromLastToBegin(8));           // 8
console.log(fromLastToBegin("Some Text")); // "Enter only numbers!"