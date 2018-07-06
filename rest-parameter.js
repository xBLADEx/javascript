//--------------------------------------------------------------
// DESTRUCTURING FUNCTIONS
//
// CodePen: https://codepen.io/xBLADEx/pen/pKXPPP
//--------------------------------------------------------------

// Spread Operator unpacks Array, Rest Parameter combines items into Array.

function gatherCoins(...coins) {
	console.log(coins);
}

gatherCoins('Penny', 'Nickel', 'Dime', 'Quarter', 'Half Dollar');
