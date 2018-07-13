//--------------------------------------------------------------
// CLASS
//
// CodePen: https://codepen.io/xBLADEx/pen/QBbemg
//--------------------------------------------------------------

// Prototypal Inheritance
// Old way.
function Vehicle(make, model) {
	this.make = make;
	this.model = model;
}

Vehicle.prototype.honk = function() {
	console.log(`${this.make} Honk!`);
};

const jeep = new Vehicle('Jeep', 'Wrangler');

console.log(jeep);

// Class
// New way.
class Car {
	// Required.
	constructor(make, model) {
		this.make = make;
		this.model = model;
	}

	honk() {
		console.log(`${this.make} Honk!`);
	}
	// We can only call this with Car.info().
	static info() {
		console.log(`Jeep is better than a car.`);
	}

	// honda.nickname = 'Hot Ride';
	set nickname(name) {
		this.newName = name;
	}

	// honda.nickname;
	get nickname() {
		return this.newName;
	}
}

const honda = new Car('Honda', 'Civic Si');

console.log(Car.info());
