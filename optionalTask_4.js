"use strict";

// Enter a number. Calculate and print its factorial. ( n! = n _ (n-1) _ (n-2) _ ... _ 3 _ 2 _ 1 , 0! = 1)

function getFactorioal(num) {
	let result = 1;

	if (num >= 0) {
		for (let i = 1; i <= num; i++) {
			result *= i;
		}
	} else {
		for (let i = num; i < 0; i++) {
			result *= i;
		}
	}

	return `${num}! = ${result}`;
}

console.log(getFactorioal(5)); // 5! = 120
console.log(getFactorioal(1)); // 1! = 1
console.log(getFactorioal(7)); // 7! = 5040