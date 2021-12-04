"use strict";

/* Given an array of numbers and a number. Find the index of a first element which is equal to that
	number. If there is not such a number, that find the index of the first element which is the closest to it. */

function findIndex(arr, num) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === num) {
			return i;
		}
	}

	num = Math.abs(num);

	let result = arr.map(item => {
		item = Math.abs(item);

		return Math.abs(num - item);
	})

	return result.indexOf(Math.min(...result));
}

console.log(findIndex([21, -9, 15, 2116, -71, 33], -71));           // 4
console.log(findIndex([36, -12, 47, -58, 148, -55, -19, 10], -56)); // 5
console.log(findIndex([5, 46, 17, -2, 89, 0, 26], 36));             // 1