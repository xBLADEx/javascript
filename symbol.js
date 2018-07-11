//--------------------------------------------------------------
// FETCH THEN CATCH
//
// CodePen: https://codepen.io/xBLADEx/pen/mjydvy
//--------------------------------------------------------------

// The string in Symbol is the description. Example Symbol('description')
// Both knife and weapon are unique, the just have the same description.
const knife = Symbol('Stiletto');
const weapon = Symbol('Stiletto');

// False
// console.log(knife === weapon);

const weapons = {
	[Symbol('Blade')]: { material: 'steel' },
	[Symbol('Blade')]: { material: 'steel' },
	[Symbol('Dagger')]: { material: 'silver' },
};

const getSymbols = Object.getOwnPropertySymbols(weapons);
const details = getSymbols.map(detail => weapons[detail]);

console.log(details);
