"use strict";

// Given three numbers. Sort them by the ascending order.

function sortNumbers(...numbers) {
	return numbers.sort((a, b) => a - b).join(" ");
}

console.log(sortNumbers(45, 26, 78));   // 26 45 78
console.log(sortNumbers(-23, -456, 0)); // -456 -23 0