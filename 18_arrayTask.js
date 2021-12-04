"use Strict";

/* Given an array of a size smaller than 100. It consists of numbers from 0 to 99 in any order. Create a
	new array where each element from that array is placed under the index of its value. Start from the
	smallest value and end with the biggest one. If there are missing values, put in its places undefined. */

function placeElemUnderIndex(arr) {
	if (arr.length > 100) {
		console.log("Array size must be smaller than 100.")
	}

	const sortedArr = arr.sort((a, b) => a - b);
	const result = new Array(sortedArr[sortedArr.length - 1]).fill(undefined);

	sortedArr.forEach(item => result[item] = item);

	return result;
}

console.log(placeElemUnderIndex([4, 3, 0, 9]));
console.log(placeElemUnderIndex([26, 30, 19, 5]));