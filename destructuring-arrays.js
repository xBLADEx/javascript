//--------------------------------------------------------------
// DESTRUCTURING ARRAYS
//
// CodePen: https://codepen.io/xBLADEx/pen/yEwjaM
//--------------------------------------------------------------

const weapons = ['Battle Axe', 'Short Sword', 'Dagger', 'Flail'];
const armor = 'Sallet,Targe,Belt,Shoulder Plates';
const gear = ['Battle Axe', 'Short Sword', 'Sallet', 'Targe'];

// Old way.
// const axe = weapons[0];

// New way.
const [axe, sword, dagger] = weapons;

// String.
const [helm, shield, belt, shoulder] = armor.split(',');

// Rest. Spread the remaining into an array.
const [primary, secondary, ...other] = gear;

// Swap values.
let mainHand = 'Wand';
let offHand = 'Orb';

[mainHand, offHand] = [offHand, mainHand];

console.log(mainHand, offHand);
