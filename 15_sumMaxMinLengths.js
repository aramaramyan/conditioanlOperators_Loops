"use strict";

/* Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum
	of their lengths. */

function sumMaxMinLengths(arr) {
	const lengths = arr.map(item => item.length);

	return Math.max(...lengths) + Math.min(...lengths);
}

console.log(sumMaxMinLengths(["anymore", "raven", "me", "communicate"]));									 // 13
console.log(sumMaxMinLengths(["wish", "slightly", "understand", "longer", "unexpected", "heart"])); // 14