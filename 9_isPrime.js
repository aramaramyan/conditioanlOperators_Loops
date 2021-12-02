"use strict";

// Insert a number. Print ‘yesʼ if the number is prime, ‘noʼ otherwise.

function isPrime(number) {

	if (number === 1) {
		return "No";
	} else if (number === 2) {
		return "Yes";
	} else {
		let i = 2;
		while (i < number) {
			if (number % i === 0) {
				return "No";
			}
			i++;
		}
		return "Yes";
	}
}

console.log(isPrime(401)); // Yes
console.log(isPrime(63));  // No