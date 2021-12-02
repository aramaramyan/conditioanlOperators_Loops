"use strict";

/* Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the
	sum, print the quotient, otherwise print the remainder. */

function sum(number) {
	let sum = 0;
	number = number + "";

	for (let i = 0; i < number.length; i++) {
		sum += +number[i];
	}
	return sum;
}

function product(number) {
	let product = 1;
	number = number + "";

	for (let i = 0; i < number.length; i++) {
		product *= +number[i];
	}
	return product;
}

function calculateProductAndSum(number) {
	if (number === 0) {
		return `Cannot calculate.`;
	} else if ((product(number) % sum(number)) === 0) {
		return `Quotient is ${product(number) / sum(number)}.`;
	} else {
		return `Remainder is ${product(number) % sum(number)}.`;
	}
}

console.log(calculateProductAndSum(1233)); // Quotient is 2.
console.log(calculateProductAndSum(5));    // Quotient is 1.
console.log(calculateProductAndSum(0));    // Cannot calculate.
console.log(calculateProductAndSum(455));  // Remainder is 2.