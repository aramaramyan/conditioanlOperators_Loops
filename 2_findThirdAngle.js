"use strict";

/* Given two variables, which are the angles of a triangle. Find the third angle of the triangle. (Sum of
the angles of a triangle equals 180 degrees). */

function findThirdAngle(angle1, angle2) {
	(angle1 + angle2 < 180 && angle1 > 0 && angle2 > 0) ? console.log(`Third angle is ${180 - (angle1 + angle2)}\xB0`) : console.log("ERROR");
} 

findThirdAngle(30, 30);