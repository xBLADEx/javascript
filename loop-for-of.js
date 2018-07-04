//--------------------------------------------------------------
// LOOP FOR OF
//
// CodePen: https://codepen.io/xBLADEx/pen/NzmwMJ
//--------------------------------------------------------------

const weapons = ['Dagger', 'Knife', 'Sword', 'Mace', 'Lance'];

// Old way.
for (let i = 0; i < weapons.length; i++) {
	// console.log(weapons[i]);
}

// forEach, but we can't 'break' in a forEach.
weapons.forEach(weapon => weapon);

// For in Loop, but it only outputs the index.
// This also outputs methods and properties, not ideal.
for (const item in weapons) {
	// item returns the index.
	// console.log(weapons[item]);
}

// For of Loop
for (const weapon of weapons) {
	// We can 'break' or 'continue' out of this loop.
	if (weapon === 'Sword') {
		break;
	}

	console.log(weapon);
}
