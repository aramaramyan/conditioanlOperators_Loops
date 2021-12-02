"use strict";

function findTheSign(...arr) {

	let negative = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			return "unsigned";
		} else if (arr[i] < 0) {
			negative++;
		}
	}

	return (negative % 2 === 0) ? "+" : "-";
}

console.log(findTheSign(-14, 5, -1));              // +
console.log(findTheSign(45, -98, 9, -87, 11, -8)); // -
console.log(findTheSign(-2, -5, 67, 9, 0, 6));     // unsigned