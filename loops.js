"use strict"

/*
	Try to write a the following loop with while and do-while:

	for (var i = 0; i < a.length; i++) {
	console.log("for", i, a[i]);
	}
*/

{
	// WHILE
	const a = [1, 2, 3];

	let i = 0;

	while (i < a.length) {
		console.log("for", i, a[i]);
		i++;
	}
}

{
	// DO-WHILE

	const a = [1, 2, 3];

	let i = 0;

	do {
		console.log("for", i, a[i]);
		i++;
	} while (i < a.length);

}