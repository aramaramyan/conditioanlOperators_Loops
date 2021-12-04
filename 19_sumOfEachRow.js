"use strict"

/* Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each
	row and print them as an array. */

function sumOfEachRow(arr) {
	const result = [];

	for (let i = 0; i < arr.length; i++) {
		if (!Array.isArray(arr[i])) {
			return "Every item of array must consist of an array of numbers (like a two-dimensional array).";
		}

		result.push(arr[i].reduce((aggr, val) => aggr += val, 0));
	}

	return result;
}

console.log(sumOfEachRow([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]));        // [ 12, 1, 13, 15 ]
console.log(sumOfEachRow([[8, 35, 2], [8], [5, 6, -5, -6], [1, 3, -9, 0, -1]])); // [ 45, 8, 0, -6 ]
console.log(sumOfEachRow([[1], [2], [3], [4]]));										   // [ 1, 2, 3, 4 ]