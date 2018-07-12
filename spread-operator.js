//--------------------------------------------------------------
// SPREAD OPERATOR
//
// CodePen: https://codepen.io/xBLADEx/pen/BVeLqa
//--------------------------------------------------------------

const coins = ['Gold', 'Silver', 'Copper', 'Nickel'];
const gems = ['Ruby', 'Sapphire', 'Emerald'];

// Spread the Array's into a new Array.
const valuables = [...coins, ...gems];

// Bad Example: Copying Array
// const myGems = gems;
// myGems[0] = 'Diamond';
// Now gems Array is altered.

// Good Example: Copying Array with Spread
const myGems = [...gems];
myGems[0] = 'Diamond';

// Converting NodeList to Array
const gemList = [...document.querySelectorAll('.gems li')];

console.log(gemList);
