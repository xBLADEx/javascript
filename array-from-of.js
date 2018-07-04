//--------------------------------------------------------------
// ARRAY FROM / OF
//
// CodePen: https://codepen.io/xBLADEx/pen/JZVMWL
//--------------------------------------------------------------

// These work only off the Array prototype.
// Example: Array.from() and Array.of()

// NodeList
const jeeps = document.querySelectorAll('.jeeps li');

// Error: Notice .map() is not a function.
// const names = jeeps.map(name => console.log(name));

// Convert to Array
const jeepsArray = Array.from(jeeps);
const jeepNames = jeepsArray.map(name => name.textContent);

// Note: The Array.from() second argument is a 'map' function.
const jeepsArray2 = Array.from(jeeps, name => name.textContent);

// Array.of() Example.
// All this does is make an array of what you pass in, why not just create an array?
const arrayOf = Array.of(1, 2, 3, 4, 5, 6, 7, 8);

console.log(arrayOf);
