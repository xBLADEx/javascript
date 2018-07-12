//--------------------------------------------------------------
// ARRAY SOME AND EVERY
//
// CodePen: https://codepen.io/xBLADEx/pen/oyRzqM
//--------------------------------------------------------------

const ages = [32, 30, 5, 3, 1];

// Array.some()
// Returns 'true' or 'false'. True if at least one item meets condition.
const adult = ages.some(age => age >= 18);

// Array.every()
// Returns true if every item passes condition.
const allAdults = ages.every(age => age >= 18);

console.log(allAdults);
