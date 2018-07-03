//--------------------------------------------------------------
// DESTRUCTURING FUNCTIONS
//
// CodePen: https://codepen.io/xBLADEx/pen/zabjWa
//--------------------------------------------------------------

function gold(amount) {
	return {
		USD: amount * 4,
		GPB: amount * 8,
		AUD: amount * 2,
	};
}

// Old way.
// const usd = gold(1000);
// console.log(usd.USD);

// New way. Note: Case sensitive, order does not matter.
const { USD, AUD, GPB } = gold(1200);

// Make function parameters an object. If no are options provided fallback to empty object which results in using the defaults.
function silver({ total = 1, weight = 0.2, type = 'bullion' } = {}) {
	return `The total is ${total} with a weight of ${weight} and of type of ${type}.`;
}

console.log(silver());
