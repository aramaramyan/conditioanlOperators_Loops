"use strict";

/* Takes two arrays and insert the second array in the middle of the first array. The first array always has
	two elements. */

function insertArray(arr1, arr2) {
	return (Array.isArray(arr1) && Array.isArray(arr2) && arguments.length === 2) ? [arr1[0], ...arr2, arr1[1]] : arr1;
}

console.log(insertArray([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(insertArray([15, 150], [45, 75, 35]));				 // [15, 45, 75, 35, 150]
console.log(insertArray([[1, 2], [5, 6]], [[3, 4]]))			 // [[1, 2], [5, 6]], [[3, 4]]