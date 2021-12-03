"use strict";

/* Given an array of strings and numbers. Print the number of integers and the number of strings in the
	array. */

function printCount(arr) {
	let num = 0,
		 str = 0;

	for (let i = 0; i < arr.length; i++) {
		if (typeof (arr[i]) === "number") {
			num++;
		} else {
			str++;
		}
	}

	return `Numbers: ${num}, Strings: ${str}.`;
}

console.log(printCount([1, "10", "hi", 2, 3]));          // Numbers: 3, Strings: 2.
console.log(printCount([1, 4, "i am a string", "456"])); // Numbers: 2, Strings: 2.