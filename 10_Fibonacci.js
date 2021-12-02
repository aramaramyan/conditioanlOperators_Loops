"use strict";

/* Given a number n ( n >= 0 ) . Print n Fibonacci number. (Fibonacci th series: 0, 1, 1, 2, 3, 5, 8 ..., ak =
	ak-1 + ak-2). */

function fibonacci(number) {
	let fibArr = [0, 1];

	for (let i = 2; i <= number; i++) {
		fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
	}

	return `${number} : Fibonacci number is ${fibArr[number]}.`;
}

console.log(fibonacci(0));  // 0 : Fibonacci number is 0.
console.log(fibonacci(2));  // 2 : Fibonacci number is 1.
console.log(fibonacci(10)); // 10 : Fibonacci number is 55.
console.log(fibonacci(20)); // 20 : Fibonacci number is 6765.