//--------------------------------------------------------------
// MODULES
//
// CodePen: https://codepen.io/xBLADEx/pen/YjPmgW
//--------------------------------------------------------------

// FILE config.js
// Default export - Can only have one default export per module (file).
const weapon = 'Sword';
export default weapon;
// Named export - Can have multiple named exports. Used for each specific variable or function to export.
export const weapon = 'Sword';
export const armor = 'Shield';

// MAIN FILE
// Note: We can name 'weapon' anything we want when using export default.
import customWeapon from './path/to/config';
// Note: We need to use {} with named exports.
// We can rename the variable using 'as newName'.
import { weapon as weapons, armor } from './path/to/config';

console.log(weapon);
