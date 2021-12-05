"use strict";

/*
Write a program to check the validity of password input by users. Validation :
1) At least 1 letter between [a-z] and 1 letter between [A-Z].
2) At least 1 number between [0-9].
3) At least 1 character from [$#@].
4) Minimum length 6 characters.
5) Maximum length 16 characters.
*/

function isValid(password) {

	if (typeof (password) !== "string") {
		return "Invalid"
	}

	return (password.length <= 16
		&& password.length >= 6
		&& (/[a-z]/).test(password)
		&& (/[A-Z]/).test(password)
		&& (/[0-9]/).test(password)
		&& (/[$#@]/).test(password)) ? "Valid" : "Invalid";
}

console.log(isValid("12asdf"));		  // Invalid
console.log(isValid("Aaza1234566#")); // Valid