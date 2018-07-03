//--------------------------------------------------------------
// DESTRUCTURING OBJECTS
//
// CodePen: https://codepen.io/xBLADEx/pen/eKXMXg
//--------------------------------------------------------------

const weapons = {
	sword: 'Short Sword',
	knife: 'Butterfly Knife',
	dagger: 'Shade',
	axe: 'Battle Axe',
	'pole arm': 'Halberd',
};

// Old way.
// const sword = weapons.sword;

// Destructuring way.
const { sword, knife } = weapons;

// Rename variables.
const { sword: short, knife: blade } = weapons;

// Default values.
// Note flail does not exist in weapons object.
const { dagger, flail = 'Morning Star', axe } = weapons;

// Properties with spaces need to be assigned.
const { 'pole arm': polearm } = weapons;

// Put it all together.
const { h: helm = 'Bascinet', s: shield = 'Targe' } = { h: 'Helmet', a: 'Chest Armor' };

console.log(helm, shield);
